import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlRecipeById } from "../apis";
import { IFetchedMeal, IIngredient, IMeal } from "./types";
import { RootState } from "./store";

export const getRecipeById = createAsyncThunk(
  "recipes/getRecipeById",
  async (id?: string) => {
    const response = await fetch(urlRecipeById + id);
    const { meals } = await response.json();
    const formatedMeal = meals.map(
      ({
        strMeal,
        strYoutube,
        strMealThumb,
        strArea,
        strCategory,
        strInstructions,
        strSource,
        strTags,

        ...rest
      }: IFetchedMeal) => {
        console.log(rest);

        const ingredients: IIngredient[] = [];

        Object.entries(rest).forEach(([key, value]) => {
          if (key.startsWith("strIngredient") && value !== "") {
            const number = key.replace(/[a-zA-Z|]/g, "");

            const newkey = `strMeasure${number}`;

            ingredients.push({
              ingredient: value as string,
              measure: (rest as Record<string, string>)[newkey],
            });
          }
        });

        const result: IMeal = {
          meal: strMeal,
          video: strYoutube,
          mealImg: strMealThumb,
          area: strArea,
          category: strCategory,
          ingredients,
          instructions: strInstructions,
          article: strSource,
          tags: strTags,
        };

        return result;
      }
    );

    return formatedMeal[0];
  }
);

interface IRecipesState {
  searchedRecipes: IFetchedMeal[];
  selectedRecipe?: IMeal;
  isLoading: boolean;
  // favouriteRecipe: IMeal[];
}

const initialState: IRecipesState = {
  searchedRecipes: [],
  selectedRecipe: undefined,
  isLoading: false,
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipeById.pending, (state) => {
      state.isLoading = true;
    })

    builder.addCase(
      getRecipeById.fulfilled,
      (state, { payload }: PayloadAction<IMeal>) => {
        state.selectedRecipe = payload;
        state.isLoading = false;
      }
    );
  },
});

export const selectSelectedRecipe = (state: RootState) =>
  state.recipes.selectedRecipe;
export const selectIsLoading = (state: RootState) => state.recipes.isLoading;


export default recipeSlice.reducer;

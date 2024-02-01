import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlRecipeById, urlRecipeBySearchName } from "../apis";
import { IFetchedMeal, IFetchedMeals, IIngredient, IMeal, ISingleMeal } from "./types";
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
        idMeal,
        ...rest
      }: IFetchedMeal) => {        
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
          id: idMeal,
        };

        return result;
      }
    );

    return formatedMeal[0];
  }
);

export const getRecipesBySearchName = createAsyncThunk(
  "recipes/getRecipesBySearchName",
  async (searchName: string) => {
    const response = await fetch(urlRecipeBySearchName + searchName);
    const { meals } = await response.json();

    const formatedMeals: ISingleMeal[] = meals.map(({ idMeal, strMeal, strMealThumb }: IFetchedMeals) => ({ 
      id: idMeal,
      meal: strMeal,
      img: strMealThumb,
    }))
  
    
    return formatedMeals;
    }
)

const getFavoritesLocalStorage = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
}


interface IRecipesState {
  searchedRecipes: ISingleMeal[];
  selectedRecipe: IMeal | null;
  isLoading: boolean;
  hasError: boolean;
  favoritedRecipes: IMeal[];
}

const initialState: IRecipesState = {
  searchedRecipes: [],
  selectedRecipe: null,
  isLoading: false,
  hasError: false,
  favoritedRecipes: getFavoritesLocalStorage(),
}

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IMeal>) {
      state.favoritedRecipes = [...state.favoritedRecipes, payload];
      localStorage.setItem('favorites', JSON.stringify(state.favoritedRecipes))
    },
    removeFromFavorites(state, { payload }: PayloadAction<string>) {
      state.favoritedRecipes = state.favoritedRecipes?.filter((item) => item.id !== payload)
      localStorage.setItem('favorites', JSON.stringify(state.favoritedRecipes))
    }

  },
  extraReducers: (builder) => {
    builder.addCase(getRecipeById.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    })

    builder.addCase(
      getRecipeById.fulfilled,
      (state, { payload }: PayloadAction<IMeal>) => {
        state.selectedRecipe = payload;
        state.isLoading = false;
        state.hasError = false;
      }
    );
    builder.addCase(
      getRecipeById.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      }
    )

    builder.addCase(
      getRecipesBySearchName.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      }
    );

        builder.addCase(
      getRecipesBySearchName.fulfilled,
      (state, { payload }: PayloadAction<ISingleMeal[]>) => {
        state.searchedRecipes = payload;
        state.isLoading = false;
        state.hasError = false;
      }
        );
    builder.addCase(
      getRecipesBySearchName.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
        state.searchedRecipes = [];
      }
    )
  },
});

// actions
export const { addToFavorites, removeFromFavorites } = recipeSlice.actions;

// selectors
export const selectSelectedRecipe = (state: RootState) =>
  state.recipes.selectedRecipe;
export const selectIsLoadingRecipes = (state: RootState) => state.recipes.isLoading;
export const selectSearchedRecipes = (state: RootState) => state.recipes.searchedRecipes;
export const selectErrorRecipes = (state: RootState) => state.recipes.hasError;
export const selectFavoritesRecipes = (state: RootState) => state.recipes.favoritedRecipes;

export default recipeSlice.reducer;

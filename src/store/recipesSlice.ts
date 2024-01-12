import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlRecipeById } from "../apis";
import { IFetchedMeal, IMeal } from "./types";
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
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,

        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
          strMeasure8,
        
          strInstructions,
          strSource,
          strTags,
      }: IFetchedMeal) => ({
        meal: strMeal,
        video: strYoutube,
        mealImg: strMealThumb,
        area: strArea,
        category: strCategory,
        ingredient1: strIngredient1,
        ingredient2: strIngredient2,
        ingredient3: strIngredient3,
        ingredient4: strIngredient4,
        ingredient5: strIngredient5,
        ingredient6: strIngredient6,
        ingredient7: strIngredient7,
        ingredient8: strIngredient8,

        measure1: strMeasure1,
        measure2: strMeasure2,
        measure3: strMeasure3,
        measure4: strMeasure4,
        measure5: strMeasure5,
        measure6: strMeasure6,
        measure7: strMeasure7,
            measure8: strMeasure8,
            instructions: strInstructions,
            aticle: strSource,
        tags: strTags,
      })
    );
      
      return formatedMeal[0];
  }
);

interface IRecipesState {
  searchedRecipes: IFetchedMeal[];
  selectedRecipe?: IMeal;
  // favouriteRecipe: IMeal[];
}

const initialState: IRecipesState = {
  searchedRecipes: [],
  selectedRecipe: undefined,
  
}

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // builder.addCase(getRecipeById.pending, (state) => {

    // })

    builder.addCase(getRecipeById.fulfilled, (state, { payload }: PayloadAction<IMeal>) => {
      state.selectedRecipe = payload;
    })
  }
})

export const selectSelectedRecipe = (state: RootState) => state.recipes.selectedRecipe;

export default recipeSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IFetchedCategory, IFetchedMeals, ISingleMeal } from "./types";
import { urlAllCategories, urlCategoryMeals } from "../apis";
import { RootState } from "./store";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await fetch(urlAllCategories);
    const { categories } = await response.json();
    const formatedCategories: ICategory[] = categories
      .sort((a: IFetchedCategory, b: IFetchedCategory) =>
        a.strCategory.localeCompare(b.strCategory)
      )
      .map(
        ({ idCategory, strCategory, strCategoryThumb }: IFetchedCategory) => ({
          id: idCategory,
          category: strCategory,
          img: strCategoryThumb,
        })
      );

    return formatedCategories;
  }
);

export const getCategoryMeals = createAsyncThunk(
  "categories/getCategoryMeals",
  async (category: string) => {
    const response = await fetch(urlCategoryMeals + category);
    const { meals } = await response.json();

    const formatedMeals: ISingleMeal[] = meals.map(({ idMeal, strMeal, strMealThumb }: IFetchedMeals) => ({ 
      id: idMeal,
      meal: strMeal,
      img: strMealThumb,
    }))

    return formatedMeals;
  }
);

interface CategoriesState {
  categories: ICategory[];
  selectedCategory: string;
  hasError: boolean;
  isLoading: boolean;
  categoryMeals?: ISingleMeal[];
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: "",
  hasError: false,
  isLoading: false,
  categoryMeals: undefined,
  // getLocalStorage('category'),f
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }: PayloadAction<string>) => {
      state.selectedCategory = payload;
      localStorage.setItem("category", payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      // state.isLoading = true,
      //   state.hasError = false,
    });
    builder.addCase(
      getCategories.fulfilled,
      (state, { payload }: PayloadAction<ICategory[]>) => {
        state.categories = payload;
      }
    );
    // builder.addCase(getCategoryMeals.pending, (state, { payload }))
    builder.addCase(getCategoryMeals.fulfilled, (state, { payload }: PayloadAction<ISingleMeal[]>) => {
      state.categoryMeals = payload;
    })
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories;
export const selectSelectedCategory = (state: RootState) =>
  state.categories.selectedCategory;
export const selectCategoryMeals = (state: RootState) => state.categories.categoryMeals;

export default categoriesSlice.reducer;

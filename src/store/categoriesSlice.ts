import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IFetchedCategory } from "./types";
import { urlAllCategories } from "../apis";



export const getCategories = createAsyncThunk(
  'categories/getCategories', async () => {
    const response = await fetch(urlAllCategories)
    const { categories } = await response.json()
    const formatedCategories: ICategory[] = categories.sort((a: IFetchedCategory, b: IFetchedCategory) => a.strCategory.localeCompare(b.strCategory)).map(({ idCategory, strCategory, strCategoryThumb }: IFetchedCategory) => ({
    id: idCategory, category: strCategory, img: strCategoryThumb
    }))

    return formatedCategories;
  }
)













interface CategoriesState {
  categories: ICategory[];
  selectedCategory: string;
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: '',
    // getLocalStorage('category'),f

}

export const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }: PayloadAction<string>) => {
      state.selectedCategory = payload
      localStorage.setItem('category', payload)
    }
  },
});

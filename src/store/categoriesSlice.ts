import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IFetchedCategory } from "./types";
import { urlAllCategories } from "../apis";
import { RootState } from "./store";



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
  hasError: boolean;
  isLoading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: '',
  hasError: false,
  isLoading: false,
    // getLocalStorage('category'),f
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // setSelectedCategory: (state, { payload }: PayloadAction<string>) => {
    //   state.selectedCategory = payload
    //   localStorage.setItem('category', payload)
    // }
  },

  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      // state.isLoading = true,
      //   state.hasError = false,
    })
    builder.addCase(getCategories.fulfilled, (state, { payload }: PayloadAction<ICategory[]>) => {
      state.categories = payload
    })
  }

});

// export const { setSelectedCategory } = categoriesSlice.actions;
export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
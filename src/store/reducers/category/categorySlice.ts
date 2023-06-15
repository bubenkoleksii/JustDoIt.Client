import {ICategoryResponse} from "../../../models/ICategoryResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategoryRequest} from "../../../models/ICategoryRequest";
import {v4} from 'uuid';

interface CategoryState {
    categories: ICategoryResponse[],
    loading: boolean,
    error: string,
}

const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: ''
}

export const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {
       getCategories: (state) => state,
       getCategoriesLoaded: (state, action: PayloadAction<ICategoryResponse[]>) => {
           state.categories = action.payload;
       },
       addCategoryAsync: (state, action: PayloadAction<ICategoryRequest>) => state,
       addCategory: (state, action: PayloadAction<ICategoryRequest>) => {
           const id = v4();
           state.categories.push({id: id, name: action.payload.name, countOfJobs: 0});
       },
       removeCategoryAsync: (state, action: PayloadAction<string>) => state,
       removeCategory: (state, action: PayloadAction<string>) => {
           state.categories = state.categories.filter(category => category.id !== action.payload)
       },
       setLoading: (state, action: PayloadAction<boolean>) => {
           state.loading = action.payload;
       },
       //TODO setError: ()
   }
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
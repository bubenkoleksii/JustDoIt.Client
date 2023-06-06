import {ICategoryResponse} from "../../models/ICategoryResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategoryRequest} from "../../models/ICategoryRequest";
import {v4} from 'uuid';

interface CategoryState {
    categories: ICategoryResponse[]
}

const initialState: CategoryState = {
    categories: []
}

export const categorySlice = createSlice({
   name: 'category',
   initialState,
   reducers: {
       getCategories: (state, action: PayloadAction<ICategoryResponse[]>) => {
           state.categories = action.payload;
       },
       addCategory: (state, action: PayloadAction<ICategoryRequest>) => {
           const id = v4();
           state.categories.push({id: id, name: action.payload.name, countOfJobs: 0});
       },
       removeCategory: (state, action: PayloadAction<string>) => {
           state.categories = state.categories.filter(category => category.id !== action.payload)
       }
   }
});

export const {getCategories, addCategory, removeCategory} = categorySlice.actions;

export default categorySlice.reducer;
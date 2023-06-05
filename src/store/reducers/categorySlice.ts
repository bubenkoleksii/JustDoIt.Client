import {ICategoryResponse} from "../../models/ICategoryResponse";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
       removeCategory: (state, action: PayloadAction<string>) => {
           state.categories = state.categories.filter(category => category.id != action.payload)
       }
   }
});

export const {getCategories, removeCategory} = categorySlice.actions;

export default categorySlice.reducer;
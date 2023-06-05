import {combineReducers, configureStore} from "@reduxjs/toolkit";
import jobReducer from "./reducers/jobSlice";
import categoryReducer from "./reducers/categorySlice";

const rootReducer = combineReducers({
    jobReducer,
    categoryReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
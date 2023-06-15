import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {combineEpics, createEpicMiddleware, Epic} from 'redux-observable';
import jobReducer from "./reducers/job/jobSlice";
import categoryReducer from "./reducers/category/categorySlice";
import {categoryEpic} from "./reducers/category/categoryEpic";
import {catchError} from "rxjs";

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
    jobReducer,
    categoryReducer
});

export const rootEpic: Epic = (action$, store$, dependencies) =>
    combineEpics(
        categoryEpic
    )(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            return source;
        })
    )

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: [epicMiddleware]
    });
}

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
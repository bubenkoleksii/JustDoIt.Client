import {combineEpics, Epic, ofType} from "redux-observable";
import {categoryActions} from "./categorySlice";
import {RootState} from "../../store";
import {catchError, endWith, from, mergeMap, of, startWith, tap} from "rxjs";
import {client} from "../../graphql/graphql";
import {ICategoryResponse} from "../../../models/ICategoryResponse";
import {GET_ALL} from "../../graphql/category/categoryQueries";

export const getCategoriesEpic: Epic<ReturnType<typeof categoryActions.getCategories>, any, RootState> = (action$, state$) => {
    console.log(2)

    return action$.pipe(
        tap(() => console.log(1)),
        ofType(categoryActions.getCategories.type),
        mergeMap(action => from(
                client.query<any>({
                    query: GET_ALL
                })
            ).pipe(
                mergeMap(response => [
                    categoryActions.getCategoriesLoaded(response.data.category.getAll)
                ]),
                catchError(error => of(console.log(error.message))),
                startWith(categoryActions.setLoading(true)),
                endWith(categoryActions.setLoading(false))
            )
        )
    );
}

export const categoryEpic = combineEpics(
    getCategoriesEpic
)
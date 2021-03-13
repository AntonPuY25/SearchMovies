import {TypeStore} from "../Store/store";


export const getMovieSelectors = (state: TypeStore) => {
    return state.moviesPage
}
export type TypeGetAllMoviesSelector = ReturnType<typeof getMovieSelectors>
import {TypeStore} from "../Store/store";


export const getAllMoviesSelectors = (state: TypeStore) => {
    return state.moviesPage
}
export type TypeGetAllMoviesSelector = ReturnType<typeof getAllMoviesSelectors>
import GetApi, {TypeMovies} from "../../Dall/apiServer";
import {ThunkAction} from "redux-thunk";
import {TypeStore} from "../store";

type TypeInitialState = {
    movies: Array<TypeMovies>
}

const initialState = {
    movies: []
}
type TypeSetMoviesAction = ReturnType<typeof setMoviesAC>
const setMoviesAC = (movies: Array<TypeMovies>) => {
    return {
        type: 'moviesReducer/SET_MOVIES',
        movies
    } as const
}

type TypeActions = TypeSetMoviesAction;
const MoviesReducer = (state: TypeInitialState = initialState, action: TypeActions): TypeInitialState => {
    switch (action.type) {
        case "moviesReducer/SET_MOVIES": {
            return {
                ...state,
                movies: action.movies
            }
        }

        default:
            return state
    }

}
export default MoviesReducer;

export const getMoviesThunkCreator = ():ThunkAction<void, TypeStore, unknown, TypeActions>=>
   async (dispatch)=>{
       const result = await GetApi.getMovies('war')
       dispatch(setMoviesAC(result))
       console.log(result)
}
import GetApi, {TypeMovies} from "../../Dall/apiServer";
import {ThunkAction} from "redux-thunk";
import {TypeStore} from "../store";

export type TypeInitialState = {
    movies: Array<TypeMovies>
    valueSearching:string
}

const initialState = {
    movies: [],
    valueSearching:""
}
type TypeSetMoviesAction = ReturnType<typeof setMoviesAC>
const setMoviesAC = (movies: Array<TypeMovies>) => {
    return {
        type: 'moviesReducer/SET_MOVIES',
        movies
    } as const
}
type TypeSetTextSearching = ReturnType<typeof setTextSearchingMovies>
export const setTextSearchingMovies = (title:string)=>{
    return {
        type: 'moviesReducer/SET_TEXT_SEARCHING_MOVIES',
        title
    } as const
}

type TypeActions = TypeSetMoviesAction |TypeSetTextSearching;
const MoviesReducer = (state: TypeInitialState = initialState, action: TypeActions): TypeInitialState => {
    switch (action.type) {
        case "moviesReducer/SET_MOVIES": {
            return {
                ...state,
                movies: action.movies,
                valueSearching:""
            }
        }
        case "moviesReducer/SET_TEXT_SEARCHING_MOVIES":{
            return {...state,
             valueSearching:action.title
            }
        }

        default:
            return state
    }

}
export default MoviesReducer;

export const getMoviesThunkCreator = ():ThunkAction<void, TypeStore, unknown, TypeActions>=>
   async (dispatch,getState)=>{
       const result = await GetApi.getMovies(getState().moviesPage.valueSearching)
       dispatch(setMoviesAC(result))
       console.log(result)
}
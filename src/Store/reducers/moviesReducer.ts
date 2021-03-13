import GetApi, {TypeResponseData} from "../../Dall/apiServer";
import {ThunkAction} from "redux-thunk";
import {TypeStore} from "../store";

export type TypeInitialState = {
    movies: TypeResponseData
    valueSearching:string
    isError:boolean
}

const initialState = {
    movies:{}as TypeResponseData,
    valueSearching:"",
    isError:false
}
type TypeSetMoviesAction = ReturnType<typeof setMoviesAC>
const setMoviesAC = (movies:TypeResponseData) => {
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
type TypeIsError = ReturnType<typeof setIsError>
export const setIsError = (isError:boolean)=>{
    return {
        type: 'moviesReducer/SET_ERROR_SEARCHING_MOVIES',
        isError
    } as const
}

type TypeActions = TypeSetMoviesAction |TypeSetTextSearching|TypeIsError;
const MoviesReducer = (state: TypeInitialState = initialState, action: TypeActions): TypeInitialState => {
    switch (action.type) {
        case "moviesReducer/SET_MOVIES": {
            let newState = action.movies
            return {
            ...state,
                movies:newState,
                valueSearching:""

            }
        }
        case "moviesReducer/SET_TEXT_SEARCHING_MOVIES":{
            return {...state,
             valueSearching:action.title
            }
        }
        case "moviesReducer/SET_ERROR_SEARCHING_MOVIES":{
            return{...state,
            isError:action.isError
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
       dispatch(setIsError(false))
       console.log(result)
}
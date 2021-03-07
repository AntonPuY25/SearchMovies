import {createStore,combineReducers,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import MoviesReducer from "./reducers/moviesReducer";
let reducers = combineReducers({
    moviesPage:MoviesReducer
})
const store = createStore(reducers,applyMiddleware(thunkMiddleware))

export type TypeStore = ReturnType<typeof reducers>
export default store;
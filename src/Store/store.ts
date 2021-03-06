import {createStore,combineReducers} from "redux";
let reducers = combineReducers({

})
const store = createStore(reducers)

export type TypeStore = ReturnType<typeof reducers>
export default store;
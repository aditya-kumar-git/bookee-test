import allReducers from "./Reducers"

import { legacy_createStore as createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"

var myStore = createStore(allReducers, compose(applyMiddleware(thunk)))

export default myStore

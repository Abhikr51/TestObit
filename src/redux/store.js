//packages
import {createStore , combineReducers,applyMiddleware} from 'redux'
import ReduxThunk from "redux-thunk"


//reducers
import AuthReducer from './reducers/AuthReducer'
import StudentDataReducer from './reducers/StudentDataReducer'
import TestReducer from './reducers/TestReducer'

const store = combineReducers({
    auth : AuthReducer,
    testResult : TestReducer,
    studentData : StudentDataReducer
}) 

const middlewareStore = applyMiddleware (ReduxThunk)(createStore)
export default middlewareStore(store,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
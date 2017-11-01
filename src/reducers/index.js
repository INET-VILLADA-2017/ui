import { combineReducers } from 'redux'
import authReducer from './auth'
import dataReducer from './data'
import displayReducer from './display'

const AppReducer = combineReducers({
    auth: authReducer,
    data: dataReducer,
    display: displayReducer,
});

export default AppReducer
import { combineReducers } from 'redux'
import authReducer from './auth'
import dataReducer from './data'

const AppReducer = combineReducers({
    auth: authReducer,
    data: dataReducer
});

export default AppReducer;
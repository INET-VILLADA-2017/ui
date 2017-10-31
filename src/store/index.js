import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppReducer from '../reducers'

export default function configureStore() {
    return createStore(
        AppReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(
            thunk
        )
    )
}

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import AppReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'data'],
}

const reducer = persistReducer(persistConfig, AppReducer)

export default function configureStore() {
    let store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(
            thunk
        )
    )
    let persistor = persistStore(store)
    return {persistor, store}
}

import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import reactThunk from 'redux-thunk'

export const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    reducer,
    applyMiddleware(reactThunk,sagaMiddleware)
)




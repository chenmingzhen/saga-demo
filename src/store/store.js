import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import {changeVal} from './saga'

export const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(changeVal)


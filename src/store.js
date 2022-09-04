import {combineReducers, createStore} from 'redux'
import CounterScrenTwoRed from './reducers/CounterScrenReducers'
import SplashReducer from './reducers/SplashReducer'

const rootReducer = combineReducers({
    SplashReducer , CounterScrenTwoRed
})

const store =  createStore(rootReducer)

export default class StoreUtils {

    static getStore() {
        return store
    }

}
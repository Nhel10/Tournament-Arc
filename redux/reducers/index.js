/* Reducers store the state and update whenever they receive an action */ 

import {combineReducers} from 'redux'
import {user} from './user'

const Reducers = combineReducers({
    userState:user
})

export default Reducers
import { combineReducers } from 'redux'
import RequestReducer from './requestsReducer';
import UserReducer from './userReducers'

export default combineReducers({
    users: UserReducer,
    requests: RequestReducer
})
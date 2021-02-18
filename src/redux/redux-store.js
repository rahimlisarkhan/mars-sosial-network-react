import {createStore, combineReducers, applyMiddleware} from 'redux'
import { messagesPageReducer } from './reducers/messagePage/messagesPageReducer'
import { profilePageReducer } from './reducers/profilePage/profilePageReducer'
import { navBarColumnReducer } from './reducers/navbar/navBarColumnReducer'
import { headerRowReducer } from './reducers/header/headerRowReducer'
import { authenReduser } from './reducers/authenReduser'
import thunk from 'redux-thunk'


//ALL REDUCERS
const reducers = combineReducers({
    header:headerRowReducer,
    navBar:navBarColumnReducer,
    profilePage:profilePageReducer,
    messagesPage:messagesPageReducer,
    authenfication:authenReduser
})

//STORE
export const store = createStore(reducers,{},applyMiddleware(thunk))
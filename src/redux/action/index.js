import * as type from "../types"
import { baseURL } from "./baseURL"

//Authenfication
export let authenAction = (data, callback) => dispatch => {
    
    dispatch({type:type.IS_AUTH, payload:data})

    callback('/mars-group/')
    localStorage.setItem('token', data.username)
}

//Header for Get request 
export let getUserHeader = () => (dispatch) =>{
    // baseURL.get(`/users/6/`)
    //      .then(resp => dispatch({type:type.GET_USER_HEADER, payload:resp.data }) )
} 


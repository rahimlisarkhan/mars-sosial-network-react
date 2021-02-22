import axios from "axios"
import { toast } from "react-toastify"
import * as type from "../types"
import { baseURL } from "./baseURL"
import 'react-toastify/dist/ReactToastify.css';
import decode from 'jwt-decode'


//Authenfication
export let authenAction = (data, callback) => dispatch => {
    baseURL.post('/login/',data)
    .then(response =>{
        let userToken =response.data.access
        
        axios.defaults.headers.common['Authorization'] =`Bearer ${userToken}`;
        dispatch({type:type.IS_AUTH, payload:userToken})

        callback('/mars-group/')
        localStorage.setItem('token', userToken)

    })
    .catch(err => toast.error(err.message))
 
}

//Check token
export let checkToken = token => dispatch => {

    console.log(token);
    axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
    dispatch({type:type.IS_AUTH, payload:token})
    dispatch({type:type.USER_ID, payload:decode(token).user_id})
} 


//Authenfication
export let authenSignUpAction = (data, callback) => dispatch => {
    
    baseURL.post('/register/',data)
    .then(response =>{
        console.log(response);
        toast.success('Registration completed successfully!')
        callback('/welcome/login')
    })
    .catch(err => toast.error(err.message))
 
}

//Header for Get request 
export let getUserHeader = () => (dispatch) =>{
    baseURL.get(`/users/6/`)
           .then(resp => dispatch({type:type.GET_USER_HEADER, payload:resp.data }) )
} 


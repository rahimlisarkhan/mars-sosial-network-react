import { baseURL } from '../baseURL'
import * as type from "../../types"


//SEND MESSAGES | POST REQUEST
export let addMessage = (value,id) => dispatch => {
    
    let data = {msg_content:value, sender:6, reciever:id}
  
    dispatch({type:type.DISABLE_INPUT_BTN, payload:true})

    baseURL.post("/messages/",data)
    .then((resp) => dispatch({ type:type.SEND_UPDATE_MESSAGE,payload:resp.data}) )
    .catch(err => dispatch({type:type.ERROR_MESSAGE, payload:true}))
    .finally(() => dispatch({ type:type.DISABLE_INPUT_BTN, payload:false}))

}

//USERS ALL DATA | GET REQUEST
export let getUsers = () => dispatch =>{

    dispatch({type:type.REQUEST_LOADING_USERS,payload:true})

    baseURL.get(`/users/`)
    .then((resp) => dispatch({ type:type.GET_USERS ,payload:resp.data}) )
    .catch(err => dispatch({type:type.ERROR_MESSAGE, payload:true}))
    .finally(()=>  dispatch({type:type.REQUEST_LOADING_USERS,payload:false}))

}

//#GET MESSAGES BY ID | GET REQUEST
export let getMessagesAction = id => dispatch => {
    
    dispatch({type:type.REQUEST_LOADING_MSG, payload:true})
    
    baseURL.get(`/messages/6/${id}/`)
    .then((resp) => dispatch({type:type.GET_MESSAGES_BY_ID ,payload:resp.data}) )
    .finally( ()=> dispatch({type:type.REQUEST_LOADING_MSG, payload:false}))
    .catch(err => dispatch({type:type.ERROR_MESSAGE, payload:true}))
}




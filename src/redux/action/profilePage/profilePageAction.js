import * as type from "../../types"
import { baseURL } from '../baseURL'

//POST REQUEST FOR USER POST
export let addPost = (value) => (dispatch) => {
    let data = {post_content: value, user: 6}
    
    dispatch({type:type.DISABLE_INPUT_BTN, payload:true})
    baseURL.post('/posts/6/',data)
         .then((resp) => dispatch({type:type.ADD_SHARE, payload:resp.data}))
         .catch(err => dispatch({type:type.ERROR_MESSAGE, payload:true}))
         .finally(() =>  dispatch({type:type.DISABLE_INPUT_BTN, payload:false}))
}


//GET REQUEST FOR USER 
export let getUser = (id=6) => (dispatch) =>{

    dispatch({type:type.REQUEST_LOADING_USER, payload:true})
    baseURL.get(`/users/${id}/`)
         .then(resp => dispatch({type:type.GET_USER, payload:resp.data }) )
         .catch(err => dispatch({type:type.ERROR_MESSAGE, payload:true}))
         .finally(()=> dispatch({type:type.REQUEST_LOADING_USER, payload:false}))

} 

//GET REQUEST FOR USER POST
export let getUserPost = (id=6) => (dispatch) => {
    
    dispatch({type:type.REQUEST_LOADING_POST, payload:true})
    baseURL.get(`/posts/?user_id=${id}`)
         .then(resp => dispatch({type:type.GET_USER_POSTS, payload:resp.data}))
         .catch(err => dispatch({type:type.ERROR_MESSAGE, payload:true}))
         .finally(()=> dispatch({type:type.REQUEST_LOADING_POST, payload:false}))

}

//PUT REQUEST FOR USER
 export let formPut = (data) => (dispatch) => {
    console.log('====================================');
    console.log(data);
    delete data.image
    delete data.cover_image
    console.log('====================================');
    dispatch({type:type.DISABLE_INPUT_BTN, payload:true})
    baseURL.patch('/users/6/',data)
        .then(resp => dispatch({type:type.GET_USER, payload:resp.data }) )
        .catch(err => dispatch({type:type.ERROR_MESSAGE, payload:true}))
        .finally(()=> dispatch({type:type.DISABLE_INPUT_BTN, payload:false}))
}
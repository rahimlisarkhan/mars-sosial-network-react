import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { compose } from 'redux';
import { addPost,getUser,getUserPost,formPut } from '../../../redux/action/profilePage/profilePageAction';
import { AuthRequired } from '../../HOC/authRequired';
import ProfilePage from './ProfilePage';


let ProfilePageContainer = (props) =>{
    
 

    useEffect(()=>{props.getUser(props.match.params.id?props.match.params.id:props.state.profile.userID)
                   props.getUserPost(props.match.params.id?props.match.params.id:props.state.profile.userID)
    },[])
                        
        return(
            <>
            <ProfilePage 
                propsData={props.state}
                handleClick={(value) => props.addPost(value)}
                formPut={(data,id) => props.formPut(data,id)}/>
            <ToastContainer className='font-size'/>
            </>
        )
   }

let mapStateToProps = (state) =>({state:state.profilePage})

export default compose(
               connect(mapStateToProps,
                      {addPost,
                      getUser,
                      formPut,
                      getUserPost}),
                      AuthRequired
                      )(ProfilePageContainer)

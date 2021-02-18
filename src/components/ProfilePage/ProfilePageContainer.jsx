import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { addPost,getUser,getUserPost,formPut } from '../../redux/action/profilePage/profilePageAction';
import { AuthRequired } from '../HOC/authRequired';
import ProfilePage from './ProfilePage';


let ProfilePageContainer = (props) =>{

    useEffect(()=>{props.getUser(props.match.params.id)
                   props.getUserPost(props.match.params.id)
    },[props.getUser,  props.getUserPost])
                        
        return(
            <ProfilePage 
                propsData={props.state}
                handleClick={(value) => props.addPost(value)}
                formPut={(data) => props.formPut(data)}
            />
        )
   }

let mapStateToProps = (state) =>({state:state.profilePage})

export default compose(AuthRequired,
               connect(mapStateToProps,
                      {addPost,
                      getUser,
                      formPut,
                      getUserPost})
                      )(ProfilePageContainer)

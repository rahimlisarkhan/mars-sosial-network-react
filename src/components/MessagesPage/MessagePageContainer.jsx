import React, { useEffect } from "react";
import {addMessage,getUsers,getMessagesAction} from "../../redux/action/messagePage/messagePageAction";
import { connect } from "react-redux";
import MessagesPage from "./MessagesPage";
import Loader from "../common/Loader";
import { compose } from "redux";
import { AuthRequired } from "../HOC/authRequired";

let MessagePageContainer = (props) => {
  
  useEffect(()=>{props.getUsers() }, [])
  let locationPathId = parseInt(props.match.params.id)

    //COMPONETS
    return (
       !props.state.isLoadingUsers 
        ? <MessagesPage
          data={props.state}
          getUserMessagesById={(id) => props.getMessagesAction(id)}
          handleClick={(value) => props.addMessage(value, locationPathId)}
          /> 
        : <Loader/>
       
    );
}


//CONNECT STORE
const mapStateToProps = (state) => ({state: state.messagesPage})

export default compose(
               connect(mapStateToProps,{
                      addMessage,
                      getUsers,
                      getMessagesAction}),
                      AuthRequired)(MessagePageContainer)



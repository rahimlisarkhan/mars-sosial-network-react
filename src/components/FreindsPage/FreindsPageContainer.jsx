import React, { useEffect } from 'react'
import Loader from '../common/Loader'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuthRequired } from '../HOC/authRequired'
import FreindCard from './FreindCard'
import {getUsers} from '../../redux/action/messagePage/messagePageAction'


  let FreindsPageContainer = (props) => {
     useEffect(() => {props.getUsers()},[])  

        return(
            !props.isLoadingUsers
            ?<div className="freinds-list">
                {props.userFreinds.filter(el=> el.id !== 6).map(el =>  <FreindCard key={el.id} data={el} /> )}
             </div>
            :<Loader/>
        )
}

let mapStateToProps = (state)=>{
    return{
        userFreinds:state.messagesPage.users,
        isLoadingUsers:state.messagesPage.isLoadingUsers
    }
}

export default compose(connect(mapStateToProps,{getUsers}),AuthRequired)(FreindsPageContainer)
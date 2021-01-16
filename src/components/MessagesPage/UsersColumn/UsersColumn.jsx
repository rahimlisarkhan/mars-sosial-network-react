import React from 'react'
import UsersColumnList from './UsersColumnList'


const UsersColumn = (props) =>{
    // console.log(props)
    return(
        <div className="content-messages__users">
            {props.data.map((el,i)=><UsersColumnList key={i} parentPathName={props.parentPathName}  userdata={el} userKey={i+1} />)}
        </div>
    )
}


export default UsersColumn
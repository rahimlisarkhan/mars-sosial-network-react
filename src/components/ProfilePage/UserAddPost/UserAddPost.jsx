import React from 'react';
import {addShare} from '../../../Function/functions'

const UserPost = (props) => {
    let ref = React.createRef()
     
    return(
        <div className="user-add-post">
            <h1>{props.headerName}</h1>
            <textarea ref={ref}  name="userPost" placeholder={props.placeholder}>
            </textarea>
            <a  onClick={()=>addShare(props.objKey,ref,props.data)}>{props.btnName}</a>
        </div>
    )
}

export default UserPost;
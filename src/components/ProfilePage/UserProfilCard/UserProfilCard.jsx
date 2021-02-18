import React, { useState } from 'react'
import { BiEdit,BiExit } from 'react-icons/bi';
import ProfilePageForm from '../ProfilePageForm/ProfilePageForm';
import ProfilePageUserInfo from '../ProfilePageForm/ProfilePageUserInfo';

let UserProfilCard = (props) => {
  
const [editMode,setEditMode] = useState(false);

    return(
        <div className="user-profil-card">
            <div className='user-profil-card__cover'>
                 <img src={props.userdata.cover_image}/>
            </div>

            <div className='user-profil-card__info'>
                <img src={props.userdata.image}/>
                
                {!editMode
                ?<ProfilePageUserInfo userdata={props.userdata} />
                :<ProfilePageForm userdata={props.userdata} formPut={props.formPut}/>}            
                
                {props.userdata.id===6
                    ?<span onClick={() => setEditMode(!editMode)} 
                           className='create-content'>{!editMode ? <BiEdit className='edit-icon-btn'/> 
                                                                 : <BiExit  className='edit-icon-btn hoverExit'/>}
                     </span>
                    : <div></div>}
               
            </div>
        </div>
    )
}

export default UserProfilCard;
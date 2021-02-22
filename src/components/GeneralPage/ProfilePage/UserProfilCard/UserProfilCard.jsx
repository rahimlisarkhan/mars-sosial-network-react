import React, { useState } from 'react'
import { BiEdit,BiExit } from 'react-icons/bi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePageForm from '../ProfilePageForm/ProfilePageForm';
import ProfilePageUserInfo from '../ProfilePageForm/ProfilePageUserInfo';

let UserProfilCard = (props) => {
  
const [editMode,setEditMode] = useState(false);

    return(
        <div className="user-profil-card">
            <div className='user-profil-card__cover'>
                {props.userdata.cover_image 
                ?<img src={props.userdata.cover_image} alt='me'/>
                :<img src='https://image.freepik.com/free-vector/abstract-triangulated-background-gradient-red-blue-background-illustrator_69961-14.jpg' alt='me'/>
                }
            </div>

            <div className='user-profil-card__info'>
                <img src={props.userdata.image} alt='me'/>
                
                {!editMode
                ?<ProfilePageUserInfo userdata={props.userdata} />
                :<ProfilePageForm userdata={props.userdata} 
                                  userID={props.userID} 
                                  formPut={props.formPut}/>}            
                
                {props.userdata.id===props.userID
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
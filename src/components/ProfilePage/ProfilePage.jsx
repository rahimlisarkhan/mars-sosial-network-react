import React from 'react'

//Pages
import UserProfilCard from './UserProfilCard/UserProfilCard'
import UserAddPost from './UserAddPost/UserAddPost';
import UserSharePosts from './UserSharePosts/UserSharePosts';

const ProfilePage = (props) => {
    return (
        <div className="content container-C" >
            <UserProfilCard userdata={props.profile.user}/>
            <UserAddPost headerName="My Post" objKey='post' data={props.profile.posts} placeholder="What do you think?" btnName="Share" /> 
            <UserSharePosts userdata={props.profile}/>
        </div>
    )
}


export default ProfilePage
import React from 'react';
import UserPostList from './UserPostList'


const UserSharePosts = (props) => {
    return(
        <>
     {props.userdata.posts.slice(0).reverse().map((el, i)=><UserPostList key={i} profileData={props.userdata.user} data={el} />  )}
        </>
    )
}

export default UserSharePosts


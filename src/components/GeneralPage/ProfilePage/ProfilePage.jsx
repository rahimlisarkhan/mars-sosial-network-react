import React from "react";

//Pages
import UserProfilCard from "./UserProfilCard/UserProfilCard";
import UserAddPost from "./UserAddPost/UserAddPost";
import UserSharePosts from "./UserSharePosts/UserSharePosts";
import Loader from "../../common/Loader";

const ProfilePage = (props) => {

  return (
    !props.propsData.profile.isLoadingUser
      ? <div className="content container-C">
          <UserProfilCard userdata={props.propsData.profile.user}
                          formPut={props.formPut}
                          isLoading={props.propsData.profile.disableInput}
                          userID={props.propsData.profile.userID }
                          />
                         
          {(props.propsData.profile.user.id === props.propsData.profile.userID )
            ? <UserAddPost
                handleClick={props.handleClick}
                disableInput ={props.propsData.profile.disableInput}
              /> 
            : <div></div> }

          <UserSharePosts userdata={props.propsData.profile} />
        </div>

      : <Loader/>
  );

};

export default ProfilePage;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRequired } from "../../HOC/authRequired";
import FreindCard from "./FreindCard";
import { getUsers,followUser } from "../../../redux/action/messagePage/messagePageAction";
import Loader from "../../common/Loader";

let FreindsPageContainer = (props) => {
  console.log(props);
  useEffect(() => {
    props.getUsers();
  }, []);

  return !props.isLoadingUsers ? (
    <div className="freinds-list">
      {props.userFreinds
        .filter((el) => el.id !== props.userID)
        .map((el) => (
          <FreindCard key={el.id} data={el} followUser={(id) => props.followUser(id) } />
        ))}
    </div>
  ) : (
    <Loader />
  );
};

let mapStateToProps = (state) => {
  return {
    userFreinds: state.messagesPage.users,
    isLoadingUsers: state.messagesPage.isLoadingUsers,
    userID: state.profilePage.profile.userID,
  };
};

export default compose(
  connect(mapStateToProps, { getUsers,followUser }),
  AuthRequired
)(FreindsPageContainer);

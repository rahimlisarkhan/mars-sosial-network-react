import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getUserHeader} from '../../redux/action/'
//images
import logo from "../../img/logo.png";


let Header = (props) =>  {
    useEffect(() => { props.getUserHeader()},[props.data.user])  

    return (
      <header className="header container-H">
          <div className="header-content">
              <div className="header__logo">
              <img src={logo} />
            </div>

            <div className="header__user">
              <h3>
                {props.data.user.first_name} {props.data.user.last_name}
              </h3>
              <img src={props.data.user.image} />
            </div>
          </div>
      </header>
    );
};

//STORE CONNECT
let mapStateToProps = (state) => ({ data: state.header })

export default connect(mapStateToProps,{getUserHeader})(Header);

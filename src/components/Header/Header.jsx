//images
import logo from '../../img/logo.png'

import React from 'react';



const Header = (props) => {

    return(
        <header className="header container-H" >
            <div className="header__logo">
                <img src={logo}/>
            </div>
            <div className="header__user">
                <h3>{props.data.user.name} {props.data.user.surname}</h3>
                <img src={props.data.user.image}/>
            </div>

        </header>
    )

}


export default Header;
import React from 'react'
import medya from '../../img/social.png'
import { NavLink } from "react-router-dom";


let WelcomePageList = () => {

        return (
            <section className="container-welcome">
                    <div className="container-welcome__imgContent">
                        <img src={medya} alt="socialmedya"/>
                    </div>
                <div className="container-welcome__desc">
                        <div className="container-welcome__desc__content">
                                <h1>Welcome to Marsgroup</h1>
                                <p>Now all the students are together</p>
                                <div className="container-welcome__desc__content__btns">
                                <NavLink className='sign-btn' to="/welcome/signup" >Sign up
                                </NavLink>
                                <NavLink className='sign-btn' to="/welcome/login" >Login
                                </NavLink>
                                </div>
                        </div>
                  
                </div>
            </section>
        )
}

export default WelcomePageList
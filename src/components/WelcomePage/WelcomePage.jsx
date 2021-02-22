import React from 'react'
import { Route } from 'react-router-dom'
import AuthLogin from './AuthLogin'
import AuthSignUp from './AuthSignUp'
import WelcomePageList from './WelcomePageList'


let WelcomePage = () => {

        return (
            <section className="container-welcome">
                <Route path='/welcome/' exact component={WelcomePageList} />  
                <Route path='/welcome/signup' component={AuthSignUp} />
                <Route path='/welcome/login'  component={AuthLogin} />
            </section>
        )
}

export default WelcomePage
import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import ProfilePageContainer from './ProfilePage/ProfilePageContainer'
import MessagesPageContainer from './MessagesPage/MessagePageContainer'
import { Redirect, Route } from 'react-router-dom'
import { AuthRequired } from '../HOC/authRequired'
import FreindsPageContainer from './FreindsPage/FreindsPageContainer'


let GeneralPage = (props) => {

        if(!props.authenfication)
            return <Redirect to='/welcome/login'/>

        return (
            <section className="container">
                <Header/>
                <Navbar/>
                <Route path='/mars-group/' exact component={ProfilePageContainer} />
                <Route path='/mars-group/messages/id=:id?' component={MessagesPageContainer } />
                <Route path='/mars-group/friends' exact component={FreindsPageContainer} />
                <Route path='/mars-group/friends/id=:id?' component={ProfilePageContainer} />
            </section>
        )
}

export default AuthRequired(GeneralPage)
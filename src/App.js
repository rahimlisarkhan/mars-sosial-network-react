//Router
import { Route } from 'react-router-dom';

//SASS
import './sass/App.scss';

//Pages
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MessagesPage from './components/MessagesPage/MessagesPage'



//APP
let App = (props) => {
 
  return (
    <section className="container">
      
       <Header data={props.state.profile} />
      <Navbar />
      <Route path='/' exact render={()=><ProfilePage profile={props.state.profile}/>} />
      <Route path='/messages'  render={()=><MessagesPage addFunc={props.add} userMessage={props.state.usersMessage}  users={props.state.users}/>} />

    </section>
  );
}


export default App;

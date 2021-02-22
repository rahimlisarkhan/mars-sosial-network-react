import { Redirect, Route, Switch } from 'react-router-dom';
import GeneralPage from './components/GeneralPage/GeneralPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import './sass/App.scss';


//APP
let App = () => {
  return (
    <Switch>
      <Route path='/welcome' component={WelcomePage} />
      <Route path='/mars-group/' component={GeneralPage} />
      <Redirect from='/' to='/mars-group' />
    </Switch>
  );
}

export default App;

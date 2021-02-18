import { Redirect, Route, Switch } from 'react-router-dom';
import Authenfication from './components/Authenfication';
import GeneralPage from './components/GeneralPage';
import './sass/App.scss';


//APP
let App = () => {
  return (
    <Switch>
      <Route path='/login' component={Authenfication} />
      <Route path='/mars-group/' component={GeneralPage} />
      <Redirect from='/' to='/mars-group' />
    </Switch>

  );
}

export default App;

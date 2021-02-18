import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './redux/redux-store'
import { Provider } from 'react-redux';


ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <Route path='/' component={App} />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
)

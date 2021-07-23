import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import App from './App';
//import * as serviceWorker from './servcieWorker';

const oktaConfig = {
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}`,
  redirect_uri: `${window.location.origin}/callback`,
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
}



ReactDOM.render(
  <BrowserRouter>
  <Security {...oktaConfig}>
    <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) module.hot.accept();


import { BrowserRouter, Route } from 'react-router-dom';
import Login from './views/Login'
import Main from './views/Main'

import React from 'react';

// import { Container } from './styles';

function Routes() {
  return (<BrowserRouter>
    <Route path="/" exact component={Login} />
    <Route path="/dev/:id" component={Main} />
  </BrowserRouter>);
}

export default Routes;

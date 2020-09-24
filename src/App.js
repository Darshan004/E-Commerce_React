import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './component/header/header.component';
import SignInSignUpPage from './page/sign-in-sign-up-page/sign-in-sign-up-page.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component = {ShopPage} />
        <Route path='/signin' component = {SignInSignUpPage} />
        
      </Switch>
    </div>
  );
}

export default App;

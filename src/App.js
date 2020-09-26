import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './component/header/header.component';
import SignInSignUpPage from './page/sign-in-sign-up-page/sign-in-sign-up-page.component';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unSubscribedFromAuth = null;

  componentDidMount(){
    this.unSubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapshot =>{
          this.setState( 
            {
              currentUser : {
                id : snapshot.id,
                ...snapshot.data()
              }
            },
          );console.log(this.state);
        });
      }   
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribedFromAuth();
  }

  render(){
    return (
      <div>
        <Header  currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component = {ShopPage} />
          <Route path='/signin' component = {SignInSignUpPage} />
          
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import Header from './component/header/header.component';
import SignInSignUpPage from './page/sign-in-sign-up-page/sign-in-sign-up-page.component';


class App extends React.Component{

  unSubscribedFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unSubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapshot =>{
          setCurrentUser({
                id : snapshot.id,
                ...snapshot.data()
            });
        });
      }   
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribedFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component = {ShopPage} />
          <Route exact path='/signin' 
            render={()=> 
              this.props.currentUser ? (
                <Redirect to='/' /> ) : ( 
                <SignInSignUpPage />) 
            } 
          />
          
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps )(App);

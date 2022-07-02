import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Wrapper from "./wrapper";
import AuthorizationContainer from "./components/authorization/authorization-container";
import RegistrationContainer from "./components/authorization/registration-container";
import PrivacyInfo from "./components/personal/privacy-info";
import Orders from "./components/personal/orders";
import TermsService from "./components/personal/terms-service";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: null,
      authUser: null
    }
  }

  handleLogIn = (data) => {
    this.setState({ isLogged: true, authUser: data });
  }

  handleLogOut = () => {
    this.setState({ isLogged: false, authUser: null });
    <Navigate to='/' replace />
  }

  handleNewPersonalInfo = (data) => {
    const { authUser } = this.state;
    const addPersonalInfo = { ...authUser, ...data };
    const localUsers = JSON.parse(localStorage.getItem('users'));
    const changedLocalUsers = localUsers.map(user => {
      if (user.login === addPersonalInfo.login) {
        return addPersonalInfo;
      } else {
        return user;
      }
    })

    localStorage.setItem('users', JSON.stringify(changedLocalUsers));

    this.setState({ authUser: addPersonalInfo });
  }

  render() {
    const { isLogged, authUser } = this.state;

    return (
      <div className='wrapper'>
        <Routes>
          <Route path='*' element={<Wrapper
            {...this.props}
            isLogged={isLogged}
            authUser={authUser}
            handleLogOut={this.handleLogOut} />}
          />
          <Route path='/login/*' element={<AuthorizationContainer
            handleLogIn={this.handleLogIn}
            isLogged={isLogged}
            authUser={authUser} />}
          />
          <Route path='/registration/*' element={<RegistrationContainer
            handleLogIn={this.handleLogIn} />}
          />
          {isLogged &&
            <>
              <Route path='/personal-area/:user/info/*' element={<PrivacyInfo
                {...this.props}
                isLogged={isLogged}
                authUser={authUser}
                handleLogOut={this.handleLogOut}
                handleNewPersonalInfo={this.handleNewPersonalInfo} />}
              />
              <Route path='/personal-area/:user/orders/*' element={<Orders
                {...this.props}
                isLogged={isLogged}
                authUser={authUser}
                handleLogOut={this.handleLogOut} />}
              />
              <Route path='/personal-area/:user/terms/*' element={<TermsService
                {...this.props}
                isLogged={isLogged}
                authUser={authUser}
                handleLogOut={this.handleLogOut} />}
              />
            </>
          }
        </Routes>
      </div>
    )
  }
}

export default App;

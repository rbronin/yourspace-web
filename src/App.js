import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Config/Routes";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Feed from "./Components/Feed/Feed";
import UserProfile from "./Components/User/UserProfile";
import SearchUser from "./Components/User/SearchUser";

import { UserCxt, AuthCxt } from "./Config/UserContext";
import About from "./Components/About";

function App() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthCxt.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <UserCxt.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/feed">
              <Feed />
            </PrivateRoute>
            <PrivateRoute exact path="/user/profile">
              <UserProfile />
            </PrivateRoute>
            <PrivateRoute exact path="/search">
              <SearchUser />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </UserCxt.Provider>
    </AuthCxt.Provider>
  );
}

export default App;

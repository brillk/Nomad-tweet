import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation.js";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;

//로그인 되었을때 의 home 화면 , 그리고
//로그아웃일때 보여지는 로그인화면 주소를 구현

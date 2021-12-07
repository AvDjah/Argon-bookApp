/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import AuthContext from "./authcontext";
import DummyLayout from "./layouts/Dummy";

//firebase imports
import { Auth } from "./Firebase/config";

function App() {
  const [isAuthenticated, setAuthentication] = useState(
    useContext(AuthContext)
  );

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user) => {
      user ? setAuthentication(true) : setAuthentication(false);
      unsubscribe(); // terminate the observer after completion
    });
  }, []);

  return (
    <AuthContext.Provider value={[isAuthenticated, setAuthentication]}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Route
            path="/dummy"
            render={(props) => <DummyLayout {...props}></DummyLayout>}
          ></Route>
          <Redirect from="/" to="/admin/index" />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

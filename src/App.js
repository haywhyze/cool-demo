import React, { useReducer } from "react";
import { ToastProvider } from "react-toast-notifications";
import "./App.css";
import "./tailwind.generated.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextUser } from "./context";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./Views/Dashboard";
import SamplePage from "./Views/SamplePage";
import LoginPage from "./Views/LoginPage";
import { auth } from "./reducers/initialState";
import userReducer from "./reducers/auth";

function App() {
  const [state, dispatch] = useReducer(userReducer, auth);

  return (
    <ToastProvider>
      <ContextUser.Provider value={[state, dispatch]}>
        <Router>
          <Switch>
            <Route path="/about"></Route>
            <Route path="/sample">
              <SamplePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </ContextUser.Provider>
    </ToastProvider>
  );
}

export default App;

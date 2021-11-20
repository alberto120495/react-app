import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import {
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from "../03-forms/pages";

import logo from "../logo.svg";

export default function Navigation() {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik" activeClassName="nav-active" exact>
                Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstrac" activeClassName="nav-active" exact>
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                activeClassName="nav-active"
                exact
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-abstrac">
            <FormikAbstractation />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

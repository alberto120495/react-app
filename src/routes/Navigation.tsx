import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "../logo.svg";

import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export default function Navigation() {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>
                Lazy1
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>
                Lazy2
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/lazy1" component={LazyPage1} />
          <Route path="/lazy2" component={LazyPage2} />
          <Route path="/lazy3" component={LazyPage3} />
        </Switch>
      </div>
    </Router>
  );
}

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Calculator from './Components/Calculator';
import Login from "./Components/login/Login";
import ExpenseTracker from "./Components/ExpenseTracker";
import StyledComponent from './Components/StyledComponent';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calc">Calculator</Link>
            </li>
            <li>
              <Link to="/styled">styled</Link>
            </li>
            <li>
              <Link to="/expensetracker">Expense Tracker</Link>
            </li>

            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/calc">
            <Calculator />
          </Route>
         
          <Route path="/styled">
            <StyledComponent />
          </Route>
          <Route path="/expensetracker">
            <ExpenseTracker />
          </Route>
          <Route path="/">
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

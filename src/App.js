import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddProducts from "./components/AddProducts/AddProducts";
import Navigation from "./components/Home/Navigation";
import ManageProducts from "./components/ManageProducts/ManageProducts";
import Orders from "./components/Orders/Orders";
import CheckOut from "./components/CheckOut/CheckOut";
import { createContext, useState } from "react";
import PrivateRoute from "./components/Privateroute/PrivateRoute";


export const UserContext = createContext();
function App() {

const [loggedInUser ,setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser ,setLoggedInUser]}>
      
        <Router>
        {/* <p>{loggedInUser.name}</p> */}
          <Navigation />

          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>

            <PrivateRoute path="/checkout/:_id">
                 <CheckOut />
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <AddProducts />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/manageProducts">
              <ManageProducts />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

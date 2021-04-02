
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AddProducts from './components/AddProducts/AddProducts';
import Navigation from './components/Home/Navigation';
import ManageProducts from './components/ManageProducts/ManageProducts';
import Orders from './components/Orders/Orders';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">

<Router>

      <Navigation/>
   
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/orders">
            <Orders />
          </Route>


          <Route path="/checkout/:_id">
            <CheckOut />
          </Route>

          <Route path="/admin">
            <AddProducts/>
          </Route>


          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/manageProducts">
            <ManageProducts/>
           
          </Route>

          <Route path="/">
            <Home />
          </Route>


        </Switch>

    </Router>
      


     
    </div>
  );
}

export default App;

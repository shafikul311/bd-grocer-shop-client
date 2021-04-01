
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
import CheckOut from './components/CheckOut/CheckOut';
import ManageProducts from './components/ManageProducts/ManageProducts';

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

          <Route path="/order">
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

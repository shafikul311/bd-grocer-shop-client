import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const { displayName, email } = result.user;
        const signInUser = { name: displayName, email };

        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch((error) => {
        
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage ,email ,credential)
      });
  };

  return (
    <div style={{ padding: "10px 20% 0 20%" }}>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <h1>Login First</h1>
        <button className="btn btn-success" onClick={handleGoogleSignIn}>
          {" "}
          <FontAwesomeIcon style={{ color: "red" }} icon={faGoogle} /> Continue
          With Google
        </button>
      </div>
    </div>
  );
};

export default Login;

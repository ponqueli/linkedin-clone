import React, { useState } from "react";
import styles from "./Login.module.css";
import { auth } from "./firebase.js";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  const register = () => {
    if (!name) {
      return alert("Please enter your name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className={styles.login}>
      <img
        src="https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo.png"
        alt="logo"
      />

      <form action="submit">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit" onClick={loginToApp} className={styles.btnSubmit}>
          {" "}
          Sign In{" "}
        </button>
      </form>
      <p>
        Not a member?
        <span className={styles.register} onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;

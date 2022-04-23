import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        //user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className={styles.app}>
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className={styles.body}>
            <Sidebar />
            <Feed />
            {/* Widgets */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

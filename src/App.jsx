import React from "react";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
import { selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className={styles.app}>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className={styles.body}>
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;

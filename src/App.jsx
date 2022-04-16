import React from "react";
import styles from "./App.module.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.body}>
        <Sidebar/>
        <Feed/>
        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;

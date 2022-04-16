import { Avatar } from '@mui/material';
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {

  const recentItem = (topic) => (
    <div className={styles.recentItem}>
      <span className={styles.hashtag}>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>  
        <img src="https://wallpaperaccess.com/full/1396544.jpg" alt="backGroundImage"/> 
        <Avatar className={styles.avatar} src='https://lh3.googleusercontent.com/a-/AOh14GhtUVPmCuppZkIy50PNiUigf-3R_qd5lRHp7CQRjQ=s36-c-k-no'/>
        <h2>Jose Conto</h2>
        <h4>zehconto@gmail.com</h4>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <p>Who viewed you</p>
          <p className={styles.statNumber}>2,542</p>
        </div>
        <div className={styles.stat}>
          <p>Views on post</p>
          <p className={styles.statNumber}>3,001</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('developer')}
        {recentItem('design')}
      </div>
    </div>
  )
}

export default Sidebar;

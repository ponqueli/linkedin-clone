import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import styles from './Sidebar.module.css';

const Sidebar = () => {

  const user = useSelector(selectUser);

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
        <Avatar className={styles.avatar} src={user.photoUrl}>
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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

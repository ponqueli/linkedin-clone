import React from 'react';
import styles from './Widgets.module.css';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

const Widgets = () => {

  const newsArticle = (heading, subtitle)=>(
    <div className={styles.article}>
      <div className={styles.articleLeft}>
        <FiberManualRecordRoundedIcon/>
      </div>
      <div className={styles.articleRight}>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className={styles.widgets}>
      <div className={styles.header}>
        <h2>LinkedIn News</h2>
        <InfoRoundedIcon />
      </div>
      {newsArticle('Jose Conto is back', 'Top news - 900 readers')}
      {newsArticle('Tesla hits new highs', 'Cars & auto - 800 readers')}
      {newsArticle('Bitcoins Breaks $23k', 'Crypto - 8000 readers')}
      {newsArticle('You should study React', 'Code - 899 readers')}
      {newsArticle('Is Redux too good?', 'Code - 900 readers')}
      {newsArticle('Coding is fascinating', 'Code - 900 readers')}
      {newsArticle('Learn something new', 'Top news - 900 readers')}
    </div>
  )
}

export default Widgets;

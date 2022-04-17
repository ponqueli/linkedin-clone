import React from 'react';
import styles from './InputOptions.module.css';

const InputOptions = ({Icon, title, color}) => {
  return (
    <div className={styles.inputOptions}>
      {Icon && <Icon style={{color:color}}/>}
      <h4>{title}</h4>
    </div>
  )
}

export default InputOptions;

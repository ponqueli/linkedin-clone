import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.login}>
      <img src="https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo.png" alt="logo" />

      <form action="submit">
        <input type="text" placeholder='Full name (required if registering)'/>
        <input type="text" placeholder='Profile pic URL (optional)' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button type='submit'> Sign In </button>
      </form>
    </div>
  )
}

export default Login;

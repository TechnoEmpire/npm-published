import React, { useState } from 'react';
import styles from './LoginForm.module.scss';
const ModalLoginForm = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalToggle = () => {
    setModalVisible(!modalVisible);
  };

  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      setModalVisible(false);
    }
  };

  return (
    <div>
      <h2>Modal Login Form</h2>
      <button onClick={handleModalToggle} className={styles.btn}>
        Login
      </button>

      {modalVisible && (
        <div className='modal' onClick={handleModalClose}>
          <form
            className='modal-content animate'
            action='/action_page.php'
            method='post'
          >
            <div className='imgcontainer'>
              <span
                onClick={handleModalToggle}
                className='close'
                title='Close Modal'
              >
                &times;
              </span>
              {/* <img src='img_avatar2.png' alt='Avatar' className='avatar' /> */}
            </div>

            <div className='container'>
              <label htmlFor='uname'>
                <b>Username</b>
              </label>
              <input
                type='text'
                placeholder='Enter Username'
                name='uname'
                required
              />

              <label htmlFor='psw'>
                <b>Password</b>
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                name='psw'
                required
              />

              <button type='submit'>Login</button>
              <label>
                <input type='checkbox' checked='checked' name='remember' />{' '}
                Remember me
              </label>
            </div>

            <div className='container' style={{ backgroundColor: '#f1f1f1' }}>
              <button
                type='button'
                onClick={handleModalToggle}
                className='cancelbtn'
              >
                Cancel
              </button>
              <span className='psw'>
                Forgot <a href='#'>password?</a>
              </span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalLoginForm;

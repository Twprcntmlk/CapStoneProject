
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [formState, setformState] = useState(true);

  const toLogin = async (e) => {
    setformState(true);
  };

  const toSignUp = async (e) => {
    setformState(false)
  };

  return (
    <>

      <button className="LoginButton button" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {formState ?
          <div>
            
            <LoginForm />
            <a className="ButtonLink" onClick={toSignUp}>Need to Sign Up?</a>
          </div>
          :
          <div>
            <h3 className="ButtonLink" >Sign Up</h3>
            <SignUpForm />
            <a className="ButtonLink"onClick={toLogin}>Already Have An Account?</a>
          </div>}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;

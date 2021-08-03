
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [formState, setformState] = useState(true);
  const [error, setError] = useState("Login");
  const user = useSelector(state => state.session.user)



  const DoNotShowModalIfSignedIn = () =>{
    if(user){
      setShowModal(false)
      setError("Signed In")
      setTimeout (() =>{
        setError("Login")
      },1000)

    } else {
      setShowModal(true)
    }

  }

  // }
  return (
    <>
      <button className="LoginButton button" onClick={DoNotShowModalIfSignedIn}>{error}</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {formState ?
          <div>
            <LoginForm setShowModal={setShowModal} setformState={setformState}/>

          </div>
          :
          <div>

            <SignUpForm setShowModal={setShowModal} setformState={setformState}/>

          </div>}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;

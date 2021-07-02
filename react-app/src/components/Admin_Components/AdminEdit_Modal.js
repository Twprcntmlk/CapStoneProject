
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AdminEditCard from '../../components/Admin_Components/AdminEditCard_Componet'
function CardEditFormModal({cardId}) {
  const [showModal, setShowModal] = useState(false);
  const [formState, setformState] = useState(true);
//   if (sessionUser) return <Redirect to="/" />;
  const toLogin = async (e) => {
    setformState(true);
  };

  const toSignUp = async (e) => {
    setformState(false)
  };


  return (
    <>
      <button className="LoginButton" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <AdminEditCard cardId={cardId}/>
        </Modal>
      )}
    </>
  );
}

export default CardEditFormModal;

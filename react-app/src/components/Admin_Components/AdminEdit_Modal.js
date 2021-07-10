
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AdminEditCard from '../../components/Admin_Components/AdminEditCard_Componet'
function CardEditFormModal({cardId, setSearchchange}) {
  const [showModal, setShowModal] = useState(false);
  // const [formState, setformState] = useState(true);

  return (
    <>
      <button className="LoginButton" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <AdminEditCard cardId={cardId} setSearchchange={setSearchchange} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CardEditFormModal;

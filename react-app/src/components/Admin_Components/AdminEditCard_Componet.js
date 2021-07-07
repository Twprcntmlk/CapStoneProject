//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "../Collections_Components/DeckBuilder_Component"
import "../css/DeckBuilder.css";
import {editCard} from "../../store/cards";

const AdminEditCard = ({cardId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [api_id, setApi_id] = useState("");
  const [api_name, setApi_name] = useState("");
  const [api_set_name, setApi_set_name] = useState("");
  const [api_set_code, setApi_set_code] = useState("");
  const [api_set_rarity, setApi_set_rarity] = useState("");
  const [api_set_price, setApi_set_price] = useState("");

  const updateId = (e) => {
    setApi_id(e.target.value);
  }
  const updateName = (e) => {
    setApi_name(e.target.value);
  }

  const updateSetName = (e) => {
    setApi_set_name(e.target.value);
  }

  const updateSetCode = (e) => {
    setApi_set_code(e.target.value);
  }

  const updateSetRarity = (e) => {
    setApi_set_rarity(e.target.value);
  }

  const updateSetPrice = (e) => {
    setApi_set_price(e.target.value);
  }

  const onCardEdit= async (e) => {
    e.preventDefault(e);

    const data = await dispatch(editCard(cardId,api_id,api_name,api_set_name,api_set_code,api_set_rarity,api_set_price));
    if (data) {
        window.alert("Edited")
    }
  }

  return (
    <div>
      <form onSubmit={onCardEdit} className='CardAddForm'>

      <div className='cardadd_div'>
          <label htmlFor="name">Card Id</label>
          <input
            name="id"
            type="text"
            placeholder="Card Id"
            value={api_id}
            onChange={updateId}
            className='server_input'
          />
        </div>

        <div className='cardadd_div'>
          <label htmlFor="name">Card Name</label>
          <input
            name="name"
            type="text"
            placeholder="Card Name"
            value={api_name}
            onChange={updateName}
            className='server_input'
          />
        </div>

        <div className='cardadd_div'>
          <label htmlFor="name">Card Set Name</label>
          <input
            name="name"
            type="text"
            placeholder="Card Set Name"
            value={api_set_name}
            onChange={updateSetName}
            className='server_input'
          />
        </div>

        <div className='cardadd_div'>
          <label htmlFor="name">Card Set Code</label>
          <input
            name="name"
            type="text"
            placeholder="Card Set Code"
            value={api_set_code}
            onChange={updateSetCode}
            className='server_input'
          />
        </div>

        <div className='cardadd_div'>
          <label htmlFor="name">Card Set Rarity</label>
          <input
            name="name"
            type="text"
            placeholder="Card Set Rarity"
            value={api_set_rarity}
            onChange={updateSetRarity}
            className='server_input'
          />
        </div>

        <div className='cardadd_div'>
          <label htmlFor="name">Card Set Price</label>
          <input
            name="name"
            type="text"
            placeholder="Card Set Price"
            value={api_set_price}
            onChange={updateSetPrice}
            className='server_input'
          />
        </div>


        {/* <div className='server_div'>
          <label htmlFor="image">Image</label>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={updateImage}
            className='server_input_image'
          />
        </div> */}

        <div className="addCard">
          <button className="server-button" type="submit">Edit Card</button>
        </div>
      </form>
    </div>
  )
}
export default AdminEditCard;

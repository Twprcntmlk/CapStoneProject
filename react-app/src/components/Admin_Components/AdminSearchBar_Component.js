//imported utils
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import {getCards} from "../../store/cards";
import {deleteCard} from "../../store/cards";
import CardEditFormModal from "../Admin_Components/AdminEdit_Modal"
import SearchedCard from "../Collections_Components/Search_Card_Component";
// const { DragDropContext, Draggable, Droppable } = window.ReactBeautifulDnd;

const AdminSearchBar= () => {
  const dispatch = useDispatch();
  let history = useHistory();

  // const [point, setPoints] = useState(false)
  const [cardname, setCardname] = useState("");
  const [usercollection, setUsercollection] = useState()
  const [usercollectionfiltered, setUsercollectionfiltered] = useState()
  const [searchchange, setSearchchange] = useState(false)
  const allCardsState = useSelector((state) => state.card.cards);
  const cardValues = Object.values(allCardsState)

  useEffect(() =>{
    dispatch(getCards())

  },[]);

  const updateCardname = (e) => {
    setCardname(e.target.value);
    const filteredSearch = cardValues.filter((el)=>el.api_name.toLowerCase().includes(e.target.value.toLowerCase()))

    setUsercollectionfiltered(filteredSearch)
  }

  useEffect(() =>{
    const filteredSearch = cardValues.filter((el)=>el.api_name.toLowerCase().includes(cardname.toLowerCase()))
    setUsercollectionfiltered(filteredSearch)

  },[searchchange]);


  const onDeleteCard= async (e) => {
    e.preventDefault();
    console.log(e.target.value)
    const data = await dispatch(deleteCard(e.target.value));
    if (data) {
        window.alert("Deleted")
    }
    setSearchchange(!searchchange)
  }



  return (
    <div className="SearchHolder">
      <div>
        <label onChange={updateCardname} htmlFor="name">Enter Card Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={cardname}
              onChange={updateCardname}
              className='collection_input'
            />
      </div>
      <div className="Search_Show_Results">

        {usercollectionfiltered && usercollectionfiltered.map((el, idx) =>(
          <div key={idx}>
            <div>{el.api_name}</div>
            <CardEditFormModal cardId = {el.id} setSearchchange={setSearchchange}/>
            <button value={el.id}onClick={onDeleteCard}>Delete</button>
          </div>))}


      </div>
    </div>
  );
}

export default AdminSearchBar;

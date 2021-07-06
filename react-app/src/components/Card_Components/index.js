import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import {addComment} from "../../store/comments"
import {editComment} from "../../store/comments"
import {deleteComment} from "../../store/comments"
import {getComments} from "../../store/comments"
import CardComment from "./Card_Comment_Component"
import LevelStar from "../images/levelstar.png"
import "../css/CardPage.css"


const CardPage = () => {
    //Nessessary Items
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams();
    //api call
    const YGOAPIFetch = async () => {
      if(id){
      const api = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
      const response = await fetch(api);
      const jsonData = await response.json();
      const Array = jsonData.data
      setApicardinfo(Array[0]);
      }
    };
    //State Items
    const [apicardinfo, setApicardinfo] = useState()

    const toPackList = () => {
        history.push("/pack-opener");
      }

    const toDeckBuilder = () => {
        history.push("/collection");
      }

    const toGame = () => {
        history.push("/game");
      }

    const toHome = () => {
      history.push("/");
      }



    // useEffect
    useEffect(() =>{
      YGOAPIFetch()
      dispatch(getComments())
      dispatch(getCards())
    },[]);

    console.log("WHERE IS THIS______________",apicardinfo)
   return (
    <div className="CardInfoPage">
      <div className="CardInfoPage_Banner"></div>
      <div className="CardInfoPage_Info">

        <div className="CardInfoPage_CardImage">
          <img src={apicardinfo && apicardinfo?.card_images[0].image_url}/>
        </div>

        <div className="CardInfoPage_CardInfo">
          <div id="CardInfo--row1" className="cardrow">
            <h1>{apicardinfo && apicardinfo?.name}</h1>
            <div><img id="LevelStar" src={LevelStar}></img>{apicardinfo?.level}</div>
          </div>
          <div id="CardInfo--row2" className="cardrow"><div>{apicardinfo?.type} / ID: {apicardinfo?.id}</div><div>{apicardinfo?.attribute}</div></div>
          {apicardinfo?.type === ("Magic Card") || apicardinfo?.type === ("Trap Card") || apicardinfo?.type === ("Spell Card")  ? null : <div id="CardInfo--row3" className="cardrow">ATK/{apicardinfo?.atk} DEF/{apicardinfo?.def}</div>}

          <div id="CardInfo--row4" className="cardrow">{apicardinfo?.desc}</div>
          <div id="CardInfo--row5" className="cardrow"> Archetype:{apicardinfo?.race}</div>
        </div>
      </div>
        <div>
          <CardComment APIid={id}/>
        </div>
      {/* <div className="CardInfoPage_CommentSection--form">
        <form onSubmit={onCommentAdd} className='Comment_Form'>
          <div>{errors.map((error, i) => (<div key={i}>{error}</div>))}</div>
          <div className='comment_div'>
          <label htmlFor="comment"></label>
          <textarea
            name="comment"
            type="text"
            placeholder="Insert Comment Here"
            value={comment}
            onChange={updateComment}
            className='comment_input'
          />
             <button className="comment-button" type="submit">Add Comment</button>
          </div>

        </form>

      </div> */}

      <div className="CardFlipperPage_OptionsBar">
        <button className="CardFlipperPage_button button" onClick={toPackList} >Buy Another Pack</button>
        <button className="CardFlipperPage_button button" onClick={toDeckBuilder} >Go to Deck Builder</button>
        <button className="CardFlipperPage_button button" onClick={toGame} >Play a Game</button>
        <button className="CardFlipperPage_button button" onClick={toHome} >Back to Main</button>
      </div>
    </div>

// : "Skull Servant"
// api_set_code: "LOB-004"
// api_set_name: "Legend of Blue Eyes White Dragon"
// api_set_price: "2.88"
// api_set_rarity: "Common"

  );
};

export default CardPage;

import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux"; // useSelector
import { useParams,useHistory   } from 'react-router-dom'; //,Redirect
import {getCards} from "../../store/cards"
// import {addComment} from "../../store/comments"
// import {editComment} from "../../store/comments"
// import {deleteComment} from "../../store/comments"
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
      const api = `/api/external/searchcard/${id}`
      const response = await fetch(api);
      const jsonData = await response.json();
      const Array = jsonData.data
      setApicardinfo(Array[0]);
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

    // const monsterType = apicardinfo?.type


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
            <div> {apicardinfo?.type === ("Normal Monster") || apicardinfo?.type === ("Fusion Monster") || apicardinfo?.type === ("Effect Monster") || apicardinfo?.type === ("Ritual Monster") ? <img id="LevelStar" src={LevelStar} ></img> : null} <b style={{fontSize: "20px"}}>&nbsp;{apicardinfo?.level}</b></div>
          </div>
          <div id="CardInfo--row2" className="cardrow"><div>{apicardinfo?.type} / ID: {apicardinfo?.id}</div><div>{apicardinfo?.attribute}</div></div>
          {apicardinfo?.type === ("Magic Card") || apicardinfo?.type === ("Trap Card") || apicardinfo?.type === ("Spell Card")  ? null : <div id="CardInfo--row3" className="cardrow">ATK/{apicardinfo?.atk} DEF/{apicardinfo?.def}</div>}

          <div id="CardInfo--row4" className="cardrow">{apicardinfo?.desc}</div>
          <div id="CardInfo--row5" className="cardrow"> Archetype: {apicardinfo?.race}</div>
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

      <div className="CardInfoPage_OptionsBar">
        <button className="CardInfoPage_button button" onClick={toPackList} >Buy Another Pack</button>
        <button className="CardInfoPage_button button" onClick={toDeckBuilder} >Go to Deck Builder</button>
        <button className="CardInfoPage_button button" onClick={toGame} >Play a Game</button>
        <button className="CardInfoPage_button button" onClick={toHome} >Back to Main</button>
      </div>
    </div>
  );
};

export default CardPage;

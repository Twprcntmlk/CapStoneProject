import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Redirect,useHistory   } from 'react-router-dom';
import {getCards} from "../../store/cards"
import {addComment} from "../../store/comments"
import {editComment} from "../../store/comments"
import {deleteComment} from "../../store/comments"
import {getComments} from "../../store/comments"
import CardForm from "./Card_Form"
import LevelStar from "../images/levelstar.png"
import "../css/CardPage.css"


const CardComment = ({APIid}) => {
    //Nessessary Items
    const dispatch = useDispatch()
    console.log("CardComment",APIid)

    //State Items
    const [cardid, setCardid] = useState()
    const [comment,setComment] = useState()
    const [errors, setErrors] = useState([])



    //useSelectorItems
    const allCard = useSelector((state) => state.card.cards);
    const allCardList = Object.values(allCard)
    const ThisCard = allCardList.filter((el)=>(el.api_id === Number(APIid)))

    const allComments = useSelector((state) => state.comment.comments);
    const allCommentsList = Object?.values(allComments)
    const ThisCardComments = allCommentsList?.filter((el)=>(el.card_id === ThisCard[0]?.id ))

    // console.log("This card",allCardList)
    // console.log("This card comments",ThisCard )
    // console.log("ThisCardComments",ThisCardComments)

    const updateComment = (e) => {
      setComment(e.target.value)
    }

    const onCommentAdd = async (e) =>{
        e.preventDefault()
        const card_id = ThisCard[0]?.id
        const data = await dispatch(addComment(comment, card_id))
    //   if (data.errors){
    //     setErrors(data.errors);
    //   }
    }



    // const onCommentDelete = async (e) =>{
    //     const comment_id = e.target.value
    //     console.log(comment_id)
    //     const data = await dispatch(deleteComment(comment_id))

    // }

    // useEffect
    useEffect(() =>{
      dispatch(getComments())
      dispatch(getCards())
    },[dispatch]);

    const currentuserId = useSelector(state => state.session.user.id)
    console.log(currentuserId)
console.log(ThisCardComments)
   return (
      <div className="CardInfoPage_CommentSection">

        <h2 className="CardInfoPage_CommentSection--title"> Comment Section</h2>
        {ThisCardComments && ThisCardComments?.map((el, idx)=>(
          <div className="CardInfoPage_CommentSection--comments" key={idx}>
            <div>
              <div>{el.created_at}</div>
              <div>{el.user_id}</div>
              <div>{el.comments}</div>
            </div>

             <div>
             {currentuserId===el.user_id ? <CardForm comment_id={el.id}/> : null }

            </div>
          </div>
        ))}
      <div className="CardInfoPage_CommentSection--form">
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
      </div>
    </div>


// : "Skull Servant"
// api_set_code: "LOB-004"
// api_set_name: "Legend of Blue Eyes White Dragon"
// api_set_price: "2.88"
// api_set_rarity: "Common"

  );
};

export default CardComment;

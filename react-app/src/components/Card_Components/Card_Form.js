import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {editComment} from "../../store/comments"
import {deleteComment} from "../../store/comments"
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function CardForm({comment_id}) {


  const [showedit, setShowedit] = useState(false)
  const [edittedComment, setEdittedcomment] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = edittedComment
    setShowedit(!showedit)
    setEdittedcomment("")
    const data = await dispatch(editComment(comment,comment_id))
  };

  const onCommentEdit = async (e) =>{
    setShowedit(!showedit)
  // if (data.errors){
  //   setErrors(data.errors);
  // }
  }

  const onCommentDelete = async (comment_id) =>{
    // const comment_id = e.target.value
    console.log(comment_id)
    const data = await dispatch(deleteComment(comment_id))

  }



  return (
    <div>
      {errors.length > 0 &&
        errors.map((error) => <div key={error}>{error}</div>)}

        <button onClick={()=> onCommentEdit()}>
          <i class="fas fa-edit"></i>
        </button>

        {showedit ? <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Edit Comment"
            value={edittedComment}
            onChange={(e) => setEdittedcomment(e.target.value)}
          />
        </label>
        <button type="submit">Edit Comment</button>

      </form> : null }

        <button onClick={()=> onCommentDelete(comment_id)}>
          <i value = {comment_id} class="far fa-trash-alt"> </i>
        </button>

    </div>
  );
}

export default CardForm;

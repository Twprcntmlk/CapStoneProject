
import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {editComment} from "../../store/comments"

function CardForm({comment_id}) {
  const [showedit, setShowedit] = useState(false)
  const [edittedComment, setEdittedcomment] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = edittedComment
    const data = await dispatch(editComment(comment,comment_id))
  };

  const onCommentEdit = async (e) =>{
    setShowedit(!showedit)

  // if (data.errors){
  //   setErrors(data.errors);
  // }
}
  return (
    <div>
      {errors.length > 0 &&
        errors.map((error) => <div key={error}>{error}</div>)}

        <button onClick={onCommentEdit}>Edit</button>
        {showedit ? <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Channel Name"
            value={edittedComment}
            onChange={(e) => setEdittedcomment(e.target.value)}
          />
        </label>
        <button type="submit">Set Channel Name</button>
      </form> : null }
    </div>
  );
}

export default CardForm;

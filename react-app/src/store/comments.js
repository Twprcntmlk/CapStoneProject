const GET_COMMENTS = "comment/GET_COMMENTS"
const ADD_COMMENT = "commentADD_COMMENT"
const EDIT_COMMENT= "comment/EDIT_COMMENT"
const DELETE_COMMENT = "comment/DELETE_COMMENT"

  export const getCommentsAction = (comments) => ({
    type: GET_COMMENTS,
    payload: comments
  })

  const addCommentAction = (comment) => ({
    type: ADD_COMMENT,
    payload: comment

  });

  const editCommentAction = ( comment) => ({
    type: EDIT_COMMENT,
    payload: comment

  });

  const deleteCommentAction = (comment_id) => ({
    type: DELETE_COMMENT,
    payload: comment_id
  });



  export const getComments = () => async (dispatch) => {
    const response = await fetch(`/api/comments/`);
    const data = await response.json();
    if (data.errors) return;
    dispatch(getCommentsAction(data.comments));
  };


  export const addComment = (comment, card_id) => async (dispatch) => {
    console.log("store",comment, card_id )
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment, card_id})
    })

    if (response.ok) {
      const data = await response.json();
      console.log(data.comment)
      dispatch(addCommentAction(data.comment));
    }
    // return data.comment;
  }

  export const editComment = (comment,comment_id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${comment_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment,comment_id })
    })
    let data = await response.json()
    if (response.ok) {
      console.log(data.comment )
      dispatch(editCommentAction(data.comment))
    }
  }

  export const deleteComment = (comment_id) => async (dispatch) => {
    console.log("deleteComment",comment_id)
    const response = await fetch(`/api/comments/${comment_id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      dispatch(deleteCommentAction(comment_id))
    }
  };

  const NormalizeComment = (comments) => {
    const normComment = {}
    comments.forEach(comment=> {
        normComment[comment.id] = comment
    })
    return normComment
}

  const initialState = { comments: {} };

  export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case GET_COMMENTS:
        return { comments: NormalizeComment(action.payload) };
      case ADD_COMMENT:
        newState = { comments: { ...state.comments } }
        newState.comments[action.payload.id] = action.payload
        return newState
      case EDIT_COMMENT:
        newState = { comments: { ...state.comments } }
        newState.comments[action.payload.id] = action.payload
        return newState
      case DELETE_COMMENT:
        newState = { comments: { ...state.comments} }
        delete newState.comments[action.payload]
        return newState
      default:
        return state;
    }
  }

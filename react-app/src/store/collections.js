const GET_COLLECTION = "channel/GET_COLLECTION";
const ADD_COLLECTION = "channel/ADD_COLLECTION ";
// const EDIT_COLLECTION = "channel/EDIT_COLLECTION";

  export const getCollectionAction = (card_id) => ({
    type: GET_COLLECTION,
    card_id

  })

  const addCollectionAction = (collection) => ({
    type: ADD_COLLECTION,
    payload: collection

  });

//   const editCollectionAction = (card_id) => ({
//     type: EDIT_CARD,
//     card_id
//   });


  export const getCollection = (card_id) => async (dispatch) => {
    const response = await fetch('/api/collections/');
    const data = await response.json();
    if (data.errors){
        return data;
    } else {
    dispatch(getCollectionAction(data.collections));
    }
  };

  export const addCollection = (card_id) => async (dispatch) => {
    const response = await fetch('/api/collections/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({card_id})
    })

    if (response.ok) {
      const data = await response.json();
      dispatch(addCollectionAction(data.collections));

    }
  }
// Likely, I will not need this because if card is NOT in collection
// I will add to collection otherwise only card count will be edited
//   export const editCollection = (card_id) => async (dispatch) => {
//     const response = await fetch('/api/cards/', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({card_id})
//     })
//     if (response.ok) {
//       data = await response.json()
//       return dispatch(editCollectionAction(card_id))
//     }
//   }


const NormalizeServer = (collections) => {
  const normServer = {}
  collections.forEach(collection=> {normServer[collection.id] = collection})
  return normServer
}

  const initialState = { collections: {} };

  export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case GET_COLLECTION:
        return { collections: NormalizeServer(action.payload) };
      case ADD_COLLECTION:
        newState = { collections: { ...state.collections } }
        newState.collections[action.payload.id] = action.payload
        return newState
    //   case EDIT_COLLECTION:
    //     newState = { ...state }
    //     newState.channels[action.id] = action.name
    //     return newState
      default:
        return state;
    }
  }

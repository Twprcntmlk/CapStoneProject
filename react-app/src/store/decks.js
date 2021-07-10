const GET_DECKS = "deck/GET_DECKS"
const ADD_DECK = "deck/ADD_DECK"
const EDIT_DECK = "deck/EDIT_DECK"
const DELETE_DECK = "deck/DELETE_DECK"

  export const getDeckAction = (deck) => ({
    type: GET_DECKS,
    payload:deck
  })

  const addDeckAction = (deck) => ({
    type: ADD_DECK,
    payload:deck
  });

  const editDeckAction = (decks) => ({
    type: EDIT_DECK,
    payload:decks
  });

  // const deleteDeckAction = (decks) => ({
  //   type: DELETE_DECK,
  //   payload:decks
  // });



  export const getDecks = () => async (dispatch) => {
    const response = await fetch('/api/decks/');
    const data = await response.json();

    if (response.ok){

      dispatch(getDeckAction(data.decks));
      // return data.decks;
    }

  };


  // export const addDeck = (deck) => async (dispatch) => {
  //   const response = await fetch(`/api/decks/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ deck })
  //   })

  //   if (response.ok) {
  //     const data = await response.json();
  //     dispatch(addDeckAction(data.deck));
  //     return data;
  //   }
  // }

  export const editDeck = (deck) => async (dispatch) => {
    const response = await fetch(`/api/decks/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ deck })
    })

    if (response.ok) {
      const data = await response.json()
      return dispatch(editDeckAction(data.decks))
    }
  }

  export const deleteDeck = (id) => async (dispatch) => {
    const response = await fetch(`/api/decks/delete`, {
      method: "PUT"
    });
    if (response.ok) {
      const data = await response.json()
      return dispatch(editDeckAction(data.decks))
      
    }

  };

  const NormalizeDeck= (decks) => {
    console.log(decks)
    const normDeck = {}
    decks.forEach(deck=> {normDeck[deck.id] = deck})
    return normDeck
}

  const initialState = { decks: {} };

  export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case GET_DECKS:
        return { decks: NormalizeDeck(action.payload) };
      case ADD_DECK:
        newState = { decks: { ...state.decks } }
        newState.decks[action.payload.id] = action.payload
        return newState
      case EDIT_DECK:
        newState = { decks: { ...state.decks} }
        newState.decks[action.payload.id] = action.payload
        return newState
      // case DELETE_DECK:
      //   newState = { ...state }
      //   delete newState.decks[action.payload]
      //   return newState
      default:
        return state;
    }
  }

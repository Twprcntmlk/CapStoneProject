const GET_DECKS = "deck/GET_DECKS"
const ADD_DECK = "deck/ADD_DECK"
const EDIT_DECK = "deck/EDIT_DECK"
const DELETE_DECK = "deck/DELETE_DECK"

  export const getDeckAction = (user_id) => ({
    type: GET_DECKS,
    user_id

  })

  const addDeckAction = (user_id,card_id) => ({
    type: ADD_DECK,
    user_id,
    card_id

  });

  const editDeckAction = (user_id,card_id) => ({
    type: EDIT_DECK,
    user_id,
    card_id
  });

  const deleteDeckAction = (user_id, card_id) => ({
    type: DELETE_DECK,
    user_id,
    card_id
  });



  export const getDecks = (card_id) => async (dispatch) => {
    const response = await fetch(`/api/decks`);
    const data = await response.json();
    if (data.errors) return;
    dispatch(getDeckAction(data.decks));
    return data.decks;
  };


  export const addDeck = (data) => async (dispatch) => {
    const response = await fetch(`/api/decks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: data.name, server_id: data.server_id })
    })

    if (response.ok) {
      const data = await response.json();
      dispatch(addDeckAction(data));
      return data;
    }
    return data;
  }

  export const editDeck = (data) => async (dispatch) => {
    const response = await fetch(`/api/decks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: data.id, name: data.name, server_id: data.server_id })
    })

    if (response.ok) {
      data = await response.json()
      return dispatch(editDeckAction(data.id, data.name))
    }
  }

  export const deleteDeck = (channelId, serverId) => async (dispatch) => {
    const response = await fetch(`/api/decks`, {
      method: "DELETE"
    });
    if (response.ok) {
      dispatch(deleteDeckAction(channelId, serverId))
    }
  };

  const NormalizeServer = (decks) => {
    const normServer = {}
    decks.forEach(deck=> {
        normServer[deck.id] = deck
    })
    return normServer
}

  const initialState = { decks: {} };

  export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case GET_DECKS:
        return { decks: NormalizeServer(action.payload) };
      case ADD_DECK:
        newState = { decks: { ...state.decks } }
        newState.decks[action.payload.id] = action.payload
        return newState
      case EDIT_DECK:
        newState = { ...state }
        newState.deck[action.id] = action.payload
        return newState
      case DELETE_DECK:
        newState = { ...state }
        delete newState.decks[action.payload.id][action.payload]
        return newState
      default:
        return state;
    }
  }

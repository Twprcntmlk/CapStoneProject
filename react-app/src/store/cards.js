const GET_CARDS = "card/GET_CARDS";
const ADD_CARD = "card/ADD_CARD ";
const DELETE_CARD = "card/DELETE_CARD";
const EDIT_CARD = "card/EDIT_CARD";


  export const getCardAction = (cards) => ({
    type: GET_CARDS,
    cards

  })

  const addCardAction = (user_id,card_id) => ({
    type: ADD_CARD,
    user_id,
    card_id

  });

  const editCardAction = (user_id,card_id) => ({
    type: EDIT_CARD,
    user_id,
    card_id
  });

  const deleteCardAction = (user_id, card_id) => ({
    type: DELETE_CARD,
    user_id,
    card_id
  });



  export const getCards = () => async (dispatch) => {
    const response = await fetch('/api/cards/');
    const data = await response.json();
    if (response.ok){
      dispatch(getCardAction(data.cards));
      // return data.cards;
    }
  };


  export const addCard = (data) => async (dispatch) => {
    const response = await fetch(`/api/channels/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: data.name, server_id: data.server_id })
    })

    if (response.ok) {
      const data = await response.json();
      dispatch(addCardAction(data));
      return data;
    }
    return data;
  }

  export const editCard = (data) => async (dispatch) => {
    const response = await fetch(`/api/cards/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: data.id, name: data.name, server_id: data.server_id })
    })

    if (response.ok) {
      data = await response.json()
      return dispatch(editCardAction(data.id, data.name))
    }
  }

  export const deleteCard = (channelId, serverId) => async (dispatch) => {
    const response = await fetch(`/api/channels/${channelId}`, {
      method: "DELETE"
    });
    if (response.ok) {
      dispatch(deleteCardAction(channelId, serverId))
    }
  };

  const NormalizeCards = (cards) => {
    const normCard = {}
    cards.forEach(card=> {
        normCard[card.id] = card
    })
    return normCard
}

  const initialState = { cards: {} };

  export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case GET_CARDS:
        return { cards: NormalizeCards(action.cards) };
      case ADD_CARD:
        newState = { cards: { ...state.cards } }
        newState.cards[action.payload.id] = action.payload
        return newState
      case EDIT_CARD:
        newState = { ...state }
        newState.card[action.id] = action.count
        return newState
      case DELETE_CARD:
        newState = { ...state }
        delete newState.cards[action.payload.id][action.payload]
        return newState
      default:
        return state;
    }
  }

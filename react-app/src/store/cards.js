const GET_CARDS = "card/GET_CARDS";
const ADD_CARD = "card/ADD_CARD ";
const DELETE_CARD = "card/DELETE_CARD";
const EDIT_CARD = "card/EDIT_CARD";


  export const getCardAction = (cards) => ({
    type: GET_CARDS,
    cards

  })

  const addCardAction = (card) => ({
    type: ADD_CARD,
    payload: card

  });

  const editCardAction = (cards) => ({
    type: EDIT_CARD,
    payload: cards
  });

  const deleteCardAction = (card_id) => ({
    type: DELETE_CARD,
    payload: card_id
  });



  export const getCards = () => async (dispatch) => {
    const response = await fetch('/api/cards/');
    const data = await response.json();

    if (response.ok){
      dispatch(getCardAction(data.cards));
      // return data.cards;
    }
  };


  export const addCard = (api_id,api_name,api_set_name,api_set_code,api_set_rarity,api_set_price) => async (dispatch) => {
    const response = await fetch(`/api/cards/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ api_id,api_name,api_set_name,api_set_code,api_set_rarity,api_set_price })
    })
    const data = await response.json();
    if (data && data.errors) {
      return data;
    }
    dispatch(addCardAction(data.cards));
  }

  export const editCard = (cardId,api_id,api_name,api_set_name,api_set_code,api_set_rarity,api_set_price) => async (dispatch) => {
    const response = await fetch(`/api/cards/${cardId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({api_id,api_name,api_set_name,api_set_code,api_set_rarity,api_set_price })
    })
      const data = await response.json()
      console.log(data.cards)
      if (data && data.errors) {
        return data;
      }
      console.log(data.cards)
      dispatch(editCardAction(data.cards))
    }


  export const deleteCard = (cardId) => async (dispatch) => {
    const response = await fetch(`/api/cards/${cardId}`, {
      method: "DELETE"
    });
    if (response.ok) {
      dispatch(deleteCardAction(cardId))
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
        newState = { cards: { ...state.cards} }
        newState.cards[action.payload.id] = action.payload
        return newState
      case EDIT_CARD:

        newState = { cards: { ...state.cards} }
        newState.cards[action.payload.id] = action.payload
        return newState
      case DELETE_CARD:
        newState = { cards: { ...state.cards} }

        delete newState.cards[action.payload]
        return newState
      default:
        return state;
    }
  }

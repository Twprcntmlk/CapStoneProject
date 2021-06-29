const GET_CARDS = "channel/GET_CARDS";
const ADD_CARD = "channel/ADD_CARD ";
const DELETE_CARD = "channel/DELETE_CARD";
const EDIT_CARD = "channel/EDIT_CARD";


  export const getCardAction = (user_id) => ({
    type: GET_CARDS,
    user_id

  })

  const deleteCardAction = (user_id, card_id) => ({
    type: DELETE_CARD,
    user_id,
    card_id
  });

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



  export const getCards = (card_id) => async (dispatch) => {
    const response = await fetch(`/api/cards/:${card_id}`);
    const data = await response.json();
    if (data.errors) return;
    dispatch(getChannelsAction(data.channels));
    return data.channels;
  };

  export const editChannel = (data) => async (dispatch) => {
    console.log('what is ', data)
    const response = await fetch(`/api/channels/${data.id}/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: data.id, name: data.name, server_id: data.server_id })
    })

    if (response.ok) {
      data = await response.json()
      console.log("IS EDIT CHANNEL RESPONSE OK?", data.server_id)
      return dispatch(editChannelAction(data.id, data.name))
    }
  }

  export const createChannel = (data) => async (dispatch) => {
    const response = await fetch(`/api/channels/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: data.name, server_id: data.server_id })
    })

    if (response.ok) {
      const data = await response.json();
      dispatch(createChannelAction(data));
      return data;
    }
    return data;
  }


  export const deleteChannel = (channelId, serverId) => async (dispatch) => {
    const response = await fetch(`/api/channels/${channelId}`, {
      method: "DELETE"
    });
    // const data = await response.json();
    // if (data.errors) return;
    console.log('THUNK')
    dispatch(deleteChannelAction(channelId, serverId))
    if (response.ok) {
      console.log('IFTHUNK')

    }

    // return data.channels;
  };

  const NormalizeData = (data) => {
    const normData = {};
    data.forEach((e) => {
      normData[e.id] = e;
    });
    return normData;
  };

  const initialState = { channels: {} };

  export default function reducer(state = initialState, action) {
    let newState;
    let newStateChannels;
    switch (action.type) {
      case GET_ALL_CHANNELS:
        return { channels: NormalizeData(action.payload) };
      case GET_SERVER_CHANNELS:
        newState = { ...state }
        newState.channels[action.serverId] = NormalizeData(action.channels);
        return newState;
      case CREATE_CHANNEL:
        newState = { ...state }
        newStateChannels = newState.channels[action.channel.server_id]
        console.log('This is newStateChannels ---> ', newStateChannels)
        newStateChannels[action.channel.id] = action.channel
        newState.channels[action.channel.server_id] = newStateChannels
        return newState

      case DELETE_CHANNEL:
        newState = { ...state }
        delete newState.channels[action.serverId][action.channelId]
        return newState
      case EDIT_CHANNEL:
        newState = { ...state }
        newState.channels[action.id] = action.name
        return newState
      default:
        return state;
    }
  }

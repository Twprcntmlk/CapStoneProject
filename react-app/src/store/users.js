//action handlers
const GET_USERS = "user/GET_USER"
const EDIT_USER = "user/EDIT_USER"
const DELETE_USER = "user/DELETE_USER"

const getUserAction = (users) => ({
    type: GET_USERS,
    payload: users
})

const editUserAction = (data) => ({
    type: EDIT_USER,
    payload: data
})

const deleteUserAction = (users) => ({
    type: DELETE_USER,
    payload: users
})


//Thunks
export const getAllUsers = () => async (dispatch) => {
    const response = await fetch(`/api/users/`)
    if (response.ok){
        const data = await response.json();
        //note: should return {"users": [user.to_dict() for user in users]}
        dispatch(getUserAction(data.users))
    } else {
        return {}
    }
}

export const editUser = (username,email,image,password,repeatPassword) => async (dispatch) => {
    const response = await fetch(`/api/users/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username,email,image,password,repeatPassword })
    })
    const data = await response.json();
    if (data && data.errors){
        return data
    } else {
        dispatch(editUserAction(data.users))
    }
}

export const editUserPoints = (points) => async (dispatch) => {
    const response = await fetch(`/api/users/points`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ points })
    })
    if (response.ok){
        const data = await response.json();
        return dispatch(editUserAction(data.user))
    }
}

export const editUserBuy = (points) => async (dispatch) => {

    const response = await fetch(`/api/users/buy`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ points })
    })
    if (response.ok){
        const data = await response.json();
        return dispatch(editUserAction(data.user))
    }
}
//[{'id': 1, 'f_name': 'Demo', 'l_name': 'Demo', 'username': 'Demo', 'email': 'demo@aa.io', 'hashed_password': 'pbkdf2:sha256:150000$wfWIKNZv$9a803c45319fbe7f7
export const deleteUser = (username,email,image,password,repeatPassword) => async (dispatch) => {

    const response = await fetch(`/api/users/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username,email,image,password,repeatPassword })
    })
    const data = await response.json();
    if (data && data.errors){
        return data
    } else {
        dispatch(deleteUserAction(data.users))
    }
}

// Normalizer
const NormalizeUser= (users) => {
    const normUser = {}
    users.forEach(user => { normUser[user.id] = user})
    return normUser
}


//Reducer
const initialState = { users: {} }
let newState;
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return { users: NormalizeUser(action.payload) }
        case EDIT_USER:

            newState = { users: { ...state.users} }
            newState.users[action.payload.id] = action.payload
            return newState
        case DELETE_USER:
            newState = { users: { ...state.users} }
            delete newState.users[action.payload]
            return newState



        default:
            return state;
    }
}

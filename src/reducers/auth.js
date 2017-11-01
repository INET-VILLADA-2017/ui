import {
    USER_LOGEDIN
} from '../constants/actionTypes'

const initialState = {
    isAuthenticated: false,
    token: null
}

export default function auth(state = initialState, action = {}) {
    const { type, payload } = action
    switch (type) {
        case USER_LOGEDIN:
            return {
                ...state,
                isAuthenticated: true,
                token: payload.token
            }
    }
    return state
}

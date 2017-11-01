import {
    HIDE_LOGOUT_MODAL,
    SHOW_LOGOUT_MODAL
} from '../constants/actionTypes'

const initialDisplayState = {
    logout: false,
}

export default function displayReducer(state = initialDisplayState, action) {
    const {type, payload} = action
    switch (type) {
        case HIDE_LOGOUT_MODAL:
            return {
                logout: false,
            }
        case SHOW_LOGOUT_MODAL:
            return {
                logout: true,
            }
    }
    return state
}
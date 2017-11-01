import {
    HIDE_LOGOUT_MODAL,
    SHOW_LOGOUT_MODAL
} from '../constants/actionTypes'

export const showLogout = () => ({
    type: SHOW_LOGOUT_MODAL
})

export const hideLogout = () => ({
    type: HIDE_LOGOUT_MODAL
})
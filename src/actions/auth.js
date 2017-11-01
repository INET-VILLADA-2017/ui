import {
    USER_LOGEDIN
} from '../constants/actionTypes'
import { LOGIN_URL } from '../utils/config'
import axios from 'axios'

const userLogedIn = (token) => ({
    type: USER_LOGEDIN,
    payload: {
        token : token
    }
})

export const login = (username, password) => (
    async (dispatch) => {
        try {
            const {data} = await axios.post(`${LOGIN_URL}login/`, {
                username: username,
                password: password
            })
            dispatch(userLogedIn(data.key))
        }
        catch (e) {
            console.log(e)
        }
    }
)
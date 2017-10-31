import {

} from '../constants/actionTypes'

const initialState = {
    fetching: false,
    parameter: null,
    samples: [],
    nurseries: [
        {id: 1, name:'Piedrabuena'},
        {id: 2, name:'Piedramalaahre'},
    ],
    current: null
}

export default function data(state = initialState, action = {}) {
    switch (action.type) {

    }
    return state
}

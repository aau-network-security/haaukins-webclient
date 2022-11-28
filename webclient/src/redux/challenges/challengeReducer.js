import { FETCH_CHALLENGES_ERROR, FETCH_CHALLENGES_REQUEST, FETCH_CHALLENGES_SUCCESS } from "./challengeTypes"
const initialState = {
    loading: false,
    challenges: [],
    error: ''
}

const challengesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHALLENGES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CHALLENGES_SUCCESS:
            return {
                ...state,
                loading: false,
                challenges: action.payload
            }
        case FETCH_CHALLENGES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    }
}

export default challengesReducer
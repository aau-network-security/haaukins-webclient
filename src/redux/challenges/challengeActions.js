import { FETCH_CHALLENGES_REQUEST, FETCH_CHALLENGES_ERROR, FETCH_CHALLENGES_SUCCESS } from "./challengeTypes"

const fetchChallengesRequest = () => {
    return {
        type: FETCH_CHALLENGES_REQUEST
    }
}

const fetchChallengesSuccess = challenges => {
    return {
        type: FETCH_CHALLENGES_SUCCESS,
        payload: challenges
    }
}

const fetchChallengesError = error => {
    return {
        type: FETCH_CHALLENGES_ERROR,
        payload: error
    }
}

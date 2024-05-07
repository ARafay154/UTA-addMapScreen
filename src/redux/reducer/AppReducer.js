import { RIDE_DETAILS, USER } from "../actions/ActionTypes";

const initialState = {
    user: {},
    rideSearchDetail:{},
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER: {
            let newState = state
            newState.user = action.payload
            return newState
        }
        case RIDE_DETAILS: {
            let newState = state
            newState.rideSearchDetail = action.payload
            return newState
        }

        default:
            return state

    }
}

export default appReducer;
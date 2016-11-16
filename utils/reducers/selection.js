import * as types from '../constants/ActionTypes'


const initialState = {
    selection: '*'
}

export default function selection (state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_SELECTION:
            return {
                ...state,
                selection: action.selection
            }
        default:
            return state;
    }
}

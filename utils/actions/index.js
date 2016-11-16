import * as types from '../constants/ActionTypes'

export function updateSelection(selection) {
    return {
        type: types.UPDATE_SELECTION,
        selection
    }
}

export const OrderReducer = (state, action) => {
    switch(action.type) {
        case 'SET_STEP1':
            return {
                ...state,
                state_number: action.data.state_number,
                entity_type: action.data.entity_type
            }
        default:
            return state
    }
}
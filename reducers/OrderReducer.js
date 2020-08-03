export const OrderReducer = (state, action) => {
    switch(action.type) {
        case 'SET_STEP1':
            return {
                ...state,
                state_number: action.data.state_number,
                entity_type: action.data.entity_type,
                state_fee: action.data.state_fee
            }
        case 'SET_STEP2':
            return {
                ...state,
                package: action.data.package,
                package_price: action.data.package_price,
                enabled_services: action.data.enabled_services
            }
        default:
            return state
    }
}
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
                package_name: action.data.package_name,
                package_price: action.data.package_price,
                enabled_services: action.data.enabled_services
            }
        case 'SET_STEP3':
            return {
                ...state,
                contact_info: action.data.contact_info,
                company_info: action.data.company_info
            }
        default:
            return state
    }
}
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
        case 'SET_INIT_ORDER':
            return {
                init_state
            }
        default:
            return state
    }
}

const init_state = {
    paypal_email: 'sb-b5ij82865202@business.example.com',
    state_number: null,
    entity_type: null,
    package_price: 0,
    add_on_service: 0,
    state_fee: 0,
    registered_agent: 0,
    package_name: 'standard',
    enabled_services: [],
    contact_info: {
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        county: '',
        country: '',
        phone: '',
        fax: '',
        email: '',
        email_primary_communication: false
    },
    company_info: {
        first_company_name: '',
        second_company_name: '',
        description: '',
        company_address: '',
        company_city: '',
        company_state: '',
        company_zip: '',
        company_county: '',
        company_country: '',
        company_phone: '',
        company_fax: '',
        registered_agent: true
    }
}
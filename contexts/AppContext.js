import React, { createContext, useReducer } from 'react';
import { OrderReducer } from '../reducers/OrderReducer'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [orderData, dispatch] = useReducer(OrderReducer, {
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
    })

    const setStep1 = (data) => {
        dispatch({type: 'SET_STEP1', data})
    }

    const setStep2 = (data) => {
        dispatch({type: 'SET_STEP2', data})
    }

    const setStep3 = (data) => {
        dispatch({type: 'SET_STEP3', data})
    }

    return (
        <AppContext.Provider value={{orderData, setStep1, setStep2, setStep3}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
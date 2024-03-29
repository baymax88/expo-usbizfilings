import React, { createContext, useReducer } from 'react';
import { OrderReducer } from '../reducers/OrderReducer'
import { AuthReducer } from '../reducers/AuthReducer'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [orderData, dispatch] = useReducer(OrderReducer, {
        paypal_email: 'drshamroukh@yahoo.com',
        state_number: null,
        entity_type: null,
        package_price: 0,
        add_on_service: 0,
        state_fee: 0,
        registered_agent: 0,
        package_name: '',
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

    const [authData, dispatch2] = useReducer(AuthReducer, {
        first_name: '',
        last_name: '',
        email: '',
        login_status: false
    })

    const setCustomer = (data) => {
        dispatch2({type: 'SET_CUSTOMER', data});
    }

    const setLoginStatus = (data) => {
        dispatch2({type: 'SET_LOGIN_STATUS', data});
    }

    const setStep1 = (data) => {
        dispatch({type: 'SET_STEP1', data})
    }

    const setStep2 = (data) => {
        dispatch({type: 'SET_STEP2', data})
    }

    const setStep3 = (data) => {
        dispatch({type: 'SET_STEP3', data})
    }

    const setInitOrder = () => {
        dispatch({type: 'SET_INIT_ORDER'});
    }

    return (
        <AppContext.Provider value={{orderData, authData, setStep1, setStep2, setStep3, setCustomer, setLoginStatus, setInitOrder}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
import React, { createContext, useReducer } from 'react';
import { OrderReducer } from '../reducers/OrderReducer'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [orderData, dispatch] = useReducer(OrderReducer, {
        state_number: null,
        entity_type: null,
        package_price: 0,
        add_on_service: 0,
        state_fee: 0,
        registered_agent: 0,
        package: 'standard',
        enabled_services: []
    })

    const setStep1 = (data) => {
        dispatch({type: 'SET_STEP1', data})
    }

    const setStep2 = (data) => {
        dispatch({type: 'SET_STEP2', data})
    }

    return (
        <AppContext.Provider value={{orderData, setStep1, setStep2}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
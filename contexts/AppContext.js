import React, { createContext, useReducer } from 'react';
import { OrderReducer } from '../reducers/OrderReducer'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const [orderData, dispatch] = useReducer(OrderReducer, {
        state_number: 0,
        entity_type: '',
        package_price: 0,
        add_on_service: 0,
        state_fee: 0,
        registered_agent: 0
    })

    const setStep1 = (data) => {
        dispatch({type: 'SET_STEP1', data})
    }

    return (
        <AppContext.Provider value={{orderData, setStep1}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
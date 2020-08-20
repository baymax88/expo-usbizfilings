export const AuthReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CUSTOMER':
            return {
                ...state,
                first_name: action.data.first_name,
                last_name: action.data.last_name,
                email: action.data.email
            }
        case 'SET_LOGIN_STATUS':
            return {
                ...state,
                login_status: action.data
            }
        default:
            return state
    }
}
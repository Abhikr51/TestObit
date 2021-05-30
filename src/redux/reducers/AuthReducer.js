const initState ={
    loggedIn: false,
    user: {
        user_type : 0,
    }
}

const AuthReducer = (state=initState, actions) => {
    switch(actions.type) {
        case "SET_LOGIN":
            return {
                ...state,
                loggedIn: true,
                user: actions.payload
            };
        case "EDIT_USER":
            return {
                ...state,
                user: {
                    ...state.user,
                    ...actions.payload
                }
            };
        case "SET_LOGOUT":
            return {
                ...state,
                loggedIn: false,
                user: {}
            };
        default:
            return state;
    }
}
export default AuthReducer;
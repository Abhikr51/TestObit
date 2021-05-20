const initState ={}

const TestReducer = (state=initState, actions) => {
    switch(actions.type) {
        case "SET_TEST_RESULT":
            return {
                ...state,
                result: actions.payload
            };
        case "REMOVE_TEST_RESULT":
            return {
                ...state,
                result: {}
            };
        default:
            return state;
    }
}
export default TestReducer;
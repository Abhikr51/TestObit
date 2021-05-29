const initState ={}

const StudentDataReducer = (state=initState, actions) => {
    switch(actions.type) {
        case "SET_STUDENT_DATA":
            return {
                ...state,
                ...actions.payload
            };
        
        default:
            return state;
    }
}
export default StudentDataReducer;
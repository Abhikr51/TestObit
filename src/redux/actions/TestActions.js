import axios from "axios"
import { LOADEROFF, LOADERON, notification } from "../../globals/__global_funcs"
import { rootURL } from "../../globals/__gobal_vars"

export const setTestResult = (data) => {


    return (dispatch) => {
        dispatch({
            type: "SET_TEST_RESULT",
            payload : data
        })
        LOADERON()
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.post(rootURL + "/auth/uploadAnswers", {
            answer_array : data
        }).then((res) => {
            // if(res.data.status){
                
                
            // }else{
                

            // }
            LOADEROFF();
        }).catch((err) => {
            
            console.log(err);
            LOADEROFF();
        })
        
    }
}
export const setStudentData = () => {


    return (dispatch) => {
        
        LOADERON()
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.post(rootURL + "/auth/getStudentData",{}).then((res) => {
            if(res.data.status){
                
                dispatch({
                    type: "SET_STUDENT_DATA",
                    payload : res.data.data
                })
                LOADEROFF();
            }else{
                LOADEROFF();
            }
            
        }).catch((err) => {
            
            LOADEROFF();
            console.log(err);
        })
        
    }
}
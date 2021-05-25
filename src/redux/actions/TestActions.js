import axios from "axios"
import { LOADEROFF, LOADERON, notification } from "../../globals/__global_funcs"
import { rootURL } from "../../globals/__gobal_vars"

export const setTestResult = (data) => {


    return (dispatch) => {
        dispatch({
            type: "SET_TEST_RESULT",
            payload : data
        })
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.post(rootURL + "/auth/uploadAnswers", {
            answer_array : data
        }).then((res) => {
            if(res.data.status){
                
                
            }else{
                

            }
            
        }).catch((err) => {
            
            console.log(err);
        })
        
    }
}
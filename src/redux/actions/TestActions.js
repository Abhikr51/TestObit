import axios from "axios"
import { LOADEROFF, LOADERON, notification } from "../../globals/__global_funcs"
import { rootURL } from "../../globals/__gobal_vars"

export const setTestResult = (data) => {


    return (dispatch) => {

        dispatch({
            type: "SET_TEST_RESULT",
            payload : data
        })
        // notification("Are you sure to logout ?","confirm")
        //     .then((willDelete) => {
        //         if (willDelete) {
        //             LOADERON();
        //             axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        //             axios.post(rootURL + "/auth/logout", {}).then((res) => {
        //                 localStorage.clear();

        //                 // this.props.history.push('/');
        //                 LOADEROFF();
        //             }).catch((err) => {
        //                 LOADEROFF();
        //                 console.log(err);
        //             })
        //         }
        //     });
    }
}
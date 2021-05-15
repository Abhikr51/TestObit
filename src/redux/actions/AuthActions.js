import axios from "axios"
import { LOADEROFF, LOADERON } from "../../globals/__global_funcs"
import { rootURL } from "../../globals/__gobal_vars"
import swal from "sweetalert"
export const setLogin = (data) => {


    return (dispatch) => {

        dispatch({
            type: "SET_LOGIN",
            payload: data
        })
    }
}
export const setLogout = () => {


    return (dispatch) => {

        swal({
            title: "Are you sure to logout ??",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    LOADERON();
                    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                    axios.post(rootURL + "/auth/logout", {}).then((res) => {
                        localStorage.clear();
                        dispatch({
                            type: "SET_LOGOUT",
                        })

                        this.props.history.push('/');
                        LOADEROFF();
                    }).catch((err) => {
                        LOADEROFF();
                        console.log(err);
                    })
                }
            });
    }
}
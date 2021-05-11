import axios from "axios"
import { LOADEROFF, LOADERON } from "../../globals/__global_funcs"
import { rootURL } from "../../globals/__gobal_vars"

export const  setLogin= (data) => {


    return (dispatch)=>{

        dispatch({
            type: "SET_LOGIN",
            payload: data
        })
    }
}
export const  setLogout= () => {


    return (dispatch)=>{
        if(window.confirm("Are you sure to logout ??")){
            LOADERON();
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            axios.post(rootURL+"/auth/logout",{}).then((res)=>{
                localStorage.clear();
                dispatch({
                    type: "SET_LOGOUT",
                })
                alert(res.data.message)

                this.props.history.push('/');
                LOADEROFF();
            }).catch((err)=>{
                LOADEROFF();
                console.log(err);
            })
        }
    }
}
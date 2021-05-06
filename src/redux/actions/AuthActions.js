import axios from "axios"
import { rootURL } from "../../globals/GlobalVars"

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

            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            axios.post(rootURL+"/logout",{}).then((res)=>{
                localStorage.clear();
                dispatch({
                    type: "SET_LOGOUT",
                })
                alert(res.data.message)
                this.props.history.push('/login');
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
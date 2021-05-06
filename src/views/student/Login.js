import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { pageTransitions, pageVariants } from '../../globals/__gobal_vars'
import { validate } from '../../globals/__global_funcs'
import Animate from '../../components/Animate'
export default class Login extends Component {

    state = {
        username: "",
        password: "",

    }
    loginSubmit = (event) => {
        event.preventDefault();
        console.log("run");
    }
    componentDidMount() {
        validate('login-validation');
        
    }
    render() {

        return (
            <Animate className="wrapper d-flex align-items-center">
             

                <div  className="card">
                    <div className="card-body">
                        <div className="login-logo">
                            <img className="w-100" src="./assets/img/logo-white.png" alt />
                        </div>
                        <table width="100%">
                            <tbody><tr>
                                <td><hr className="bg-dark" /></td>
                                <td width="100px" style={{ textAlign: 'center', color: 'rgb(105, 105, 105)', fontFamily: 'verdana', fontSize: 20 }}>LOGIN</td>
                                <td><hr className="bg-dark" /></td>
                            </tr>
                            </tbody>
                        </table>
                        <form className="login-validation" noValidate onSubmit={this.loginSubmit}>
                            <div className="row justify-content-center">
                                <div className="col-11 my-1">
                                    <label htmlFor>Email / Phone</label>
                                    <div className="input-group flex-nowrap mt-1">
                                        <span className="input-group-text" id="addon-wrapping"><i className="fas fa-user-shield text-primary" /></span>
                                        <input onChange={(e) => { this.setState({ username: e.target.value }) }} value={this.state.username} type="text" className="form-control" placeholder="Enter email / phone" required aria-label="Username" aria-describedby="addon-wrapping" />
                                        {/* <div class="invalid-feedback"><i class="fas fa-info-circle"></i> Field is required.</div> */}
                                    </div>
                                </div>
                                <div className="col-11 my-1">
                                    <label htmlFor>Password</label>
                                    <div className="input-group flex-nowrap mt-1">
                                        <span className="input-group-text" id="addon-wrapping"><i className="fas fa-key text-primary" /></span>
                                        <input onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} type="password" className="form-control" placeholder="Enter Password" required aria-label="Password" aria-describedby="addon-wrapping" />
                                        {/* <div class="invalid-feedback"><i class="fas fa-info-circle"></i> Field is required.</div> */}
                                    </div>
                                </div>
                                <div className="col-11 mt-3">
                                    <button className="btn btn-primary btn-block">Login</button>
                                </div>
                                <div className="col-12  mt-3">
                                    <p className="text-center">Not have an Account ? click to <Link to="/register" > Register </Link> </p>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </Animate>

        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Animate from '../../components/Animate'
import Topbar from '../../components/Topbar'

export default class VerifyEmail extends Component {
    state = {
        code1 : "",
        code2 : "",
        code3 : "",
        code4 : "",
    }
    componentDidMount(){
        var container = document.getElementById("verify-block");
    container.onkeyup = function(e) {
    var target = e.srcElement || e.target;
    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() === "input") {
                next.focus();
                break;
            }
        }
    }
    // Move to previous field if empty (user pressed backspace)
    else if (myLength === 0) {
        var previous = target;
        while (previous = previous.previousElementSibling) {
            if (previous == null)
                break;
            if (previous.tagName.toLowerCase() === "input") {
                previous.focus();
                break;
            }
        }
    }
}
    }
    render() {
        return (
            <>
                <Topbar text="Verification"> </Topbar>
                <Animate >
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="card">
                                <div className="card-body">
                                        <p className="text-center"><i className="fas fa-shield-alt" /> Please verify your email.</p>
                                        <p className="text-center mb-3">A verifiaction code was sent to your email <span className="text-primary">kumarisback98@gmail.com</span> . <br/>
                                            Please Put the 4 digit code here .
                                        </p>
                                    <div className="row justify-content-center">
                                        
                                        <div className="col-9">
                                            <div id="verify-block" className="input-group text-center">
                                                <input onChange={(e)=>{this.setState({code1 : e.target.value})}} value={this.state.code1} type="number" aria-label="code1" className="form-control text-center" maxLength="1" />
                                                <input onChange={(e)=>{this.setState({code2 : e.target.value})}} value={this.state.code2} type="number" aria-label="code2" className="form-control text-center" maxLength="1" />
                                                <input onChange={(e)=>{this.setState({code3 : e.target.value})}} value={this.state.code3} type="number" aria-label="code3" className="form-control text-center" maxLength="1" />
                                                <input onChange={(e)=>{this.setState({code4 : e.target.value})}} value={this.state.code4} type="number" aria-label="code4" className="form-control text-center" maxLength="1" />
                                            </div>
                                        </div>
                                        <div className="col-6 mt-3">
                                        <Link to="/all-set" ><button type="button" className="btn btn-primary btn-block">Next</button></Link>
                                        </div>
                                    </div>
                                    <br/>
                                    <p className="text-center ">Wrong Email ? <span className="text-primary">click to change</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animate>
            </>

        )
    }
}

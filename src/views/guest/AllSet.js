import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Animate from '../../components/Animate';

export default class AllSet extends Component {
    constructor(props){
        super(props);
        this.state ={
            imageSource : "./assets/img/user.png",
        }
    }
    
    componentDidMount(){
    }
    render() {
        return (
            <Animate className="wrapper d-flex align-items-center">
                    <div className="container-fluid ">
                    <Link to="/student/dashboard" className="text-right text-primary d-block mr-3">Skip &nbsp;&nbsp;<i class="fas fa-caret-right"></i> </Link>
                        <div className>
                            <div className>
                                <h2 className="font-weight-light text-center"> You are all set.</h2>
                                <div className="row justify-content-center my-5">
                                    <div className="col-12 ">
                                        <div className="upload-avatar">
                                            <label htmlFor="upload-pic"  className="upload-icon">
                                            <i class="fas fa-camera fa-2x"></i>
                                            </label>
                                            <label style={{borderRadius : "inherit", overflow : 'hidden' , display : "block" ,width : "100%", height: "100%"}}  htmlFor="upload-pic" >
                                                <img width="100%" src={this.state.imageSource} alt="" />
                                            </label>
                                        </div>
                                        <input onChange={(e)=>{this.setState({imageSource : e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : "./assets/img/user.png"})}} className="d-none" type="file" name="" id="upload-pic"/>
                                    </div>
                                    <p className="text-center my-3">Upload Your Profile Picture</p>
                                    {
                                        (this.state.imageSource !== "./assets/img/user.png") ? 
                                        <div className="col-12 mt-1">
                                            <button type="button" onClick={()=>{this.props.history.push("/student/dashboard")}} className="btn btn-primary btn-block">Upload &amp; Finish</button>
                                        </div>
                                        : ""
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </Animate>

        )
    }
}

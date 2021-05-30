import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LOADERON, LOADEROFF } from "../../globals/__global_funcs"
import { rootURL } from '../../globals/__gobal_vars';
import { connect } from 'react-redux';
import { editUser } from '../../redux/actions/AuthActions';
class AllSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSource: "./assets/img/user.png",
            image: {},
        }
    }

    componentDidMount() {
    }
    uploaImage = event => {
        event.preventDefault();
        if (this.state.image.name) {
            LOADERON();
            let image = new FormData();
            image.append("photo", this.state.image, this.state.image.name);
            axios.post(rootURL + "/auth/uploadImage", image, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                //success
                console.log(res);
                if(res.data.status){
                    this.props.editUser({photo : res.data.image_path})
                    this.props.history.push("/student/dashboard");                
                    LOADEROFF();
                }else{
                    LOADEROFF();
                    
                }
            }).catch((err) => {
                console.log(err);
                LOADEROFF();
            })

        }
    }
    render() {
        return (
            <div className="wrapper ">
                <div className="d-flex align-items-center h-100">
                    <div className="container-fluid ">
                        <Link to="/student/dashboard" className="text-right text-primary d-block mr-3">Skip &nbsp;&nbsp;<i class="fas fa-caret-right"></i> </Link>
                        <div className>
                            <div className>
                                <h2 className="font-weight-light text-center"> You are all set.</h2>
                                <form onSubmit={this.uploaImage}>
                                    <div className="row justify-content-center my-5">
                                        <div className="col-12 ">
                                            <div className="upload-avatar">
                                                <label htmlFor="upload-pic" className="upload-icon">
                                                    <i class="fas fa-camera fa-2x"></i>
                                                </label>
                                                <label style={{ borderRadius: "inherit", overflow: 'hidden', display: "block", width: "100%", height: "100%" }} htmlFor="upload-pic" >
                                                    <img width="100%" src={this.state.imageSource} alt="" />
                                                </label>
                                            </div>
                                            <input onChange={(e) => { this.setState({ image: e.target.files[0], imageSource: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : "./assets/img/user.png" }) }} className="d-none" type="file" name="" id="upload-pic" />
                                        </div>
                                        <p className="text-center my-3">Upload Your Profile Picture</p>
                                        {
                                            (this.state.imageSource !== "./assets/img/user.png") ?
                                                <div className="col-12 mt-1">
                                                    <button type="submit"  className="btn btn-primary btn-block">Upload &amp; Finish</button>
                                                </div>
                                                : ""
                                        }

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(null,{editUser})(AllSet);
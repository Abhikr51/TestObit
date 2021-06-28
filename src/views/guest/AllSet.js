import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LOADERON, LOADEROFF } from "../../globals/__global_funcs"
import { imageURL, rootURL } from '../../globals/__gobal_vars';
import { connect } from 'react-redux';
import { editUser } from '../../redux/actions/AuthActions';
import Cropper from 'react-easy-crop'
import Button from '@material-ui/core/Button';
import getCroppedImg from '../../components/cropImage';
import { Grid, IconButton, Slider } from '@material-ui/core';
class AllSet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSource: this.props.user.photo ? imageURL + this.props.user.photo : "./assets/img/user.png",
            image: {},
            tempName: "",
            tempImage: "",
            progress: false,
            visible: false,
            crop: {
                x: 0,
                y: 0,
            },
            zoom: 1,
            cropData: {}

        }
    }

    onCropComplete = async (croppedArea, croppedAreaPixels) => {
        // console.log(croppedArea, croppedAreaPixels)
        var CroppedImage = await getCroppedImg(this.state.tempImage, croppedAreaPixels, 0)
        // console.log(CroppedImage);
        // let blob = await fetch(CroppedImage).then(r => r.blob());
        // blob = {name : this.state.tempName , ...blob}
        this.setState({
            imageSource: CroppedImage,
            cropData: croppedAreaPixels
        })
    }
    componentDidMount() {
    }
    uploadImage = event => {
        event.preventDefault();
        if (this.state.image.name) {
            this.setState({
                progress: true
            })
            let image = new FormData();
            image.append("photo", this.state.image, this.state.image.name);
            image.append("h", this.state.cropData.height)
            image.append("w", this.state.cropData.width)
            image.append("x", this.state.cropData.x)
            image.append("y", this.state.cropData.y)
            axios.post(rootURL + "/auth/uploadImage", image, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                //success
                console.log(res);
                if (res.data.status) {
                    this.props.editUser({ photo: res.data.image_path })
                    if (this.props.match.params.change == 1) {
                        this.props.history.push("/student/profile");
                    } else {
                        this.props.history.push("/student/dashboard");
                    }
                    this.setState({
                        progress: false
                    })
                } else {
                    this.setState({
                        progress: false
                    })

                }
            }).catch((err) => {
                console.log(err);
                this.setState({
                    progress: false
                })
            })

        }
    }
    handleImageChoose =  (e) => {
        let defaultImg = this.props.user.photo ? imageURL + this.props.user.photo : "./assets/img/user.png"
        this.setState({ 
            visible: true, 
            image: e.target.files[0], 
            tempImage: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : defaultImg 
        })
        

    }
    render() {
        let change = this.props.match.params.change ?? "0"
        let defaultImg = this.props.user.photo ? imageURL + this.props.user.photo : "./assets/img/user.png"
        return (
            <div className="wrapper ">
                <div className="d-flex align-items-center h-100">
                    <div className="container-fluid ">
                        <Link to="/student/dashboard" className="text-right text-primary d-block mr-3">{(change == 1) ? "Back to dashboard" : "Skip"} &nbsp;&nbsp;<i class="fas fa-caret-right"></i> </Link>
                        <div className>
                            <div className>
                                <h2 className="font-weight-light text-center">{(change == 1) ? "Change your picture" : "You are all set."} </h2>
                                <form onSubmit={this.uploadImage}>
                                    <div className="row justify-content-center my-5">
                                        <div className="col-12 ">
                                            <div className={`upload-avatar ${this.state.progress ? "upload-avatar-loader" : ""}`}>
                                                <label htmlFor="upload-pic" className={`upload-icon ${this.state.progress ? "upload-icon-loader" : ""}`}>
                                                    <i class="fas fa-camera fa-2x"></i>
                                                </label>
                                                <label style={{ borderRadius: "inherit", overflow: 'hidden', display: "block", width: "100%", height: "100%", }} htmlFor="upload-pic" >
                                                    <img width="100%" src={this.state.imageSource} alt="" />
                                                </label>
                                            </div>
                                            <input onChange={this.handleImageChoose} className="d-none" type="file" name="" id="upload-pic" />
                                        </div>
                                        <p className="text-center my-3">Upload Your Profile Picture</p>
                                        {
                                            (this.state.imageSource !== defaultImg) ?
                                                <div className="col-12 mt-1">
                                                    <button disabled={this.state.progress} type="submit" className="btn btn-primary btn-block">{this.state.progress ? "Uploading please wait ..." : " Upload & Finish"}</button>
                                                </div>
                                                : ""
                                        }

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.visible ?
                        <div className="crop-overlay">
                            <div className="crop-area">
                                <div className="container-fluid">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-12 pt-3">

                                            <Cropper
                                                style={{
                                                    containerStyle: {
                                                        position: "relative",
                                                        height: "350px",

                                                    }
                                                }}
                                                image={this.state.tempImage}
                                                crop={this.state.crop}
                                                zoom={this.state.zoom}
                                                aspect={1 / 1}
                                                onCropChange={(value) => { this.setState({ crop: value }) }}
                                                onCropComplete={this.onCropComplete}
                                                onZoomChange={(zoom) => { this.setState({ zoom }) }}
                                            />
                                        </div>
                                        {/* <div className="col-2 text-center">
                                            <IconButton><i style={{ fontSize: "15px", color: "var(--primary)" }} className="fas fa-minus-circle"></i> </IconButton>
                                        </div>
                                        <div className="col-8 py-4">
                                            <Slider min={1} step={0.3} max={7} value={this.state.zoom} onChange={(e, zoom) => { this.setState({ zoom }) }} aria-labelledby="continuous-slider" />
                                        </div>
                                        <div className="col-2 text-center">
                                            <IconButton><i style={{ fontSize: "15px", color: "var(--primary)" }} className="fas fa-plus-circle"></i> </IconButton>
                                        </div> */}
                                        <div className="col-4">
                                            <Button onClick={() => { this.setState({ visible: false, tempImage: "" }) }} className="float-left" color="primary"> Done </Button>
                                        </div>
                                        <small className="text-danger text-center"><i className="fas fa-exclamation-circle"></i> Please use small size images for quick uploading</small>
                                    </div>
                                </div>

                            </div>
                        </div> : null
                }


            </div>

        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
})
export default connect(mapStateToProps, { editUser })(AllSet);
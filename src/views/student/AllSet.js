import { motion } from 'framer-motion'
import React, { Component } from 'react'
import { pageTransitions, pageVariants } from '../../globals/__gobal_vars'

export default class AllSet extends Component {
    constructor(props){
        super(props);
        this.state ={
            imageSource : "./assets/img/user.png",
            url : ""
        }
    }
    
    componentDidMount(){
    }
    render() {
        var reader = new FileReader();
        return (
            <motion.div 
            initial='initial'
            animate='animate'
            exit='out'
            variants={pageVariants}
            transition = {pageTransitions}
            
            className="wrapper d-flex align-items-center">
                <div className="container-fluid ">
                <p className="text-right text-primary mr-3">Skip &nbsp;&nbsp;<i class="fas fa-caret-right"></i> </p>
                    <div className>
                        <div className>
                            <h2 className="font-weight-light text-center"> You are all set.</h2>
                            <div className="row justify-content-center my-5">
                                <div className="col-12 ">
                                    <div className="upload-avatar">
                                        {/* <label htmlFor="upload-pic" >

                                        </label> */}
                                        <label htmlFor="upload-pic" >
                                        <div htmlFor="upload-pic" className="upload-icon">
                                        <i class="fas fa-camera fa-2x"></i>
                                        </div>
                                            <img width="100%" src={this.state.imageSource} alt />
                                        </label>
                                    </div>
                                    <input onChange={(e)=>{this.setState({imageSource : e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : "./assets/img/user.png"})}} className="d-none" type="file" name="" id="upload-pic"/>
                                </div>
                                <p className="text-center my-3">Upload Your Profile Picture</p>
                                {
                                    (this.state.imageSource !== "./assets/img/user.png") ? 
                                    <div className="col-12 mt-1">
                                        <button type="button" className="btn btn-primary btn-block">Upload &amp; Finish</button>
                                    </div>
                                    : ""
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        )
    }
}

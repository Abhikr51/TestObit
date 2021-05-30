import { IconButton, Paper, Tab, Tabs } from '@material-ui/core';
import React, { Component } from 'react'
import Topbar from '../../components/Topbar'
import { LOADEROFF, LOADERON, notification, validate } from '../../globals/__global_funcs'
import axios from 'axios'
import { rootURL } from '../../globals/__gobal_vars';
export default class UploadPYQ extends Component {
    state = {
        subjectList: [],
        subject: "",
        title: "",
        pdf : "",
    }
    componentDidMount() {
        validate("upload-pyq");
        LOADERON();
        axios.post(rootURL + "/getSubjects", {}).then((res) => {
            //success
            this.setState({ subjectList: res.data.data })
            LOADEROFF()
        }).catch((err) => {
            //error
            LOADEROFF()
            console.log(err);
        })
    }
    setSubmit = event => {
        event.preventDefault();
        let { subject,title,pdf} = this.state;
        
        if (pdf.name) {
            LOADERON();
            let data = new FormData();
            data.append("subject",subject);
            data.append("title",title);
            data.append("pdf",pdf, pdf.name);
            axios.post(rootURL + "/auth/uploadPYQ", data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                //success
                console.log(res);
                if(res.data.status){
                    this.setState({
                        subject: "",
                        title: "",
                        pdf : "",
                    })
                    document.getElementById("PYQ").reset();
                    LOADEROFF();
                    notification("Woohoooo PYQ uploded succesfully" ,"success");
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
            <div className="wrapper">
                <Topbar text={<span><i className="fas fa-plus"></i> Add Question set</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                </Topbar>
                <div className="fixed-div">
                        <form id="PYQ" onSubmit={this.setSubmit} noValidate className="upload-pyq">

                            <div className="container-fluid my-4">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-2 my-md-2">
                                        <label htmlFor="">Subject</label>
                                    </div>
                                    <div className="col-md-4 my-md-2 ">
                                        <select value={this.state.subject} onChange={(e) => { this.setState({ subject: e.target.value }) }} className="form-control w-100" required>
                                            <option selected={"" == this.state.subject} value="">-- Select Subject --</option>
                                            {
                                                this.state.subjectList.map((item, i) => (
                                                    <option selected={item.id == this.state.subject} key={i} value={item.id}>{item.title}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-2 my-md-2">
                                        <label htmlFor="">Title</label>
                                    </div>
                                    <div className="col-md-10 my-md-2">
                                        <textarea value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} className="form-control" placeholder="Enter Title here..." required></textarea>
                                    </div>
                                    <div className="col-md-2 my-md-2">
                                        <label htmlFor="">Upload file</label>
                                    </div>
                                    <div className="col-md-4 my-md-2">
                                        <input type="file" className="form-control" onChange={(e)=>{this.setState({pdf : e.target.files[0] ?? ""})}} required />
                                    </div>
                                    
                                    <div className="col-md-6 my-4">
                                        <button className="btn btn-success btn-block">Create Set</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    
                </div>
                
            </div>
        )
    }
}

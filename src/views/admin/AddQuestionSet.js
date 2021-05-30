import { IconButton, Paper, Tab, Tabs } from '@material-ui/core';
import React, { Component } from 'react'
import Topbar from '../../components/Topbar'
import { LOADEROFF, LOADERON, notification, validate } from '../../globals/__global_funcs'
import axios from 'axios'
import { rootURL } from '../../globals/__gobal_vars';
export default class AddQuestionSet extends Component {
    state = {
        activeTab: 0,
        subjectList: [],
        testList: [],
        subject: "",
        date : "",
        test_type: "",
        length: 0,
        time: "",
        title: "",
        question_array: []
    }
    componentDidMount() {
        validate("question-set");
        LOADERON();
        let subjects = axios.post(rootURL + "/getSubjects", {}).then((res) => {
            //success
            this.setState({ subjectList: res.data.data })
        }).catch((err) => {
            //error
            LOADEROFF()
            console.log(err);
        })
        let tests = axios.post(rootURL + "/getTests", {}).then((res) => {
            //success
            this.setState({ testList: res.data.data })
        }).catch((err) => {
            //error
            LOADEROFF()
            console.log(err);
        })
        Promise.all([subjects, tests]).then(() => {
            LOADEROFF();
        })
    }
    setSubmit = event => {
        event.preventDefault();
        this.setState({
            activeTab: 1
        })
    }
    totalSubmit = event => {
        event.preventDefault();
        let { subject, test_type, length,date, time, title, question_array } = this.state;
        question_array = question_array.filter((item) => {
            return Object.keys(item).length !== 0;
        })
        if(date !== null){
            date = date.split("T").join(" ")
        }
        if (question_array.length !== 0) {
            LOADERON();
            axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
            axios.post(rootURL + "/auth/createQuestionSetWithQuestions", {
                subject, test_type, length,date, time, title, question_array 
            }).then((res) => {
                //success
                if (res.data.status) {
                    notification("Woohoooo questions are submitted succesfully" ,"success");
                    this.setState({
                        activeTab: 0,
                        subject: "",
                        date : "",
                        test_type: "",
                        length: 0,
                        time: "",
                        title: "",
                        question_array: []
                    })
                    LOADEROFF();

                } else {
                    LOADEROFF();
                    console.log(res);
                }
            }).catch((err) => {
                LOADEROFF();
                console.log(err);

            })
        }


    }
    setLength = (e) => {
        let temp = [];
        for (var i = 0; i < e.target.value; i++) {
            temp = [...temp, {}]
        }
        this.setState({ length: e.target.value, question_array: temp });
    }
    dataPusher = (value, key, index) => {
        let temp2 = this.state.question_array
        temp2[index] = {
            ...temp2[index],
            [key]: value
        }
        this.setState({ question_array: temp2 });
    }
    render() {
        return (
            <div className="wrapper">
                <Topbar text={<span><i className="fas fa-plus"></i> Add Question set</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                </Topbar>
                <Paper square>
                    <Tabs
                        value={this.state.activeTab}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        onChange={(event, value) => { this.setState({ activeTab: value }) }}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Add Question set" />
                        <Tab label="Add Questions" />
                    </Tabs>
                </Paper>
                <div className="fixed-div">

                    <div className={`visible-tab ${(this.state.activeTab == 0) ? '' : "slide-visible-tab"}`}>
                        <form onSubmit={this.setSubmit} noValidate className="question-set">

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
                                        <label htmlFor="">Test Type</label>
                                    </div>
                                    <div className="col-md-4 my-md-2">
                                        <select value={this.state.test_type} onChange={(e) => { this.setState({ test_type: e.target.value }) }} className="form-control w-100" required>
                                            <option selected={"" == this.state.test_type} value="">-- Select Test --</option>
                                            {
                                                this.state.testList.map((item, i) => (
                                                    <option disabled={item.id == 5} selected={item.id == this.state.test_type} key={i} value={item.id}>{item.title}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-2 my-md-2">
                                        <label htmlFor="">Length</label>
                                    </div>
                                    <div className="col-md-4 my-md-2">
                                    {
                                        (this.state.test_type !== "4")?
                                        <select onChange={this.setLength} className="form-control" required>
                                            <option selected={0  == this.state.length} value="">-- choose length --</option>
                                            <option selected={"50" == this.state.length} value="50">50</option>
                                            <option selected={"30" == this.state.length} value="30">30</option>
                                            <option selected={"10" == this.state.length} value="10">10</option>
                                            <option selected={"2" == this.state.length} value="2">2</option>
                                        </select>
                                        :
                                        <input onChange={this.setLength} type="number" placeholder="Enter Length" className="form-control" required />
                                    }
                                    </div>
                                    <div className="col-md-2 my-md-2">
                                        <label htmlFor="">Time [ in Minute(s) ]</label>
                                    </div>
                                    <div className="col-md-4 my-md-2">
                                        <input value={this.state.time} onChange={(e) => { this.setState({ time: e.target.value }) }} type="number" className="form-control" required />
                                    </div>
                                    <div className="col-md-2 my-md-2">
                                        <label htmlFor="">Title</label>
                                    </div>
                                    <div className="col-md-10 my-md-2">
                                        <textarea value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} className="form-control" placeholder="Enter Title here..." required></textarea>
                                    </div>
                                    {
                                        (this.state.test_type == "4")?
                                        <>
                                            <div className="col-md-2 my-md-2">
                                                <label htmlFor="">Date Time</label>
                                            </div>
                                            <div className="col-md-4 my-md-2">
                                                <input value={this.state.date} onChange={(e) => { this.setState({ date: e.target.value }) }} type="datetime-local" className="form-control" required={this.state.test_type == "4"} />
                                            </div>    
                                        </>:""
                                    }
                                    
                                    <div className="col-md-6 my-4">
                                        <button className="btn btn-success btn-block">Create Set</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={`visible-tab ${(this.state.activeTab == 1) ? '' : "slide-visible-tab"}`}>
                        <form onSubmit={this.totalSubmit}  >

                            <div className="container-fluid p-1">
                                {
                                    this.state.question_array.map((item, index) => (

                                        <div key={index} style={{ boxShadow: "0 0 7px 5px #0000001c" }} className="card my-3">
                                            <div className="card-body">

                                                <div className="row">
                                                    <div className="col-md-2 my-md-2">
                                                        <label htmlFor=""> <b>Question. <big>{index + 1}</big></b> </label>
                                                    </div>
                                                    <div className="col-md-10 my-md-2">
                                                        <textarea rows="5" onChange={(e) => { this.dataPusher(e.target.value, "question", index) }} className="form-control" placeholder="Enter Question here..." required></textarea>
                                                    </div>
                                                    <div className="col-md-2 my-md-2">
                                                        <label htmlFor="">Option 1</label>
                                                    </div>
                                                    <div className="col-md-10 my-md-2">
                                                        <input value={item.op1} onChange={(e) => { this.dataPusher(e.target.value, "op1", index) }} type="text" className="form-control" required />
                                                    </div>
                                                    <div className="col-md-2 my-md-2">
                                                        <label htmlFor="">Option 2</label>
                                                    </div>
                                                    <div className="col-md-10 my-md-2">
                                                        <input onChange={(e) => { this.dataPusher(e.target.value, "op2", index) }} type="text" className="form-control" required />
                                                    </div>
                                                    <div className="col-md-2 my-md-2">
                                                        <label htmlFor="">Option 3</label>
                                                    </div>
                                                    <div className="col-md-10 my-md-2">
                                                        <input onChange={(e) => { this.dataPusher(e.target.value, "op3", index) }} type="text" className="form-control" required />
                                                    </div>
                                                    <div className="col-md-2 my-md-2">
                                                        <label htmlFor="">Option 4</label>
                                                    </div>
                                                    <div className="col-md-10 my-md-2">
                                                        <input onChange={(e) => { this.dataPusher(e.target.value, "op4", index) }} type="text" className="form-control" required />
                                                    </div>
                                                    <div className="col-md-2 my-md-2">
                                                        <label htmlFor="">Answer</label>
                                                    </div>
                                                    <div className="col-md-10 my-md-2">
                                                        <select className="form-control" onChange={(e) => { this.dataPusher(e.target.value, "answer", index) }} required>
                                                            <option value="">--Select Option--</option>
                                                            <option value={item.op1}>Option 1</option>
                                                            <option value={item.op2}>Option 2</option>
                                                            <option value={item.op3}>Option 3</option>
                                                            <option value={item.op4}>Option 4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="row justify-content-center my-3">
                                <div className="col-md-4">
                                    {
                                        (this.state.question_array.length > 0) ?
                                            <button className="btn btn-success btn-block">Submit Questions</button>
                                            : <h4 className="text-center font-weight-light">Question set Length is 0 !!</h4>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

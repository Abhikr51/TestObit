import { Button, Divider } from '@material-ui/core'
import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { LOADEROFF, LOADERON, notification } from '../../globals/__global_funcs';
import { rootURL } from '../../globals/__gobal_vars';
import axios from "axios";
import { connect } from 'react-redux';
import { setTestResult } from '../../redux/actions/TestActions';
class TestCMP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            choice: null,
            q_index : 1,

        }
    }
    componentDidMount() {
        LOADERON();
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
        let questionCall = axios.post(rootURL + "/auth/getQuestions", {
            set_id: this.props.match.params.id
        }).then((res) => {
            //success
            if (res.data.status) {
                let temp = res.data.data.map((item,index)=>{
                    return {
                        ...item,
                        selectedAnswer : ""
                    }
                })
                this.setState({
                    questionList: temp
                })
                LOADEROFF();

                // setTimeout(() => {
                // }, 3000);

            } else {
                LOADEROFF();
                console.log(res);
            }
        }).catch((err) => {
            LOADEROFF();
            console.log(err);

        })
        Promise.all([questionCall]).then(()=>{

            this.countdown("timer",parseInt(this.props.match.params.time), 0).then((isTimeup) => {
                if (isTimeup) {
                    notification("Time's Up !!!", "onClickReturn").then((isTimeup) => { if(isTimeup){this.submitTest();}});
                }
            })
        })
    }
    countdown = (elementName, minutes, seconds) => {
        return new Promise((resolve, reject) => {

            var element, endTime, hours, mins, msLeft, time;

            function twoDigits(n) {
                return (n <= 9 ? "0" + n : n);
            }

            function updateTimer() {
                msLeft = endTime - (+new Date());
                if (msLeft <= 0) {
                    resolve(true)
                } else if (!document.getElementById(elementName)) {
                    resolve(false)
                } else {

                    time = new Date(msLeft);
                    hours = time.getUTCHours();
                    mins = time.getUTCMinutes();
                    element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
                    setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
                }
            }
            element = document.getElementById(elementName);
            endTime = (+new Date()) + 1000 * (60 * minutes + seconds) + 500;
            updateTimer()
        })

    }

    submitTest = () =>{
        this.props.setTestResult(this.state.questionList)
        this.props.history.push("/student/test-result");
    }
    selectAnswer = (id , value)=>{
        let temp = this.state.questionList.map((item,index)=>{
            if(item.id == id){
                return {
                    ...item,
                    selectedAnswer : value
                }
            }
            return item
        }) 
        this.setState({questionList : temp})
    }
    render() {
        if(this.state.questionList.length > 0){

            let presentQuestion = this.state.questionList[this.state.q_index-1]
            return (
                <div className="wrapper p-0">
                    <div className="test-main">
                        <div className="">
                            <div className="row mb-2">
                                <div className="col-8">
                                    <Button onClick={() => { this.props.history.goBack() }} color="primary"> Exit </Button>
                                    <b className="text-primary" >Q</b> : {this.state.q_index}/{this.state.questionList.length}
                               </div>
                                <div className="col-4 text-right">
                                    <i className="fas fa-stopwatch text-primary"></i> <span id="timer">wait..</span>
                                </div>
                            </div>
                            <Divider />
                            <div className="test-area">
    
                                <div className="row my-2">
                                    <div className="col-12">
                                        <p className="text-justify">
                                            <b>Q.{this.state.q_index} &nbsp; &nbsp;&nbsp;&nbsp;</b> 
                                            <span>{presentQuestion.question} </span> 
    
                                    </p>
                                    </div>
                                </div>
                                <div className="row my-2 pl-3">
                                    <div className="col-12">
                                        <FormControl>
                                            <RadioGroup aria-label="choices" name="gender1" value={presentQuestion.selectedAnswer} >
                                                <FormControlLabel onChange={(e)=>{this.selectAnswer(presentQuestion.id , e.target.value)}} value={presentQuestion.op1} control={<Radio />} label={presentQuestion.op1} />
                                                <FormControlLabel onChange={(e)=>{this.selectAnswer(presentQuestion.id , e.target.value)}} value={presentQuestion.op2} control={<Radio />} label={presentQuestion.op2} />
                                                <FormControlLabel onChange={(e)=>{this.selectAnswer(presentQuestion.id , e.target.value)}} value={presentQuestion.op3} control={<Radio />} label={presentQuestion.op3} />
                                                <FormControlLabel onChange={(e)=>{this.selectAnswer(presentQuestion.id , e.target.value)}} value={presentQuestion.op4} control={<Radio />} label={presentQuestion.op4} />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-nav">
                            <div className="">
    
                                <div className="row">
                                    <div className="col-4 px-0">
                                        <button onClick={()=>{this.setState({q_index : this.state.q_index - 1})}} className="btn btn-sm btn-block rounded-0 text-white btn-primary" >Prev</button>
                                    </div>
                                    <div className="col-4 px-0">
                                        <button onClick={()=>{this.setState({q_index : this.state.q_index + 1})}} className="btn btn-sm btn-block rounded-0 text-white btn-primary" >Skip</button>
                                    </div>
                                    {
                                        (this.state.q_index == this.state.questionList.length) ? 

                                        <div className="col-4 px-0">
                                            <button onClick={()=>{this.submitTest()}} className="btn btn-sm btn-block rounded-0 text-white btn-success" >Submit</button>
                                        </div> 
                                        :
                                        <div className="col-4 px-0">
                                            <button onClick={()=>{this.setState({q_index : this.state.q_index + 1})}} className="btn btn-sm btn-block rounded-0 text-white btn-primary" >Next</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-q ">
                        {
                            this.state.questionList.map((item,index) => (
                                <div className="q-box">
                                    <button key={index} onClick={()=>{this.setState({q_index : index+1})}} className={`btn btn-floating ${index == this.state.q_index - 1 ? "bg-secondary text-white" : "bg-white"}  mx-auto`}>{index+1}</button>
                                </div>
                            ))
    
                        }
    
                    </div>
                </div>
            )
        }else{
            return (<React.Fragment></React.Fragment>);
        }
    }
}

export default connect(null , {setTestResult})(TestCMP)
import { Button, IconButton } from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topbar from '../../components/Topbar';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { setStudentData } from '../../redux/actions/TestActions';
class TestResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.result,
            right : 0,
            wrong : 0,
            unanswered : 0,
            totalQuestion : 0,

        }
    }
    componentDidMount(){
        let res =  this.props.result
        let right = 0;
        let wrong = 0;
        let unanswered = 0;
        res.map((item,index)=>{
            if(item.answer === item.selectedAnswer ){
                right++;
            }else if(item.answer !== item.selectedAnswer && item.selectedAnswer !== "") {
                wrong++;
            }else{
                unanswered++;
            }
        })
        this.setState({
            right,
            wrong,
            unanswered,
            totalQuestion : res.length
        })
    }
    iconReturner = (item,op) =>{
        if(item.selectedAnswer === ""){
            return "far fa-dot-circle text-primary";
        }else{
            if(item[op] !== item.answer){
                if(item[op] === item.selectedAnswer ){
                    return "fas fa-times-circle text-secondary"
                }else{
                    return "far fa-dot-circle text-primary";
                }
            }else{
                if( item.answer === item.selectedAnswer  ){
                    return "fas fa-check-double text-success"
                }else{
                    return "fas fa-check-circle text-success"
                }
            }
            
         
         
        }
       
    }
    
    render() {
        return (
            <div className="wrapper">
                <Topbar text={<span><i className="fas fa-invoice"></i> Result </span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <Button style={{backgroundColor : "#ffffff4a"}} className="float-right  text-white  rounded-0" onClick={() => { this.props.setStudentData() ; this.props.history.push("/student/dashboard") } }> Go Home </Button >
                </Topbar>
                <div className="performance container-fluid">
                    <div className="row  justify-content-center">
                        <div className="col-8">
                        <CircularProgressbarWithChildren
                                strokeWidth={3}
                                value={Math.round((this.state.right / this.state.totalQuestion)*100)}
                                styles={buildStyles({
                                    pathColor: `rgb(255, 134, 0)`,
                                    // textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            >
                            <h2 className="font-weight-light">Your Score</h2>
                            <div className="row">
                                <div className="col-6 text-left">{this.state.right}/{this.state.totalQuestion}</div>
                                <div className="col-6 text-right">{Math.round((this.state.right / this.state.totalQuestion)*100)}%</div>
                            </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-4 p-2">
                            <CircularProgressbarWithChildren
                                strokeWidth={3}
                                value={Math.round((this.state.right / this.state.totalQuestion)*100)}
                                styles={buildStyles({
                                    pathColor: `var(--success)`,
                                    // textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            >
                                {this.state.right}
                            <h6 className="font-weight-light">Right</h6>
                            </CircularProgressbarWithChildren>

                        </div>
                        <div className="col-4 p-2">
                            <CircularProgressbarWithChildren
                                strokeWidth={3}
                                value={Math.round((this.state.wrong / this.state.totalQuestion)*100)}
                                styles={buildStyles({
                                    pathColor: `var(--secondary)`,
                                    // textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            >
                                {this.state.wrong }
                            <h6 className="font-weight-light">Wrong</h6>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="col-4 p-2">
                            <CircularProgressbarWithChildren
                                strokeWidth={3}
                                value={Math.round((this.state.unanswered / this.state.totalQuestion)*100)}
                                styles={buildStyles({
                                    pathColor: `var(--primary)`,
                                    // textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            >
                              {this.state.unanswered }
                            <h6 className="font-weight-light">Unanswerd</h6>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                </div>
                {
                    this.props.result.map((item,index)=>(
                        <div key={index} className="answer-box">
                            <h5>Question : {index + 1}</h5><p style={{textIndent : "20px"}} className="text-justify"><i className="fas fa-angle-double-right"></i> {item.question}</p>
                            <ul>
                                <li><span className="circle"> <i className={this.iconReturner(item,"op1")}></i> </span> &nbsp;&nbsp;&nbsp; {item.op1}</li>
                                <li><span className="circle"> <i className={this.iconReturner(item,"op2")}></i> </span> &nbsp;&nbsp;&nbsp; {item.op2}</li>
                                <li><span className="circle"> <i className={this.iconReturner(item,"op3")}></i> </span> &nbsp;&nbsp;&nbsp; {item.op3}</li>
                                <li><span className="circle"> <i className={this.iconReturner(item,"op4")}></i> </span> &nbsp;&nbsp;&nbsp; {item.op4}</li>
                            </ul>
                        </div>
                    ))
                }
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    result: state.testResult.result
})

export default connect(mapStateToProps, {setStudentData})(TestResult)
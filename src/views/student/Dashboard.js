import React, { Component } from 'react'
import Animate from '../../components/Animate'
import { IconButton } from '@material-ui/core';
import Topbar from '../../components/Topbar'
import { Line } from 'react-chartjs-2';
import SchedulledTest from './SchedulledTest';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from 'react-redux';
class Dashboard extends Component {
    state = {

    }
    push = (path) => {
        this.props.history.push(path);
    }
    render() {
        if(Object.keys(this.props.studentData).length !== 0){

            let total = this.props.studentData.right + this.props.studentData.wrong;
            let labels = [];
            let dataRight = []
            let dataWrong = []
            let totalTests = Object.keys(this.props.studentData.set_data).length
            Object.entries(this.props.studentData.set_data).reverse().map((item,index)=>{
                if(Object.keys(this.props.studentData.set_data).length-15 < index+1){
                    labels = [...labels , "T-"+(index+1)];
                    let tempr = 0
                    let tempw = 0
                    item[1].map((nItem)=>{
                        if(nItem.answer !== null){
                            if(nItem.answer == nItem.question.answer){
                                tempr++;
                            }else{
                                tempw++;
                            }
                        }
                    });
                    dataRight = [...dataRight, tempr]
                    dataWrong = [...dataWrong, tempw]
                    
                }
            })
            let chartState = {
    
                labels: labels,
                datasets: [
                    {
                        label: 'Right',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgb(21, 212, 36)',
                        borderColor: 'rgb(21, 212, 36)',
                        borderWidth: 2,
                        data: dataRight
                    },
                    {
                        label: 'Wrong',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgb(233, 30, 99)',
                        borderColor: 'rgb(233, 30, 99)',
                        borderWidth: 2,
                        data: dataWrong
                    },
                ]
            }
    
            return (
                
                <>
    
    
                    <div className="wrapper">
                        <Topbar text={<span><i className="fas fa-tachometer-alt"></i> Dashboard</span>}>
                            <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                            <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                        </Topbar>
                        <div className="card my-3">
                            {/* <div className="card">
                                <div className="card-body text-secondary"><i className="fas fa-info-circle"></i> 1 Upcoming Scheduled Test</div>
                            </div>
                            <br /> */}
                            <h5 className="card-header font-weight-light"><i className="fas fa-chart-line"></i> Test statistics</h5>
                            <div className="card-body">
                                <div className="statics-boxes">
                                    <div className="row justify-content-center align-items-center my-2">
                                        {/* <div className="col-4 ">
                                            <div className="acuracy-box mx-auto">
                                                <span>65%</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Accuracy</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="time-box mx-auto">
                                                <span>2:39</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Average time taken</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="question-box mx-auto">
                                                <span>94</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Total question done</p>
                                        </div> */}
                                        <div className="col-4">
                                            <CircularProgressbarWithChildren
                                                strokeWidth={1}
                                                value={(total != 0 ) ? Math.round((this.props.studentData.right / (total)) * 100) : 0}
                                                styles={buildStyles({
                                                    pathColor: `var(--primary)`,
                                                    // textColor: '#f88',
                                                    trailColor: '#d6d6d6',
                                                    backgroundColor: '#3e98c7',
                                                })}
                                            >
                                                {(total != 0 ) ? Math.round((this.props.studentData.right / (total)) * 100) : 0} %
                                                <h6 style={{ fontSize: "11px", textAlign: "center" }} className="font-weight-light">Accuracy</h6>
                                            </CircularProgressbarWithChildren>
                                        </div>
    
                                        <div style={{ fontSize: "13px" }} className="col-8">
                                            <div className="row">
                                                <div className="col-6">Right</div>
                                                <div className="col-6 text-right">{this.props.studentData.right}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Wrong</div>
                                                <div className="col-6 text-right">{this.props.studentData.wrong}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">Unanswered</div>
                                                <div className="col-6 text-right">{this.props.studentData.unanswerd}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center align-items-center my-2">
                                        <div className="col-4">
                                            <CircularProgressbarWithChildren
                                                strokeWidth={1}
                                                value={100}
                                                styles={buildStyles({
                                                    pathColor: `var(--secondary)`,
                                                    // textColor: '#f88',
                                                    trailColor: '#d6d6d6',
                                                    backgroundColor: '#3e98c7',
                                                })}
                                            >
                                                {total}
                                                <h6 style={{ fontSize: "11px", textAlign: "center" }} className="font-weight-light">Questions <br />attempted</h6>
                                            </CircularProgressbarWithChildren>
                                        </div>
                                        <div style={{ fontSize: "13px" }} className="col-8">
                                            <div className="row">
                                                <div className="col-6">Mock Tests</div>
                                                <div className="col-6 text-right">{totalTests}</div>
                                            </div>
    
                                        </div>
    
                                    </div>
                                </div>
    
    
    
                            </div>
                            <div className="col-12 px-1">
                                <Line
                                    data={chartState}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'Average Rainfall per month',
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>
                        </div>
    
                        <div className="card my-3">
                            <h5 className="card-header font-weight-light"> Scheduled Tests</h5>
                            <SchedulledTest history={{ push: this.push }} limit={3} topbar={false} />
                        </div>
                        <div className="card">
                            <h5 className="card-header font-weight-ligh">Notice</h5>
                            <div className="card-body">
                                <ul className="notice-board">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li> <span className="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span className="blink-badge">NEW</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum. Dolore, porro?</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span className="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span className="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span className="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span className="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
    
                </>
            )
        }else{
            return <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
                <div style={{height:"100px" ,width:"100px"}} className="spinner-border text-primary" ></div>
            </div>
        }
    }
}
const mapStateToProps = (state) => ({
    studentData: state.studentData
})
export default connect(mapStateToProps, null)(Dashboard);
import React, { Component } from 'react'
import Animate from '../../components/Animate'
import { IconButton } from '@material-ui/core';
import Topbar from '../../components/Topbar'
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
export default class Dashboard extends Component {
    state = {
        chartState: {

            labels: ['M-1', 'M-2', 'M-3',
                'M-4', 'M-5',"M-6" ],
            datasets: [
                {
                    label: 'Right',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgb(21, 212, 36)',
                    borderColor: 'rgb(21, 212, 36)',
                    borderWidth: 2,
                    data: [65, 59, 80, 20, 56,41]
                },
                {
                    label: 'Wrong',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgb(233, 30, 99)',
                    borderColor: 'rgb(233, 30, 99)',
                    borderWidth: 2,
                    data: [35, 41, 20, 80, 44,59]
                },
            ]
        }
    }
    render() {
        return (
            <>

                <Topbar text={<span><i className="fas fa-tachometer-alt"></i> Dashboard</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                </Topbar>
                <Animate>
                    <div className="wrapper">
                        <div className="card my-3">
                            <h5 className="card-header font-weight-light">Mock Test</h5>
                            <div className="card-body">
                                <div className="statics-boxes">
                                    <div className="row">
                                        <div className="col-4 ">
                                            <div className="acuracy-box">
                                                <span>65%</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Accuracy</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="time-box">
                                                <span>2:39</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Average time taken</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="question-box">
                                                <span>94</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Total question done</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Line
                                            data={this.state.chartState}
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



                            </div>
                        </div>
                        <div className="card my-3">
                            <h5 className="card-header font-weight-light">Sample Paper Test</h5>
                            <div className="card-body">
                                <div className="statics-boxes">
                                    <div className="row">
                                        <div className="col-4 ">
                                            <div className="acuracy-box">
                                                <span>85%</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Accuracy</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="time-box">
                                                <span>1:40</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Average time taken</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="question-box">
                                                <span>235</span>
                                            </div>
                                            <p style={{ fontSize: "12px" }} className="text-center my-2">Total questions done</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <Line
                                            data={this.state.chartState}
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
                            </div>
                        </div>
                        <div className="card my-3">
                            <h5 className="card-header font-weight-light"> Scheduled Test</h5>
                            <div className="card-body p-2">
                                <div style={{borderColor: "var(--primary)"}} className="schedule-box">
                                    <div style={{fontSize: "12px"}} className="row justify-content-center">
                                        <div className="col-5 "><i className="fas text-primary fa-calendar-day"></i> 02/03/2021</div>
                                        <div className="col-3 text-center"><i className="fas text-primary fa-angle-double-right"></i> 50 Qs</div>
                                        <div className="col-4 text-right"><i className="fas text-primary fa-clock"></i> <i>30 min</i></div>
                                        
                                        <div style={{borderTop : "1px solid #80808057"}} className="col-11 my-2">

                                            <h3 className="font-weight-light">AI forensic test</h3>
                                            <p className="text-muted">Upcoming...</p>
                                        </div>
                                    </div>
                                    <Link to= "#" className="bottom-box bg-primary"> Go  &nbsp;<i className="fas fa-caret-right"></i></Link>
                                </div>
                                <div style={{borderColor: "var(--success)"}} className="schedule-box">
                                    <div style={{fontSize: "12px"}} className="row justify-content-center">
                                        
                                        <div className="col-5 "><i className="fas text-success fa-calendar-day"></i> 02/03/2021</div>
                                        <div className="col-3 text-center"><i className="fas text-success fa-angle-double-right"></i> 50 Qs</div>
                                        <div className="col-4 text-right"><i className="fas text-success fa-clock"></i> <i>30 min</i></div>
                                        
                                        <div style={{borderTop : "1px solid #80808057"}} className="col-11 my-2">

                                            <h3 className="font-weight-light">Digital Logic pre test </h3>
                                            <p className="text-muted">Passed away...</p>
                                        </div>
                                    </div>
                                    <Link to = "#" className="bottom-box bg-success"> Go  &nbsp;<i className="fas fa-caret-right"></i></Link>
                                </div>
                                <div style={{borderColor: "var(--secondary)"}} className="schedule-box">
                                    <div style={{fontSize: "12px"}} className="row justify-content-center">
                                        <div className="col-5 "><i className="fas text-secondary fa-calendar-day"></i> 02/03/2021</div>
                                        <div className="col-3 text-center"><i className="fas text-secondary fa-angle-double-right"></i> 50 Qs</div>
                                        <div className="col-4 text-right"><i className="fas text-secondary fa-clock"></i> <i>30 min</i></div>
                                        
                                        <div style={{borderTop : "1px solid #80808057"}} className="col-11 my-2">

                                            <h3 className="font-weight-light">Data Structure self test Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
                                            <p className="text-muted">Missed out...</p>
                                        </div>
                                    </div>
                                    <Link to= "#" className="bottom-box bg-secondary"> Go  &nbsp;<i className="fas fa-caret-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h5 className="card-header font-weight-ligh">Notice</h5>
                            <div className="card-body">
                                <ul className="notice-board">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li> <span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li> 
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum. Dolore, porro?</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
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
                </Animate>
            </>
        )
    }
}

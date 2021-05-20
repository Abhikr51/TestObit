import { IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import Topbar from '../../components/Topbar'
import axios from 'axios';
import { rootURL } from '../../globals/__gobal_vars';
import {futurePastDetecter, LOADEROFF, LOADERON, timeConvert } from '../../globals/__global_funcs';
export default class SchedulledTest extends Component {
    state = {
        testList: [],
    }
    
    componentDidMount() {
        LOADERON();
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
        axios.post(rootURL + "/auth/getScheduledTests", {
            limit: 10
        }).then((res) => {
            //success
            if (res.data.status) {
                this.setState({
                    testList: res.data.data,
                })
                // console.log(futurePastDetecter(new Date(res.data.data[0].date.split(" ")[0])))
                LOADEROFF();
            } else {
                LOADEROFF();
                console.log(res);
            }
        }).catch((err) => {
            LOADEROFF();
            console.log(err);

        })
        console.log(futurePastDetecter("2021-05-19", "14"));
    }
    colorDetector = (date) =>{
        var dateStr = date.split(" ")[0] 
        var time = parseInt(date.split(" ")[1].split(":")[0]) + parseInt(date.split(" ")[1].split(":")[1]);
        switch (futurePastDetecter(dateStr ,  time)) {
            case 'Upcoming today':
                
                return "var(--success)"
            case 'Upcoming':
                
                return "var(--primary)"
            case 'Missed':
                
            return "var(--secondary)"
        
            default:
                break;
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Topbar text={<span><i className="fas fa-users"></i> SchedulledTest</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                </Topbar>
                <div className="card my-3">
                    <div className="card-body p-2">
                        {
                            this.state.testList.map((item, index) => (

                                <div key={index} style={{ borderColor: item.date ?  this.colorDetector(item.date) : "var(--primary)"}} className="schedule-box">
                                    <div style={{ fontSize: "12px" }} className="row justify-content-center">
                                        <div className="col-8 "><i style={{ color: item.date ?  this.colorDetector(item.date) : "var(--primary)"}} className="fas fa-calendar-day"></i> {item.date ? item.date.split(" ")[0].split("-").reverse().join("-") : ""} at {item.date ? timeConvert(item.date.split(" ")[1]) : ""}</div>
                                        <div className="col-4 text-right"><i style={{ color: item.date ?  this.colorDetector(item.date) : "var(--primary)"}} className="fas fa-clock"></i> <i>{item.time ? parseInt(item.time.split(":")[0])*60 + parseInt(item.time.split(":")[1]) : ""} min</i></div>
                                        <div className="col-9 "><i style={{ color: item.date ?  this.colorDetector(item.date) : "var(--primary)"}} className="fas fa-angle-double-right"></i> {item.subject.title ?? ""}</div>
                                        <div className="col-3 text-right"><i style={{ color: item.date ?  this.colorDetector(item.date) : "var(--primary)"}} className="fas fa-angle-double-right"></i> {item.q_length} Qs</div>

                                        <div className="col-11 my-2">

                                            <h4 className="font-weight-light">{item.title}</h4>
                                            <p className="text-muted">{item.date ?  futurePastDetecter(item.date.split(" ")[0],parseInt(item.date.split(" ")[1].split(":")[0]) + parseInt(item.date.split(" ")[1].split(":")[1])) : ""} ...</p>
                                        </div>
                                    </div>
                                    <div onClick={()=>{this.props.history.push("/student/test")}} style={{ background: item.date ?  this.colorDetector(item.date) : "var(--primary)"}} className="bottom-box ripple"> Go  &nbsp;<i className="fas fa-caret-right"></i></div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>

            </div>
        )
    }
}
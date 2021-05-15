import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, } from '@material-ui/core'
import React, { Component } from 'react'
import Topbar from '../../components/Topbar'

export default class SchedulledTest extends Component {
    render() {
        return (
            <div className="wrapper">
                <Topbar text={<span><i className="fas fa-users"></i> SchedulledTest</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                </Topbar>
                <div className="card my-3">
                    <div className="card-body p-2">
                        <div style={{ borderColor: "var(--primary)" }} className="schedule-box">
                            <div style={{ fontSize: "12px" }} className="row justify-content-center">
                                <div className="col-5 "><i className="fas text-primary fa-calendar-day"></i> 02/03/2021</div>
                                <div className="col-3 text-center"><i className="fas text-primary fa-angle-double-right"></i> 50 Qs</div>
                                <div className="col-4 text-right"><i className="fas text-primary fa-clock"></i> <i>30 min</i></div>

                                <div style={{ borderTop: "1px solid #80808057" }} className="col-11 my-2">

                                    <h4 className="font-weight-light">AI forensic test</h4>
                                    <p className="text-muted">Upcoming...</p>
                                </div>
                            </div>
                            <div className="bottom-box bg-primary ripple"> Go  &nbsp;<i className="fas fa-caret-right"></i></div>
                        </div>
                        <div style={{ borderColor: "var(--success)" }} className="schedule-box">
                            <div style={{ fontSize: "12px" }} className="row justify-content-center">

                                <div className="col-5 "><i className="fas text-success fa-calendar-day"></i> 02/03/2021</div>
                                <div className="col-3 text-center"><i className="fas text-success fa-angle-double-right"></i> 50 Qs</div>
                                <div className="col-4 text-right"><i className="fas text-success fa-clock"></i> <i>30 min</i></div>

                                <div style={{ borderTop: "1px solid #80808057" }} className="col-11 my-2">

                                    <h4 className="font-weight-light">Digital Logic pre test </h4>
                                    <p className="text-muted">Passed away...</p>
                                </div>
                            </div>
                            <div className="bottom-box bg-success ripple"> Go  &nbsp;<i className="fas fa-caret-right"></i></div>
                        </div>
                        <div style={{ borderColor: "var(--secondary)" }} className="schedule-box">
                            <div style={{ fontSize: "12px" }} className="row justify-content-center">
                                <div className="col-5 "><i className="fas text-secondary fa-calendar-day"></i> 02/03/2021</div>
                                <div className="col-3 text-center"><i className="fas text-secondary fa-angle-double-right"></i> 50 Qs</div>
                                <div className="col-4 text-right"><i className="fas text-secondary fa-clock"></i> <i>30 min</i></div>

                                <div style={{ borderTop: "1px solid #80808057" }} className="col-11 my-2">

                                    <h4 className="font-weight-light">Data Structure self test Lorem, ipsum dolor sit amet consectetur adipisicing.</h4>
                                    <p className="text-muted">Missed out...</p>
                                </div>
                            </div>
                            <div className="bottom-box bg-secondary ripple"> Go  &nbsp;<i className="fas fa-caret-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import { Link } from "react-router-dom"
import React, { Component } from 'react'
import Topbar from '../../components/Topbar'
import axios from 'axios';
import { rootURL } from '../../globals/__gobal_vars';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader } from '@material-ui/core'
import { futurePastDetecter, LOADEROFF, LOADERON, timeConvert } from '../../globals/__global_funcs';
export default class SchedulledTest extends Component {
    static defaultProps = {
        topbar: true,
        limit: 50
    }
    state = {
        testList: [],
        visible: false,
        selectedItem: {}
    }
    dataFetcher = (loader) => {
        if (loader) {
            LOADERON();
        }

        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
        axios.post(rootURL + "/auth/getScheduledTests", {
            limit: this.props.limit
        }).then((res) => {
            //success
            if (res.data.status) {
                this.setState({
                    testList: res.data.data,
                })
                if (loader) {
                    LOADEROFF();
                }
            } else {
                if (loader) {
                    LOADEROFF();
                }
                console.log(res);
            }
        }).catch((err) => {
            if (loader) {
                LOADEROFF();
            }
            console.log(err);

        });

    }
    componentDidMount() {
        this.dataFetcher(true)
        // console.log(futurePastDetecter("2021-05-19", "14"));
    }
    colorDetector = (date) => {
        var dateStr = date.split(" ")[0]
        switch (futurePastDetecter(dateStr, date.split(" ")[1])) {
            case 'Upcoming today':

                return "var(--primary)"
            case 'Running':

                return "var(--success)"
            case 'Upcoming':

                return "var(--primary)"
            case 'Missed':

                return "var(--secondary)"

            default:
                break;
        }
    }
    futurePastDetecter2 = (givenDate, hours) => {
        let now = new Date();
        let date = new Date(givenDate);
        // return date.getHours();
        let [h, m, s] = hours.split(":");
        let d = new Date()
        if (date.setHours(0, 0, 0, 0) > now.setHours(0, 0, 0, 0)) {
            return "Upcoming";
        } else if (date.setHours(0, 0, 0, 0) < now.setHours(0, 0, 0, 0)) {
            return "Missed"
        } else {
            // return (parseInt(h)*60 + parseInt(m)+60 )+  " = "+ (d.getHours()*60 + d.getMinutes())
            if ((parseInt(h) * 60 + parseInt(m)) < (d.getHours() * 60 + d.getMinutes())) {
                if ((parseInt(h) * 60 + parseInt(m) + 60) > (d.getHours() * 60 + d.getMinutes())) {
                    return "Running"
                } else {
                    return "Missed"
                }
            } else {
                return "Upcoming today"

            }
        }
    }
    revealQuestions = (str) => {
        switch (str) {
            case "Running":
                return false
            case "Missed":
                return false
            default:
                return true
        }
    }
    render() {
        return (
            <div className={`${this.props.topbar ? "wrapper" : ""}`}>
                {
                    this.props.topbar ?
                        <Topbar text={<span><i className="fas fa-users"></i> SchedulledTest</span>}>
                            <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                            <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                        </Topbar> : ""

                }
                <div className="card my-3">
                    {
                        (this.state.testList.length > 0) ?
                            <div className="card-body p-2">
                                <div className="row justify-content-end">
                                    <div className="col-4">
                                        <Button onClick={() => { this.dataFetcher(true); }} color="primary"> Refresh </Button>
                                    </div>
                                </div>
                                {
                                    this.state.testList.map((item, index) => (

                                        <div key={index} style={{ borderColor: item.date ? this.colorDetector(item.date) : "var(--primary)" }} className="schedule-box">
                                            <div style={{ fontSize: "12px" }} className="row justify-content-center">
                                                <div className="col-8 "><i style={{ color: item.date ? this.colorDetector(item.date) : "var(--primary)" }} className="fas fa-calendar-day"></i> {item.date ? item.date.split(" ")[0].split("-").reverse().join("-") : ""} at {item.date ? timeConvert(item.date.split(" ")[1]) : ""}</div>
                                                <div className="col-4 text-right"><i style={{ color: item.date ? this.colorDetector(item.date) : "var(--primary)" }} className="fas fa-clock"></i> <i>{item.time ? parseInt(item.time) : ""} min</i></div>
                                                <div className="col-9 "><i style={{ color: item.date ? this.colorDetector(item.date) : "var(--primary)" }} className="fas fa-angle-double-right"></i> {item.subject.title ?? ""}</div>
                                                <div className="col-3 text-right"><i style={{ color: item.date ? this.colorDetector(item.date) : "var(--primary)" }} className="fas fa-angle-double-right"></i> {item.q_length} Qs</div>

                                                <div className="col-11 my-2">

                                                    <h4 className="font-weight-light">{item.title}</h4>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="bottom-box ">
                                                <div className="row align-items-end">
                                                    <div className="col-8">
                                                        <div className="text-muted">{item.date ? futurePastDetecter(item.date.split(" ")[0], item.date.split(" ")[1]) : ""} ...</div>
                                                    </div>
                                                    <div className="col-4">
                                                        <button disabled={item.date ? (this.revealQuestions(futurePastDetecter(item.date.split(" ")[0], item.date.split(" ")[1]))) : false} className="btn btn-block  btn-sm float-right" onClick={() => { this.setState({ visible: true, selectedItem: item }) }} style={{ borderRadius: "0", borderTopLeftRadius: "20px", cursor: "pointer", background: item.date ? this.colorDetector(item.date) : "var(--primary)", color: "white" }}  >Go  &nbsp;<i className="fas fa-caret-right"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                            :
                            <h3 className="font-weight-light text-center p-5">Sorry no tests are shedulled .</h3>
                    }
                </div>
                <Dialog
                    open={this.state.visible}
                    onClose={() => { this.setState({ visible: false }) }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Test Details"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {
                                Object.keys(this.state.selectedItem).length !== 0 ?
                                    <div className="row">
                                        <div className="col-4">Title</div>
                                        <div className="col-8">{this.state.selectedItem.title}</div>
                                        <div className="col-4">Questions</div>
                                        <div className="col-8">{this.state.selectedItem.q_length}</div>
                                        <div className="col-4">Time</div>
                                        <div className="col-8">{parseInt(this.state.selectedItem.time)} min</div>

                                    </div> : ""
                            }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { this.setState({ visible: false }) }} color="primary">
                            Close
                    </Button>
                        <Button onClick={() => { this.setState({ visible: false }); this.props.history.push("/student/test/" + this.state.selectedItem.id + "/" + (parseInt(this.state.selectedItem.time))) }} color="primary" autoFocus>
                            Start
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
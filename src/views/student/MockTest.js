import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Link, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader } from '@material-ui/core'
import React, { Component } from 'react'
import LongTopbar from '../../components/LongTopbar'
import axios from 'axios';
import { rootURL } from '../../globals/__gobal_vars';
import { LOADEROFF, LOADERON } from '../../globals/__global_funcs';
export default class MockTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            testList: [],
            visible: false,
            selectedItem : {}
        }
    }
    handleScroll = (e) => {
        this.setState({
            scrollTop: e.target.scrollTop
        })

    }
    componentDidMount() {
        LOADERON();
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
        axios.post(rootURL + "/auth/getSubjectWiseQuestionSets", {
            test_type: 1
        }).then((res) => {
            //success
            if (res.data.status) {
                this.setState({
                    testList: res.data.data,
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
    render() {
        return (
            <div>
                <div ref={this.myRef} onScroll={this.handleScroll} className="wrapper">
                    <LongTopbar collapse={this.state.scrollTop > 65} text={<span><i className="fas fa-book"></i>&nbsp;&nbsp; Mock Test</span>}>
                        <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                        <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                        <div className={`static-card-box ${this.state.scrollTop > 65 ? "static-card-box-collapse" : ""}`}>
                            <div className="row">
                                <div className="col-4">
                                    <div className="static-card">
                                        <div className="text-right"><i className="fas fa-percent text-primary"></i> &nbsp;&nbsp; </div>
                                        <p className="text-left">52%</p>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="static-card">
                                        <div className="text-right"><i className="fas fa-stopwatch text-primary"></i> &nbsp;&nbsp; </div>
                                        <p className="text-left">2:39</p>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="static-card">
                                        <div className="text-right"><i className="fas fa-pen-fancy text-primary"></i> &nbsp;&nbsp; </div>
                                        <p className="text-left">243</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </LongTopbar>

                    <div className="list-box">
                        {
                            this.state.testList.map((subject, index) => (
                                <React.Fragment key={index}>

                                    <List dense
                                        subheader={
                                            <ListSubheader component="div" id="nested-list-subheader">
                                                {subject.title}
                                            </ListSubheader>
                                        } >

                                        {
                                            (subject.question_sets.length > 0) ?
                                                subject.question_sets.map((set, i) => {

                                                    return (
                                                        <ListItem
                                                            key={i}
                                                            style={{
                                                                background: "#5c5c5c1f",
                                                                padding: "10px 15px",
                                                                margin: "5px 0"
                                                            }}
                                                            button>
                                                            <ListItemText id={`checkbox-list-secondary-label-${i}`} primary={set.title} />
                                                            <ListItemSecondaryAction>
                                                                <IconButton onClick={()=>{this.setState({visible : true , selectedItem : set})}}> <i className="fas text-primary fa-arrow-alt-circle-right"></i> </IconButton >
                                                                {/* <IconButton onClick={()=>{this.setState({visible : true , selectedItem : item})}}> <i className="fas text-success fa-check-circle"></i> </IconButton > */}
                                                            </ListItemSecondaryAction>
                                                        </ListItem>
                                                    );
                                                })
                                                :
                                                <ListItem
                                                    style={{
                                                        background: "#5c5c5c1f",
                                                        padding: "10px 15px",
                                                        margin: "5px 0"
                                                    }}
                                                    button>
                                                    <ListItemText id={`checkbox-list-secondary-label-${1}`} primary={<>{"Sorry no Question sets available ..."}<i className="fas fa-sad-tear"></i></>} />

                                                </ListItem>
                                        }
                                    </List>
                                    <Divider />
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
                <Dialog
                    open={this.state.visible}
                    onClose={()=>{this.setState({visible : false})}}
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
                                <div className="col-8">{parseInt(this.state.selectedItem.time.split(":")[0])*60 + parseInt(this.state.selectedItem.time.split(":")[1])} min</div>
                                
                            </div>: ""
                        }
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={()=>{this.setState({visible : false})}} color="primary">
                        Close
                    </Button>
                    <Button  onClick={()=>{this.setState({visible : false }); this.props.history.push("/student/test/" + this.state.selectedItem.id + "/" + (parseInt(this.state.selectedItem.time.split(":")[0])*60 + parseInt(this.state.selectedItem.time.split(":")[1]) )    )}}  color="primary" autoFocus>
                        Start
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

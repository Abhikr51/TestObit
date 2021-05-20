import React, { Component } from 'react'
import { Divider,IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader } from '@material-ui/core'
import LongTopbar from '../../components/LongTopbar'
import axios from 'axios';
import { rootURL } from '../../globals/__gobal_vars';
import { LOADEROFF, LOADERON } from '../../globals/__global_funcs';
export default class PYQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0,
            testList: [],
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
            test_type: 3
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
            <div ref={this.myRef} onScroll={this.handleScroll} className="wrapper">
                <LongTopbar collapse={this.state.scrollTop > 65} text={<span><i className="fas fa-file-invoice"></i>&nbsp;&nbsp; Past Year Questions</span>}>
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
                                                                <IconButton > <i className="fas text-primary fa-download"></i> </IconButton >
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
        )
    }
}


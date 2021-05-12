import React, { Component } from 'react'
import { Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader } from '@material-ui/core'
import { Line } from 'react-chartjs-2'
import Animate from '../../components/Animate'
import LongTopbar from '../../components/LongTopbar'
export default class SamplePaperTest extends Component {
    render() {
        return (
            <div>
                <div  className="wrapper">
                    <LongTopbar text={<span><i className="fas fa-file-invoice"></i>&nbsp;&nbsp; Sample paper test</span>}>
                        <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                        <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                        <div className="static-card-box">
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
                    <Animate>

                        <div className="list-box">
                            <List dense
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                   Subjects Wise Tests
                                </ListSubheader>
                            } >
                                {["Computer Fundamentals", "C programming", "Enviromental science","Mathematics -I"].map((value, index) => {

                                    return (
                                        <ListItem
                                            style={{
                                                background: "#5c5c5c1f",
                                                padding: "10px 15px",
                                                margin: "5px 0"
                                            }}
                                            key={index} button>
                                            <ListItemText id={`checkbox-list-secondary-label-${index}`} primary={`${index + 1}. ${value}`} />
                                            <ListItemSecondaryAction>
                                                <IconButton > <i className="fas text-primary fa-arrow-alt-circle-right"></i> </IconButton >
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    );
                                })}
                                
                            </List>
                            
                        </div>
                    </Animate>
                </div>
            </div>
        )
    }
}

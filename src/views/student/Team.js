import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Menu, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import Topbar from '../../components/Topbar'

export default class Team extends Component {
    state = {
        popperOpen: null,
        selectedMail: ""
    }
    render() {
        return (
            <div className="wrapper">
                <Topbar text={<span><i className="fas fa-users"></i> Team</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                </Topbar>
                <div className="card my-2">
                    <div className="card-body px-0">
                        <div className="col-12">
                            <ListItem style={{ paddingLeft: "4px", paddingRight: "4px" }} alignItems="flex-start">
                                <ListItemAvatar  >
                                    <Avatar style={{ height: "65px", width: "65px" }} alt="ItzABhi" src="./assets/img/abhijeet.jpeg" />
                                </ListItemAvatar>
                                <ListItemText style={{ paddingLeft: "15px" }}
                                    primary="Abhijeet Kumar"
                                    secondary={
                                        <React.Fragment>
                                            {/* <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                Frontend(React) , Backend ,Database
                                            </Typography> */}
                                            {"Frontend(React) , Backend ,Database"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                        </div>
                        <div className="col-12">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/abhi.kr.51"
                                style={{
                                    background: "#4b69b1",
                                    color: "white",
                                    borderColor: "#4b69b1"
                                }}
                                class="btn   btn-floating float-right ml-1">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Abhikr51"
                                style={{
                                    background: "#515558",
                                    color: "white",
                                    borderColor: "#515558"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-github"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abhijit-kumar-708b53192"
                                style={{
                                    background: "#0678b6",
                                    color: "white",
                                    borderColor: "#0678b6"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <button onClick={(event) => { this.setState({ popperOpen: event.currentTarget, selectedMail: "kumarisback98@gmail.com" }) }}
                                style={{
                                    background: "#d72d4e",
                                    color: "white",
                                    borderColor: "#d72d4e"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <a target="_blank" rel="noreferrer" href="https://mobile.twitter.com/Abhijit84828029"
                                style={{
                                    background: "#37b1e2",
                                    color: "white",
                                    borderColor: "#37b1e2"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card my-2">
                    <div className="card-body px-0">
                        <div className="col-12">
                            <ListItem style={{ paddingLeft: "4px", paddingRight: "4px" }} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar style={{ height: "65px", width: "65px" }} alt="ItzABhi" src="./assets/img/sneha.jpeg" />
                                </ListItemAvatar>
                                <ListItemText style={{ paddingLeft: "15px" }}
                                    primary="Sneha Agarwal"
                                    secondary={
                                        <React.Fragment>
                                            {/* <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    UI / UX ,Resourse Collection
                                                </Typography> */}
                                            {"  UI / UX ,Resourse Collection"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </div>
                        <div className="col-12">
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#4b69b1",
                                    color: "white",
                                    borderColor: "#4b69b1"
                                }}
                                class="btn   btn-floating float-right ml-1">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            {/* <a target="_blank" rel="noreferrer" href=""
                                    style={{
                                        background: "#515558",
                                        color: "white",
                                        borderColor: "#515558"
                                    }} 
                                    class="btn   btn-floating float-right mx-1">
                                        <i class="fab fa-github"></i>
                                    </a> */}
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#0678b6",
                                    color: "white",
                                    borderColor: "#0678b6"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <button onClick={(event) => { this.setState({ popperOpen: event.currentTarget, selectedMail: "snehaagarwalblp67@gmail.com" }) }}
                                style={{
                                    background: "#d72d4e",
                                    color: "white",
                                    borderColor: "#d72d4e"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#37b1e2",
                                    color: "white",
                                    borderColor: "#37b1e2"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card my-2">
                    <div className="card-body px-0">
                        <div className="col-12">
                            <ListItem style={{ paddingLeft: "4px", paddingRight: "4px" }} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar style={{ height: "65px", width: "65px" }} alt="ItzABhi" src="./assets/img/manisha.jpeg" />
                                </ListItemAvatar>
                                <ListItemText style={{ paddingLeft: "15px" }}
                                    primary="Manisha Mukherjee"
                                    secondary={
                                        <React.Fragment>
                                            {/* <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                UI / UX ,Resourse Collection
                                            </Typography> */}
                                            {"  UI / UX ,Resourse Collection"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                        </div>
                        <div className="col-12">
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#4b69b1",
                                    color: "white",
                                    borderColor: "#4b69b1"
                                }}
                                class="btn   btn-floating float-right ml-1">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            {/* <a target="_blank" rel="noreferrer" href=""
                                    style={{
                                        background: "#515558",
                                        color: "white",
                                        borderColor: "#515558"
                                    }} 
                                    class="btn   btn-floating float-right mx-1">
                                        <i class="fab fa-github"></i>
                                    </a> */}
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#0678b6",
                                    color: "white",
                                    borderColor: "#0678b6"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <button onClick={(event) => { this.setState({ popperOpen: event.currentTarget, selectedMail: "manishamukherjee973@gmail.com" }) }}
                                style={{
                                    background: "#d72d4e",
                                    color: "white",
                                    borderColor: "#d72d4e"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#37b1e2",
                                    color: "white",
                                    borderColor: "#37b1e2"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card my-2">
                    <div className="card-body px-0">
                        <div className="col-12">

                            <ListItem style={{ paddingLeft: "4px", paddingRight: "4px" }} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar style={{ height: "65px", width: "65px" }} alt="ItzABhi" src="./assets/img/soumya.jpg" />
                                </ListItemAvatar>
                                <ListItemText style={{ paddingLeft: "15px" }}
                                    primary="Soumya Daripa"
                                    secondary={
                                        <React.Fragment>
                                            {/* <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                UI / UX ,Resourse Collection
                                            </Typography> */}
                                            {"  UI / UX ,Resourse Collection"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </div>
                        <div className="col-12">
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#4b69b1",
                                    color: "white",
                                    borderColor: "#4b69b1"
                                }}
                                class="btn   btn-floating float-right ml-1">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            {/* <a target="_blank" rel="noreferrer" href="" 
                                    style={{
                                        background: "#515558",
                                        color: "white",
                                        borderColor: "#515558"
                                    }} 
                                    class="btn   btn-floating float-right mx-1">
                                        <i class="fab fa-github"></i>
                                    </a> */}
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#0678b6",
                                    color: "white",
                                    borderColor: "#0678b6"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <button onClick={(event) => { this.setState({ popperOpen: event.currentTarget, selectedMail: "No Email Provided" }) }}
                                style={{
                                    background: "#d72d4e",
                                    color: "white",
                                    borderColor: "#d72d4e"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fas fa-envelope"></i>
                            </button>
                            <a target="_blank" rel="noreferrer" href=""
                                style={{
                                    background: "#37b1e2",
                                    color: "white",
                                    borderColor: "#37b1e2"
                                }}
                                class="btn   btn-floating float-right mx-1">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.popperOpen}
                    keepMounted
                    open={Boolean(this.state.popperOpen)}
                    onClose={() => { this.setState({ popperOpen: null }) }}
                >

                    <ListItem >{this.state.selectedMail}</ListItem>
                </Menu>
            </div>
        )
    }
}
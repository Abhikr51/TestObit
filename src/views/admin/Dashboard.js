import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@material-ui/core'
import React, { Component } from 'react'
import Topbar from '../../components/Topbar'
import { LOADEROFF, LOADERON, notification } from '../../globals/__global_funcs'
import axios from 'axios';
import { imageURL, rootURL } from '../../globals/__gobal_vars';
import { connect } from "react-redux"
class Dashboard extends Component {
    state = {
        visible: false,
        authVisible: false,
        errPass: false,
        password: "",
        selectedId: null,
        usersList: [],
        givenData: {}

    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password == "" || this.state.password === null) {
            this.setState({
                errPass: true
            })
        } else {
            this.setState({ authVisible: false, errPass: false });
            LOADERON();
            axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
            axios.post(rootURL + "/auth/checkCredentials", {
                user_id: this.state.selectedId,
                password: this.state.password
            }).then((res) => {
                //success
                if (res.data.status) {
                    this.setState({
                        givenData: res.data.data,
                        password: "",
                        visible: true,
                    })
                    LOADEROFF();
                } else {
                    this.setState({
                        password: ""
                    })
                    notification(res.data.error, "error")
                    LOADEROFF();
                    console.log(res);
                }
            }).catch((err) => {
                LOADEROFF();
                console.log(err);

            })


        }
    }
    componentDidMount() {
        LOADERON();
        axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
        axios.post(rootURL + "/auth/getUserForDashboard", {}).then((res) => {
            //success
            if (res.data.status) {
                this.setState({
                    usersList: res.data.data,
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
            <div className="wrapper">
                <Topbar text={<span>&nbsp;&nbsp;&nbsp;<i className="fas fa-tachometer-alt"></i> Dashboard &nbsp;&nbsp;&nbsp;</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                </Topbar>
                <div className="container-fluid">
                    <table className="table table-bordered table-sm ">
                        <thead className="thead-dark">
                            <tr>
                                <th>id</th>
                                <th>Photo</th>
                                <th>User Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usersList.map((item, index) => (
                                    <tr key={index}>
                                        <td className="align-middle">{item.id}</td>
                                        <td className="align-middle"><Avatar style={{ height: "8vh", width: "8vh", margin: "auto" }} alt={item.name} src={(item.photo !== null)? imageURL+item.photo : "./assets/img/user.png"} /></td>
                                        <td className="align-middle">{item.name}</td>
                                        <td className="align-middle" ><button onClick={() => { this.setState({ authVisible: true, selectedId: item.id }) }} className="btn btn-primary btn-block rounded-0 m-0"><i className="fas fa-2x fa-user-shield"></i> View</button> </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Dialog open={this.state.authVisible} onClose={() => { this.setState({ authVisible: false }) }} aria-labelledby="form-dialog-title">
                    <DialogTitle style={{ width: "100%" }} id="form-dialog-title">Please Verify yourself </DialogTitle>
                    <form onSubmit={this.handleSubmit}>
                        <DialogContent>
                            <TextField
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                                value={this.state.password}
                                autoFocus
                                margin="dense"
                                id="pass"
                                label="Password"
                                type="password"
                                fullWidth
                                error={this.state.errPass}

                            />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" color="primary">
                                View
                                    </Button>
                            <Button type="button" onClick={() => { this.setState({ authVisible: false }) }} color="primary">
                                Close
                                    </Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <Dialog open={this.state.visible} onClose={() => { this.setState({ visible: false }) }} aria-labelledby="form-dialog-title">
                    <DialogTitle style={{ width: "50vw" }} id="form-dialog-title">Here is the user details</DialogTitle>
                    <form onSubmit={this.handleSubmit}>
                        <DialogContent>
                            {
                                (Object.keys(this.state.givenData).length !== 0) ?
                                    <div className="container-fluid">
                                        <div className="row justify-content-center my-3">
                                            <div className="col-9">
                                                <img width="100%" src={(this.state.givenData.photo !== null)? imageURL+this.state.givenData.photo : "./assets/img/user.png"} alt="profile image" />
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">Id</div>
                                            <div className="col-8 text-right">{this.state.givenData.id}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">Name</div>
                                            <div className="col-8 text-right">{this.state.givenData.name}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">Email</div>
                                            <div className="col-8 text-right">{this.state.givenData.email}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">Date of Birth</div>
                                            <div className="col-8 text-right">{this.state.givenData.dob}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">Semester</div>
                                            <div className="col-8 text-right">{this.state.givenData.semester}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">Stream</div>
                                            <div className="col-8 text-right">{this.state.givenData.stream}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">Session</div>
                                            <div className="col-8 text-right">{this.state.givenData.session}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">Password</div>
                                            <div className="col-8 text-right">{this.state.givenData.real_pass}</div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-4">User created at</div>
                                            <div className="col-8 text-right">{this.state.givenData.created_at}</div>
                                        </div>

                                    </div> : ""

                            }

                        </DialogContent>
                        <DialogActions>

                            <Button onClick={() => { this.setState({ visible: false }) }} color="primary">
                                Close
                                    </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        )
    }
}

export default connect(null,null)(Dashboard)
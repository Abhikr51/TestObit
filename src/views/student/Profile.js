import { Button, IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { imageURL } from '../../globals/__gobal_vars'

class Profile extends Component {
    
    render() {
        return (
            <div className="wrapper p-0">
                <div className="back"> 
                <div className="row">
                    <div className="col-3">
                        <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    </div>
                    <div className="col-6">
                        <div className="topbar-text topbar-long-text h-30"><i className="fas fa-user-circle"></i> Profile</div>
                    </div>
                    <div className="col-3">
                        <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                    </div>
                </div>
                </div>
                <div className="front-card">
                    <div className="img-avatar">
                       
                        <img src={(this.props.user.photo !== null)? imageURL+this.props.user.photo : "./assets/img/user.png"} alt="image" />
                    </div>
                    <div className="front-card-body">

                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <label  className="text-primary " onClick={()=>{this.props.history.push('/all-set/1')}} color="primary">Change picture</label>
                               
                            </div>
                            
                        </div>
                        <div className="user-name">{this.props.user.name ?? "" }</div>
                        <div className="text-muted text-center">{this.props.user.email ?? ""}</div>
                        <center><hr width="85%" /></center> 
                        <div className="row py-2">
                            <div className="col-6">Phone</div>
                            <div className="col-6 text-right">{this.props.user.phone ?? ""}</div>
                        </div>
                        <div className="row py-2">
                            <div className="col-6">Date of birth</div>
                            <div className="col-6 text-right">{this.props.user.dob ?? ""}</div>
                        </div>
                        <div className="row py-2">
                            <div className="col-6">Semester</div>
                            <div className="col-6 text-right">{this.props.user.semester_title ?? ""}</div>
                        </div>
                        <div className="row py-2">
                            <div className="col-6">Department</div>
                            <div className="col-6 text-right">{this.props.user.stream_title ?? ""}</div>
                        </div>
                        <div className="row py-2">
                            <div className="col-6">Session</div>
                            <div className="col-6 text-right">2018-2019</div>
                        </div>
                        <p className="text-muted text-center">User created at 19-2-2021</p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>(
    {
        user : state.auth.user
    }
)
export default connect(mapStateToProps,null)(Profile)
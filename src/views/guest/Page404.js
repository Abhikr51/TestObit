import { IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import Animate from '../../components/Animate'
import Topbar from '../../components/Topbar'

export default class Page404 extends Component {
    render() {
        return (
            <div>
                {/* <Topbar text={<span><i className="fas fa-sad-tear"></i> Access denied</span>}>
                    {(this.props.toggleDrawer) ?
                        <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                        : ""
                    }
                </Topbar>*/}
                <div className="wrapper">
                    basename  : {window.location.origin} <br />
                        url : {this.props.history.location.pathname}
                    <div className="container p-5">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <img width="100%" src="./assets/img/access-denied.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center">Under Development</h2>
                </div>
                not found
            </div>
        )
    }
}

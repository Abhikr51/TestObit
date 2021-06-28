import { IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import Topbar from '../../components/Topbar'

export default class Notice extends Component {
    static defaultProps = {
        topbar: true,
    }
    render() {
        return (
            <div>
                <div className={`${this.props.topbar ? "wrapper" : ""}`}>
                    {
                        this.props.topbar ?
                        <Topbar text={<span><i className="fas fa-sticky-note"></i> Notice</span>}>
                            <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                            <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                        </Topbar>: ""
                    }
                    <div className="card">
                        <h5 className="card-header font-weight-ligh">Notice</h5>
                        <div className="card-body">
                            <ul className="notice-board">
                                <li> <a target="_blank" rel="noreferrer" href="https://www.bistpurulia.org/"><span class="blink-badge">NEW</span> Admissions Open </a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.bistpurulia.org/uploads/creditcardscheme.jpeg"><span class="blink-badge">IMPORTANT</span>Notice for West Bengal Students Credit Card Scheme.</a> </li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.bistpurulia.org/uploads/regulation.jpeg"><span class="blink-badge">IMPORTANT</span> Regulation relating to Under Graduate Course of Studies and Examination.</a> </li>
                                <li>You’re braver than you believe and stronger than you seem, and smarter than you think - so follow guidelines and stay safe.</li>
                               
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

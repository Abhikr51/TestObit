import { IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import Animate from '../../components/Animate'
import Topbar from '../../components/Topbar'

export default class Notice extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <Topbar text={<span><i className="fas fa-sticky-note"></i> Notice</span>}>
                        <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                        <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                    </Topbar>
                    <div className="card">
                        <h5 className="card-header font-weight-ligh">Notice</h5>
                        <div className="card-body">
                            <ul className="notice-board">
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li> <span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum. Dolore, porro?</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li><span class="blink-badge">NEW</span>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

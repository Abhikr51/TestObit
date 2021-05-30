import { IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import Animate from '../../components/Animate'
import Topbar from '../../components/Topbar'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <Topbar text={<span><i className="fas fa-info-circle"></i> About</span>}>
                        <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                        <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                    </Topbar>
                    <div className="card">
                        <h4 className="card-header font-weight-light">Aim and Objective</h4>
                        <div className="card-body">
                            <p>
                                The tremendous popularity of using online education system could
                                never have been realized before. In this COVID-19 pendemic this become an
                                important way of learning without going or travelling another place we can continue our learnings from home.
                                That's why we approach this pattern of learning an we created a test taking hybrid mobile application as our college project named as
                                 <span className="text-primary"> BIST TestOBit</span>.
                                </p>
                            <ul>
                                <li>
                                    The scope of Test O Bit is provide support our student that make himself/herself better.
                                    </li>
                                <li>
                                    The bright future of our college students is also grows our college reputation.
                                    </li>
                                <li>
                                    We provide our app support into mobile phones that students can easily access it.
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
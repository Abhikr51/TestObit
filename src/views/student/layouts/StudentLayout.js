import { Menu, MenuItem } from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Sidebar from '../../../components/Sidebar'
import { setLogout } from '../../../redux/actions/AuthActions';
import Page404 from '../../student/Page404';
import Dashboard from '../Dashboard';

class StudentLayout extends Component {
    state = {
        open: false,
        popperOpen: null,
    }
    toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ open })
    };
    togglePopper = (event) => {

        this.setState({ popperOpen: event.currentTarget })
    };
    logout = ()=>{
        this.props.setLogout();
    }
    render() {
        return (
            // <Animate>
            <div className="">

                <Sidebar
                    toggleDrawer={this.toggleDrawer}
                    open={this.state.open}
                    path="/student" />
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.popperOpen}
                    keepMounted
                    open={Boolean(this.state.popperOpen)}
                    onClose={()=>{this.setState({popperOpen : null})}}
                >
                    
                    <MenuItem onClick={this.logout}>Logout</MenuItem>
                </Menu>
                <Switch>
                    <Route exact path="/student/dashboard" render={(p) => (<Dashboard {...p} toggleDrawer={this.toggleDrawer} togglePopper={this.togglePopper} />)} />
                    <Route render={(p) => (<Page404 {...p} toggleDrawer={this.toggleDrawer} togglePopper={this.togglePopper} />)} />
                </Switch>
            </div>
            // </Animate>
        )
    }
}
export default connect(null,{setLogout})(StudentLayout)
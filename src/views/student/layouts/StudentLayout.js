import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import Animate from '../../../components/Animate';
import Sidebar from '../../../components/Sidebar'
import Page404 from '../../guest/Page404';
import Dashboard from '../Dashboard';

export default class StudentLayout extends Component {
    state={
        open : false
    }
    toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({open})
    };
    render() {
        return (
            // <Animate>
                <div className="">
                   
                    <Sidebar 
                    toggleDrawer={this.toggleDrawer}
                    open = {this.state.open}
                    path="/student" />

                    <Switch>
                        <Route exact path="/student/dashboard" render={(p)=>( <Dashboard {...p} toggleDrawer={this.toggleDrawer} />)} />
                        <Route  render={(p)=>( <Page404 {...p} toggleDrawer={this.toggleDrawer} />)} />
                    </Switch>
                </div>
            // </Animate>
        )
    }
}

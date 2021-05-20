import { Menu, MenuItem } from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router';
import Sidebar from '../../../components/Sidebar'
import { setLogout } from '../../../redux/actions/AuthActions';
import Page404 from '../../student/Page404';
import About from '../About';
import Dashboard from '../Dashboard';
import MockTest from '../MockTest';
import Notice from '../Notice';
import PracticeTest from '../PracticeTest';
import PYQ from '../PYQ';
import PastYearTest from '../PastYearTest';
import Syllabus from '../Syllabus';
import Team from '../Team';
// import {
//     CSSTransition,
//     TransitionGroup,
// } from 'react-transition-group';
import SchedulledTest from '../SchedulledTest';
import TestCMP from '../TestCMP';
import Profile from '../Profile';
import TestResult from '../TestResult';
function StudentLayout(props) {
    const [state, setStateValue] = React.useState({
        open: false,
        popperOpen: null,
    })
    const setState = (valueObj) => {
        setStateValue({ ...state, ...valueObj })
    };
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ open })
    };
    const togglePopper = (event) => {

        setState({ popperOpen: event.currentTarget })
    };
    const logout = () => {
        props.setLogout();
    }

    const location = useLocation()
    return (
        <div className="wrapper p-0">

            <Sidebar
                toggleDrawer={toggleDrawer}
                open={state.open}
                path="/student" />
            <Menu
                id="simple-menu"
                anchorEl={state.popperOpen}
                keepMounted
                open={Boolean(state.popperOpen)}
                onClose={() => { setState({ popperOpen: null }) }}
            >

                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
            {/* <TransitionGroup>
                <CSSTransition
                    key={location.pathname}
                    timeout={1000}
                    classNames="fade"
                    
                >

                </CSSTransition>
            </TransitionGroup> */}
                    <Switch>
                        <Route path="/student/dashboard" render={(p) => (<Dashboard {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/mock-test" render={(p) => (<MockTest {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/pyq-test" render={(p) => (<PastYearTest {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/pyq" render={(p) => (<PYQ {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/practice-test" render={(p) => (<PracticeTest {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/scheduled-test" render={(p) => (<SchedulledTest {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/notice" render={(p) => (<Notice {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/syllabus" render={(p) => (<Syllabus {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/team" render={(p) => (<Team {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/test/:id/:time" render={(p) => (<TestCMP {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/test-result" render={(p) => (<TestResult {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/profile" render={(p) => (<Profile {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route path="/student/about" render={(p) => (<About {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                        <Route render={(p) => (<Page404 {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                    </Switch>
        </div>
    )
}
export default connect(null, { setLogout })(StudentLayout)
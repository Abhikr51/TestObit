import { Menu, MenuItem } from '@material-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router';
import AdminSidebar from '../../../components/AdminSidebar'
import { setLogout } from '../../../redux/actions/AuthActions';
import AddQuestionSet from '../AddQuestionSet';




function AdminLayout(props) {
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

    return (
        <div className="wrapper p-0">

            <AdminSidebar
                toggleDrawer={toggleDrawer}
                open={state.open}
                path="/admin" />
            <Menu
                id="simple-menu"
                anchorEl={state.popperOpen}
                keepMounted
                open={Boolean(state.popperOpen)}
                onClose={() => { setState({ popperOpen: null }) }}
            >

                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>

            <Switch>
                <Route path="/admin/add-question-set" render={(p) => (<AddQuestionSet {...p} toggleDrawer={toggleDrawer} togglePopper={togglePopper} />)} />
                
            </Switch>
        </div>
    )
}

export default connect(null, { setLogout })(AdminLayout)
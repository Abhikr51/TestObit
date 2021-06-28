import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar, Badge, Icon, withStyles, } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import SidebarDropdown from './SidebarDropdown';
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import { imageURL } from '../globals/__gobal_vars';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
function Sidebar(props) {
    const classes = useStyles();
    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });
    const StyledBadge = withStyles((theme) => ({
        badge: {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '3px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(5)',
            opacity: 0,
          },
        },
      }))(Badge);
    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };
    
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"

        >
            <div  className="sidenav-top">
                <div className="brand row">
                    <div className="brand-image col-4 p-1">
                        <img width="100%" src="./assets/img/only-logo-white.png" alt="" />
                    </div>
                    <div className="brand-text col-8"> 
                        <i> 
                            <span style={{
                                fontSize: "15px",

                            }} >Bist <br /></span>  
                            <span style={{
                                fontSize: "25px",

                            }} > &nbsp;&nbsp;TestOBit</span> 
                        </i>   
                    </div>
                </div>
                <Link
                onClick={props.toggleDrawer(anchor, false)}
                to="/student/profile"  className="sidenav-logo d-block">
                    {/* <img className="w-100" src="./assets/img/abhijeet.jpeg" alt="" /> */}
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"

                    >
                        <Avatar style={{height: "100%" , width: "100%"}} alt="picture" src={(props.user.photo !== null)? imageURL+props.user.photo : "./assets/img/user.png"} />
                        
                    </StyledBadge>
                </Link>
                <p className="sidenav-text text-center text-white p-1">{(props.user.name) ?? "Loading.."}</p>
                {/* <div className="d-flex justify-content-between text-white">
                    <span className="d-inline-block">
                        <i className="far fa-eye"></i> 10,652
                    </span>
                    <span className="d-inline-block">
                        <i className="fas fa-fire"></i> 1,782
                    </span>

                </div> */}
            </div>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                       General
                    </ListSubheader>
                }
            >
                {[
                    {
                        title: 'Dashboard',
                        link : "/dashboard",
                        icon: <Icon className="fas fa-tachometer-alt" />,
                        dropdown: false,
                    },
                    {
                        title: 'Mock Test',
                        link : "/mock-test",
                        icon: <Icon className="fas fa-book" />,
                        dropdown: false,
                    },
                    {
                        title: 'Practice Test',
                        link : "/practice-test",
                        icon: <Icon className="fas fa-pencil-ruler" />,
                        dropdown: false,
                    },
                    {
                        title: 'Scheduled Test',
                        link : "/scheduled-test",
                        icon: <Icon className="fas fa-book-reader" />,
                        dropdown: false,
                    },
                    {
                        title: 'Past Year Questions',
                        icon: <Icon className="fas fa-file-invoice" />,
                        dropdown: true,
                        dropItems: [
                            {
                                title: 'PYQ Test',
                                link : "/pyq-test",
                                icon: <Icon className="fas fa-circle-notch" />,
                            },
                            {
                                title: 'Past year Questions',
                                link : "/pyq",
                                icon: <Icon className="fas fa-circle-notch" />,
                            },
                           

                        ]
                    },

                ].map((item, index) => {
                    if (item.dropdown) {

                        return <SidebarDropdown
                            toggleDrawer={(props.toggleDrawer)}
                            anchor={anchor}
                            path={props.path}
                            dropItems={item.dropItems} title={item.title} index={index} icon={item.icon} />
                            

                    } else {
                        return <Link to={props.path + item.link}>
                            <ListItem
                                onClick={props.toggleDrawer(anchor, false)}
                                onKeyDown={props.toggleDrawer(anchor, false)}
                                button key={index}>
                                <ListItemIcon style={{ color: "var(--primary)" }}>{item.icon} </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>

                    }
                })}
            </List>
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Resourses
                    </ListSubheader>
                }
            >
                {[
                    {
                        title: 'Syllabus',
                        link : "/syllabus",
                        icon: <Icon className="fas fa-book-open" />,
                        dropdown: false,
                    },
                    //  {
                    //    title: 'Collegus',
                    //     link : "/collegus",
                    //     icon: <Icon className="fas fa-user-friends" />,
                    //     dropdown: false,
                    // },
                     {
                       title: 'Notice Booard',
                        link : "/notice",
                        icon: <Icon className="fas fa-sticky-note" />,
                        dropdown: false,
                    },
                     {
                       title: 'Team',
                        link : "/team",
                        icon: <Icon className="fas fa-users" />,
                        dropdown: false,
                    },
                     {
                       title: 'About Us',
                        link : "/about",
                        icon: <Icon className="fas fa-info-circle" />,
                        dropdown: false,
                    },
                    

                ].map((item, index) => {
                    if (item.dropdown) {

                        return <SidebarDropdown
                            toggleDrawer={(props.toggleDrawer)}
                            anchor={anchor}
                            path={props.path}
                            dropItems={item.dropItems} title={item.title} index={index} icon={item.icon} />
                            

                    } else {
                        return <Link to={props.path + item.link}>
                            <ListItem
                                onClick={props.toggleDrawer(anchor, false)}
                                onKeyDown={props.toggleDrawer(anchor, false)}
                                button key={index}>
                                <ListItemIcon style={{ color: "var(--primary)" }}>{item.icon} </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </Link>

                    }
                })}
            </List>
        </div>
    );

    return (
        <div>
                <React.Fragment key={'left'}>
                    {/* <Button onClick={props.toggleDrawer('left', true)}>{'left'}</Button> */}
                    <SwipeableDrawer
                        anchor={'left'}
                        open={props.open}
                        onClose={props.toggleDrawer('left', false)}
                        onOpen={props.toggleDrawer('left', true)}
                    >
                        {list('left')}
                    </SwipeableDrawer>
                </React.Fragment>

        </div>
    );
}

const mapStateToProps = (state) => ({
    user : state.auth.user
})

export default connect(mapStateToProps,null)(Sidebar)
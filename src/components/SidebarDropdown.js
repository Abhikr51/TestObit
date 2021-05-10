import React from 'react'
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { List } from '@material-ui/core';
import { Link } from 'react-router-dom';
export default function SidebarDropdown(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <ListItem button onClick={handleClick}>            
                    <ListItemIcon style={{ color: "var(--primary)" }}>{props.icon} </ListItemIcon>
                    <ListItemText primary={props.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        props.dropItems.map((dropItem, dropIndex) => (
                            <Link to={props.path + dropItem.link}>
                                <ListItem 
                                onClick={props.toggleDrawer(props.anchor, false)}
                                onKeyDown={props.toggleDrawer(props.anchor, false)}
                                button key={dropIndex}>
                                    <ListItemIcon style={{ color: "var(--primary)" }}>{dropItem.icon} </ListItemIcon>
                                    <ListItemText primary={dropItem.title} />
                                </ListItem>
                            </Link> 
                        ))
                    }

                </List>
            </Collapse>
        </div>
    )
}

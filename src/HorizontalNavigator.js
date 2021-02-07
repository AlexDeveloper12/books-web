import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FaHome, FaSearch, FaCog, FaSignOutAlt } from 'react-icons/fa';

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
};


const HorizontalNavigator = ({ logout }) => {
    return (
        <List style={flexContainer}>
            <ListItem> <ListItemText style={{ color: 'white' }}> <a href="/" style={{ textDecoration: 'none' }}>Home</a>  <FaHome style={{ color: 'white' }} /> </ListItemText> </ListItem>
            <ListItem><ListItemText> <a href="/search" style={{ textDecoration: 'none' }}>Search</a>  <FaSearch /> </ListItemText></ListItem>
            <ListItem><ListItemText> <a href="/profile" style={{ textDecoration: 'none' }}>Settings</a>  <FaCog /> </ListItemText></ListItem>

            <ListItem ><ListItemText> <a href="" onClick={logout} style={{ textDecoration: 'none' }} >Logout</a> <FaSignOutAlt /> </ListItemText></ListItem>
        </List>
    )
}

export default HorizontalNavigator;
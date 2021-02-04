import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {FaHome,FaSearch,FaCog} from 'react-icons/fa';

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
};


const HorizontalNavigator = () => {
    return (
        <List style={flexContainer}>
            <ListItem style={{backgroundColor:'red'}} > <ListItemText style={{color:'white'}}>Home <FaHome style={{color:'white'}} /> </ListItemText> </ListItem>
            <ListItem><ListItemText>Search <FaSearch/> </ListItemText></ListItem>
            <ListItem><ListItemText>Settings <FaCog/> </ListItemText></ListItem>
        </List>
    )
}

export default HorizontalNavigator;
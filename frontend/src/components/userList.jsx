import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const UserList = ({ data }) => {
    
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map((value) => (
                <ListItem
                key={value.key}
                disableGutters>
                <ListItemText primary={`username: ${value.username}`} />
                </ListItem> 
            ))}
        </List>
    )
}

export default UserList;
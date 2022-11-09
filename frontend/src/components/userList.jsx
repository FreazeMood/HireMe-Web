import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const UserList = ({ data }) => {
    console.log(data)
    
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map((value) => (
                <ListItem
                key={value._id}
                disableGutters>
                <ListItemText primary={`name: ${value.name} lastname: ${value.lastname}`} />
                </ListItem> 
            ))}
        </List>
    )
}

export default UserList;
import React from 'react';
import {
    AppBar,
    ToolBar,
    Typography,
} from '@material-ui/core';

const AppHeader = () => {
    <AppBar position="stactic">
        <ToolBar>
            <Typography variant="h6" color="inherit">
                My React App
            </Typography>
        </ToolBar>
    </AppBar>
};

export default AppHeader;
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { FunctionComponent } from 'react';
import DriverIcon from '@material-ui/icons/DriveEta';
import { Typography } from '@material-ui/core';

export const Navbar: FunctionComponent = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <DriverIcon />
        </IconButton>
        <Typography variant='h6'>Code Delivery</Typography>
      </Toolbar>
    </AppBar>
  );
};

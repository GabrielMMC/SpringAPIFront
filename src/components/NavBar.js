import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <div className="d-flex justify-content-center">
            <NavLink to='/course/list' className='text-white mx-3' style={{ textDecoration: 'none' }}><Typography>CURSOS</Typography></NavLink>
            <NavLink to='/teacher/list' className='text-white mx-3' style={{ textDecoration: 'none' }}><Typography>PROFESSORES</Typography></NavLink>
            <NavLink to='/teacher_course/list' className='text-white mx-3' style={{ textDecoration: 'none' }}><Typography>AULAS</Typography></NavLink>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
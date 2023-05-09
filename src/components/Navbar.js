import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'left'}>
            Blog App
          </Typography>
          <Button link href='/' color="inherit">Home</Button>
          <Button link href='/add' color="inherit">Add Blog</Button>

        </Toolbar>
      </AppBar>
    </Box>
		</div>
	)
}

export default Navbar

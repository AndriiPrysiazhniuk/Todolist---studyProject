 import React from 'react';
 import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from '@material-ui/core';
 import {Menu} from '@material-ui/icons';

 export const HeaderAppBar = () => {
     return (
         <Box sx={{flexGrow: 1}}>
             <AppBar position="static">
                 <Container style={{display:'flex', justifyContent:'space-between'}}>
                     <Toolbar>
                         <IconButton
                             size="medium"
                             edge="start"
                             color="inherit"
                             aria-label="menu"
                             //sx={{ mr: 2 }}
                         >
                             <Menu/>
                         </IconButton>
                         <Typography variant="h6"
                                     component="div"
                                  //  sx={{flexGrow: 1}}
                         >
                             News
                         </Typography>
                     </Toolbar>
                         <Button color="inherit">Login</Button>
                 </Container>
             </AppBar>
         </Box>
     );
 };


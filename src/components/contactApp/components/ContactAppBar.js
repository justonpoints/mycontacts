import React from 'react';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ContactDrawer from 'components/contactApp/components/ContactDrawer';


//create element
const ContactAppBar = (props) => {

    var notes = <div>
      <p>The AppBar should be present and at the top of every view</p>
      <p>The AppBar contains the tile of the current view</p>
    </div>

    let loggedin = true
    if(props.loggedin === false){loggedin = false}


    return (
      <AppBar position="fixed">
         <Toolbar>
          {loggedin ? <ContactDrawer/> : null}
           <div style={{flexGrow:1}}>
            <Typography variant="h6">
              My Contacts
              </Typography>
           </div>
           {loggedin ? (<div>
              <Button color="inherit">Myself</Button>
              <Button color="inherit">Logout</Button>
           </div>) : null }
         </Toolbar>
       </AppBar>
    )
}

export default ContactAppBar;

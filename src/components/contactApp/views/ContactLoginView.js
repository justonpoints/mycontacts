import React from 'react';

//Material UI
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


import NotesDrawer from 'components/design/NotesDrawer'
import ContactAppBar from 'components/contactApp/components/ContactAppBar';
import ContactLoginForm from 'components/contactApp/components/ContactLoginForm';


//create element
const ContactListView = (props) => {

    return (
      <div>
        <ContactAppBar loggedin={false} />
        <div style={{marginTop:120}}></div>
        <ContactLoginForm/>
      </div>
    )
}

export default ContactListView;

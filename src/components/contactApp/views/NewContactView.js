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
import NewContactForm from 'components/contactApp/components/NewContactForm';

//create element
const NewContact = (props) => {

    return (
      <div>
        <ContactAppBar/>
        <div style={{marginTop:90}}></div>
        <NewContactForm/>
      </div>
    )
}

export default NewContact;

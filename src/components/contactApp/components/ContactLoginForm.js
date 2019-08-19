import React from 'react';

import { NavLink } from 'react-router-dom';

//Material UI
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import NewContactButton from 'components/contactApp/components/NewContactButton';

const ContactLoginForm = (props) => {

    return (
      <div>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item style={{width:"80%",height:"80%"}}>
          <Paper component="form">
            <Grid spacing={5} container direction="column" justify="center" alignItems="center" >
              <Grid item>
                <Typography variant="body1">Login into the MyContacts App </Typography>
              </Grid>
              <Grid style={{width:"70%"}} item>
                <TextField fullWidth autoFocus required id="username" label="Username" name="username" placeholder="Username"/>
              </Grid>
              <Grid style={{width:"70%"}} item>
                <TextField fullWidth type="password" required id="password" label="Password" name="password" placeholder="Password"/>
              </Grid>
              <Grid style={{marginTop:10}}item>
                <Button style={{width:'100%'}} size="medium" type="submit" variant="contained" color="primary">Login</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      </div>
    )
}

export default ContactLoginForm;

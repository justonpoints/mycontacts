import React from 'react';

import { NavLink } from 'react-router-dom';

//Material UI
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';


import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';

import OUTextField from 'components/OUTextField';

const NewContactForm = (props) => {

    const [values, setValues] = React.useState({
     firstname:"",
     lastname:"",
     company:""
    });
    let error = false;
    console.log(values);

    function handleChange(event) {
      console.log(event.target.name);
      var change = {...values};
      change[event.target.name] = event.target.value;
      setValues(change);
    }

    function nameFormat(){
      let first = values.firstname
      let last = values.lastname;
      let company = values.company;
      if(first !== "" && last !== ""){
        error = false;
        return `${last}, ${first}`
      }
      else if(first !== "" && last === ""){
        error = false;
        return `${first}`
      }
      else if(first === "" && last !== ""){
        error = false;
        return `${last}`
      }
      else if(first === "" && last === "" && company !== ""){
        error = false;
        return `${company}`
      }
      else{
        error = true;
        return `(Please insert a first, last, or company name)`
      }
    }

    return (
      <Paper style={{width:"100%",maxWidth:1000,margin:"auto",padding:10}} component="form" id="contact-form">
        <Typography variant="h6">Create Contact :  {nameFormat()}</Typography>
        <Grid style={{padding:20,width:'100%'}} spacing={2} container justify="center" alignItems="center" direction="column">
          <Grid item style={{width:"100%",maxWidth:800}}>
              <Typography variant="subtitle1">Contact Name</Typography>
              <div style={{marginTop:5}}>
                <TextField onChange={e => handleChange(e)} required={error} label="First Name" style={{width:"100%",marginBottom:8}} variant="outlined" name="firstname" />
                <br/>
                <TextField onChange={e => handleChange(e)} required={error} label="Last Name" style={{width:"100%",marginBottom:8}} variant="outlined" name="lastname" />
              </div>
          </Grid>
          <Grid item style={{width:"100%",maxWidth:800}}>
              <Typography variant="subtitle1">Professional Information</Typography>
              <div style={{marginTop:5}}>
                <TextField onChange={e => handleChange(e)} required={error} label="Company Name" style={{width:"100%",marginBottom:5}} variant="outlined" name="company" />
                <br/>
                <TextField label="Title" style={{width:"100%",marginBottom:5}} variant="outlined" name="title" />
              </div>
          </Grid>
          <Grid item style={{width:"100%",maxWidth:1000}}>
              <Divider/>
          </Grid>
          <Grid item style={{width:"100%",maxWidth:800}}>
              <Typography variant="subtitle1">Contact Information</Typography>
              <div style={{marginTop:5}}>
                <br/>
                <TextField label="Street" style={{width:"100%",marginBottom:5}} variant="outlined" name="street" />
                <br/>
                <TextField label="City" style={{width:"100%",marginBottom:5}} variant="outlined" name="city" />
                <br/>
                <TextField label="State" style={{width:"50%",marginBottom:5}} variant="outlined" name="state" />
                <TextField label="Zip" style={{width:"50%",marginBottom:5}} variant="outlined" name="zip" />
              </div>
          </Grid>
          <Grid item style={{width:"100%",maxWidth:800}}>
                <TextField label="Phone" style={{width:"100%",marginBottom:5}} variant="outlined" name="phone" />
                <TextField label="Email" style={{width:"100%",marginBottom:5}} variant="outlined" name="email" />
          </Grid>
          <Grid item style={{width:"100%"}}>
            <div style={{float:"right"}}>
              <Button variant="contained" color="secondary">Cancel</Button>
              <span>   </span>
              <Button variant="contained" color="primary">Save</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
}

export default NewContactForm;

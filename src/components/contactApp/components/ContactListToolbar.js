import React from 'react';

import { NavLink } from 'react-router-dom';

//Material UI
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';



import NewContactButton from 'components/contactApp/components/NewContactButton';
import ContactSearchModal from 'components/contactApp/components/ContactSearchModal';
import ContactSaveListModal from 'components/contactApp/components/ContactSaveListModal';




const AdapterLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const ContactListToolbar = (props) => {

    let total = props.total || 5
    let subtitle = props.subtitle || "";
    let search = props.search || null;

    return (
      <div style={{backgroundColor:"white"}}>
      <Toolbar style={{paddingBottom:5}}>
        <div style={{flexGrow:2}}>
        <Typography variant="h6">
          {subtitle ?  `Pizza (${total})`: `All Contacts (${total})`}
        </Typography>
        {search ? <Typography variant="subtitle">
          {search}
        </Typography> : null}
        </div>
        <div>
        <Grid spacing={2} justify="flex-end" alignItems="flex-end" container>
          <Grid item>
            <NewContactButton/>
          </Grid>
          <Grid item>
            <ContactSearchModal/>
          </Grid>
          <Grid item>
            <ContactSaveListModal existing={subtitle} />
          </Grid>
          <Grid item>
            <TextField id="filter" label="Filter by name" name="filter" placeholder="Filter by name"/>
          </Grid>
        </Grid>
        </div>
        <hr/>
      </Toolbar>
      </div>
    )
}

export default ContactListToolbar;

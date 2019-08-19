import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



import Selector from 'components/OUSelector';



const SearchModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Tooltip title="search contacts"><IconButton onClick={handleClickOpen}><SearchIcon /></IconButton></Tooltip>
      <Dialog fullWidth={true} fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="contact-search">
        <DialogTitle id="contact-search-modal">Search Contacts</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use the following form to sort and filter your contacts.
          </DialogContentText>
          <Typography style={{margin:5}} variant="h6">Sort</Typography>
          <p>
          <Selector name="sort-by" label="Sort By" style={{width:"70%"}} selected={"display_name"}
            options={[
              {value:"display_name",label:"Display Name"},
              {value:"phone",label:"Phone"},
              {value:"email",label:"Email"},
              {value:"display_address",label:"Address"},
              {value:"tags",label:"Tag"},
            ]}
          />
          <Selector style={{width:"30%"}} name="sort-direction" label="Sort Direction" selected={"asc"}
            options={[
              {value:"asc",label:"A-Z"},
              {value:"dsc",label:"Z-A"}
            ]}
          />
          </p>
          <Typography variant="h5">Filter<div style={{float:"right"}}><IconButton><AddCircleIcon color="secondary"/></IconButton></div></Typography>
          <p>
          <br/>
          <Selector name="filter-by-1" label="Filter By" style={{width:"40%"}} selected={""}
            options={[
              {value:"",label:""},
              {value:"display_name",label:"Display Name"},
              {value:"phone",label:"Phone"},
              {value:"email",label:"Email"},
              {value:"display_address",label:"Address"},
              {value:"tags",label:"Tag"},
            ]}
          />
          <TextField label="Filter Value" style={{width:"60%"}} variant="outlined" name="filter" />
          </p>
          <p><hr/></p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SearchModal;

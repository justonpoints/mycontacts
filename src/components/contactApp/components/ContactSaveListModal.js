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
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';


import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';



import Selector from 'components/OUSelector';



const SearchModal = (props) => {
  const [openRemove, setOpenRemove] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const theme = useTheme();
  let existing = props.existing || false
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));;

  function handleOpenRemove() {
    setOpenRemove(true);
  }

  function handleOpenAdd() {
    setOpenAdd(true);
  }

  function handleCloseRemove() {
    setOpenRemove(false);
  }

  function handleCloseAdd() {
    setOpenAdd(false);
  }

  return (
    <div>
      {existing ? <Tooltip title="remove saved list"><IconButton onClick={handleOpenRemove}><StarIcon /></IconButton></Tooltip> :
                  <Tooltip title="add saved list"><IconButton onClick={handleOpenAdd}><StarBorderIcon /></IconButton></Tooltip>
      }
      <Dialog fullWidth={true} fullScreen={fullScreen} open={openRemove} onClose={handleCloseRemove} aria-labelledby="contact-search">
        <DialogTitle id="remove-list-view">Remove List View</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Remove the following list view, "List Name"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRemove} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCloseRemove} variant="contained" color="primary">
            Remove
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth={true} fullScreen={fullScreen} open={openAdd} onClose={handleCloseAdd} aria-labelledby="contact-search">
        <DialogTitle id="add-list-modal">Save List View</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Save the current list view, and add an option to the navigation menu?
          </DialogContentText>
          <TextField label="View Name" style={{width:"60%"}} variant="outlined" name="viewname" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCloseAdd} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SearchModal;

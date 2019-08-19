import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

//Components
import PreviewListForContact from 'components/contactApp/preview/PreviewList'

//Styling
const useStyles = makeStyles(theme => ({
  root: {},
  drawerPaper: {
    width: '100%',
    padding:5,
    [theme.breakpoints.down('sm')]: {
     width: '98%'
   }
 },
}));

//create element
const NotesDrawer = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = React.useState(false);

    function toggleDrawer(){
      if(openDrawer === false){
        setOpenDrawer(true);
      }
      else{
        setOpenDrawer(false);
      }
    }


    return (
      <div>
      <Fab style={{position:"fixed",zIndex:100,left:'50%',bottom:10}} onClick={toggleDrawer} color="secondary" aria-label="menu">
        notes
      </Fab>
      <Drawer
        open={openDrawer}
        anchor="bottom"
        variant="persistent"
        classes={{
             paper: classes.drawerPaper,
           }}
      >
        <Button color="primary" onClick={toggleDrawer} >Close Notes Menu</Button>
        <Divider/>
        <div style={{margin: "auto"}}>
          {props.children ? props.children : <p>There are no notes</p>}
        </div>
      </Drawer>
      </div>
    )
}

export default NotesDrawer;

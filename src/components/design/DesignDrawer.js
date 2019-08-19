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
    width: 250,
    [theme.breakpoints.down('sm')]: {
     width: '98%'
   }
 },
}));

//create element
const DesignDrawer = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = React.useState(true);

    function toggleDrawer(){
      if(openDrawer === false){
        setOpenDrawer(true);
        console.log(openDrawer);
      }
      else{
        setOpenDrawer(false);
        console.log(openDrawer);
      }
    }

    return (
      <div>
      <Fab style={{position:"fixed",zIndex:100,right:0,top:"50%"}} onClick={toggleDrawer} color="secondary" aria-label="menu">
        menu
      </Fab>
      <Drawer
        open={openDrawer}
        onClick={toggleDrawer}
        anchor="right"
        variant="persistent"
        classes={{
             paper: classes.drawerPaper,
           }}
      >
        <Button color="primary" onClick={toggleDrawer} >Close Design Menu</Button>
        <Divider/>
        <PreviewListForContact/>
      </Drawer>
      </div>
    )
}

export default DesignDrawer;

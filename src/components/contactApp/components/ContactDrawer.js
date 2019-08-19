import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';



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
    const [openDrawer, setOpenDrawer] = React.useState(false);

    function toggleDrawer(){
      if(openDrawer === false){
        setOpenDrawer(true);
      }
      else{
        setOpenDrawer(false);
      }
    }

    function closeDrawer(){
        setOpenDrawer(false);
    }


    return (
      <div>
      <Button color="inherit" onClick={toggleDrawer}><MenuIcon /></Button>
      <Drawer
        open={openDrawer}
        onClose={closeDrawer}
        onClick={closeDrawer}
        anchor="left"
        classes={{
             paper: classes.drawerPaper,
           }}
      >
      <List component="div" subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Main Menu
        </ListSubheader>
      }>
      <Divider/>
          <ListItem button key={0}>
            <ListItemText primary={"All Contacts"} />
          </ListItem>
          <ListItem button key={0}>
            <ListItemText primary={"New Contact"} />
          </ListItem>
          <ListItem button key={0}>
            <ListItemText primary={"Settings"} />
          </ListItem>
          <Divider/>
      </List>
          <List component="div" subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Saved Views
            </ListSubheader>
          }>
          <Divider/>
          <ListItem button key={2}>
            <ListItemText primary={"Omniupdate Contacts"} />
          </ListItem>
          <ListItem button key={3}>
            <ListItemText primary={"Pizza"} />
          </ListItem>
       </List>
       <Divider/>
      </Drawer>
      </div>
    )
}

export default DesignDrawer;

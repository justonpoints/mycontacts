import React from 'react';

//router
import { NavLink } from 'react-router-dom';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

//Create a component to handle the link
const AdapterLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const useStyles = makeStyles(theme => ({
  active: {
    borderLeft:"solid",
    backgroundColor:"lightcyan"
  }
}));

const ListItemLink = (props) => {

    const classes = useStyles();

    return (
        <ListItem button activeClassName={classes.active} component={AdapterLink} {...props} />
    )
}

export default ListItemLink;

import React from 'react';

import { NavLink } from 'react-router-dom';

//Material UI
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';


const AdapterLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const NewContactButton = (props) => {

    let to = props.to || '/contacts/preview/contact-new-view';

    return (
      <Tooltip title="create contact">
        <IconButton color="default" to={to} component={AdapterLink}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    )
}

export default NewContactButton;

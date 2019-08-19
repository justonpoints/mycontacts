import React from 'react';

//Material UI
import Grid from '@material-ui/core/Grid';


//create element
const DesignPreviewLayout = (props) => {
    return (
      <Grid container justify="center" style={{height:'50vh'}} alignItems="center">
        <Grid item>
          {props.children}
        </Grid>
      </Grid>
    )
}

export default DesignPreviewLayout;

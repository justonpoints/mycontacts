import React from 'react';

//Material UI
import Button from '@material-ui/core/Button';


//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactAppBar from 'components/contactApp/components/ContactAppBar';
import NotesDrawer from 'components/design/NotesDrawer'


//create element
const PreviewAppbar = (props) => {
    const [loggedin, setloggedin] = React.useState(true);

    var notes = <div>
      <p>The AppBar should be present and at the top of every view</p>
      <p>The AppBar contains the tile of the current view</p>
    </div>

    function toogleLoggedIn(){
      if(loggedin){
        setloggedin(false);
      }
      else{
        setloggedin(true);
      }
    }

    return (
      <div>
        <ContactAppBar loggedin={loggedin} />
        <DesignPreviewLayout>
          <Button variant="contained" color="primary" onClick={toogleLoggedIn}>Toggle Login State</Button>
          <p>Logged in : {`${loggedin}`}</p>
        </DesignPreviewLayout>
        <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewAppbar;

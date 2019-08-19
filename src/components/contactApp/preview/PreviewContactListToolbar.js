import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactListToolbar from 'components/contactApp/components/ContactListToolbar';
import NotesDrawer from 'components/design/NotesDrawer'

//create element
const PreviewContactListToolbar = (props) => {
    var notes = <div>
      <p>The title contains the number of contacts in the current contact list</p>
      <p>A filter text field is provided. It allows the user to filter by display name</p>
      <p>A search icon button is provided. Clicking on it open a search modal</p>
      <p>A new contact button is provided. Clicking on it takes the user to the new contact view</p>
    </div>


    return (
      <div>
      <h1>Contact List Toolbar</h1>
      <DesignPreviewLayout>
        <div style={{width:"120%"}}>
        <ContactListToolbar/>
        </div>
        <div style={{width:400}}>
        <p>width 400</p>
        <ContactListToolbar/>
        </div>
      </DesignPreviewLayout>
      <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactListToolbar;

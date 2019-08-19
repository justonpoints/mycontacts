import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactDrawer from 'components/contactApp/components/ContactDrawer';
import NotesDrawer from 'components/design/NotesDrawer'

//create element
const PreviewContactDrawer = (props) => {
    var notes = <div>
      <p>To Do: Figure this out. Current design to get the point across</p>
    </div>

    return (
      <div>
      <h1>Contact Drawer</h1>
      <DesignPreviewLayout>
        <ContactDrawer/>
        <p>Click to open the navigation drawer</p>
      </DesignPreviewLayout>
      <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactDrawer;

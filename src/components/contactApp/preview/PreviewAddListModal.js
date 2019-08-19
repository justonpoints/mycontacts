import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactSaveListModal from 'components/contactApp/components/ContactSaveListModal';
import NotesDrawer from 'components/design/NotesDrawer'

//create element
const PreviewContactSearchModal = (props) => {
    var notes = <div>
    </div>

    return (
      <div>
      <h1>Contact Search Modal</h1>
      <DesignPreviewLayout>
          <ContactSaveListModal/>
          <p>Empty star means the current search is not saved to a view</p>
          <p>Click to open the save list modal</p>
          <ContactSaveListModal existing={true}/>
          <p>A Filled star means the current search is already saved to a view.</p>
          <p>Click to open the remove saved list modal</p>
      </DesignPreviewLayout>
      <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactSearchModal;

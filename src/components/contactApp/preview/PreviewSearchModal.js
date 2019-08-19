import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactSearchModal from 'components/contactApp/components/ContactSearchModal';
import NotesDrawer from 'components/design/NotesDrawer'

//create element
const PreviewContactSearchModal = (props) => {
    var notes = <div>
    </div>

    return (
      <div>
      <h1>Contact Search Modal</h1>
      <DesignPreviewLayout>
          <ContactSearchModal/>
          <p>Click to open the search modal</p>
      </DesignPreviewLayout>
      <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactSearchModal;

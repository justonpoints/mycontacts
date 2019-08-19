import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactDeleteModal from 'components/contactApp/components/ContactDeleteModal';
import NotesDrawer from 'components/design/NotesDrawer'

//create element
const PreviewContactSearchModal = (props) => {
    var notes = <div>
    </div>

    return (
      <div>
      <h1>Contact Search Modal</h1>
      <DesignPreviewLayout>
          <ContactDeleteModal contact="Test Contact" />
      </DesignPreviewLayout>
      <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactSearchModal;

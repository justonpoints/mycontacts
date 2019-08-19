import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import NewContactButton from 'components/contactApp/components/NewContactButton';
import NotesDrawer from 'components/design/NotesDrawer'

//create element
const PreviewContactCard = (props) => {
    var notes = <div></div>

    return (
      <div>
      <DesignPreviewLayout>
        <NewContactButton/>
        <p>When button is clicked take user to the New Contact view</p>
      </DesignPreviewLayout>
      <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactCard;

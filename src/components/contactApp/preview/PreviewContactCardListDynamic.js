import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactCardList from 'components/contactApp/components/ContactCardListDynamic';
import NotesDrawer from 'components/design/NotesDrawer'

//create element
const PreviewContactCardList = (props) => {
    var notes = <div>
      <p>To Do: Add filter and sorting logic</p>
    </div>

    return (
      <div>
      <h1>Contact Card List</h1>
      <DesignPreviewLayout>
        <ContactCardList/>
      </DesignPreviewLayout>
      <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactCardList;

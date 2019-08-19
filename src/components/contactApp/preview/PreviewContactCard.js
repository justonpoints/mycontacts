import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactCard from 'components/contactApp/components/ContactCard';
import NotesDrawer from 'components/design/NotesDrawer'

//create element
const PreviewContactCard = (props) => {
    var notes = <div>
      <p>Contact cards can be expanded and collapsed to reveal the contact information</p>
      <p>If the contact has a phone or email, then a phone or email icon button is provided</p>
      <p>Each card contains a delete and edit icon button</p>
    </div>

    return (
      <div>
      <h1>Contact Card</h1>
      <DesignPreviewLayout>
        <div style={{width:400}}>
          <p>Width 400</p>
          <ContactCard/>
        </div>
        <br/>
        <div style={{width:"100%"}}>
          <ContactCard/>
        </div>
      </DesignPreviewLayout>
      <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactCard;

import React from 'react';

//Material UI


//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import NewContactForm from 'components/contactApp/components/NewContactForm';
import NotesDrawer from 'components/design/NotesDrawer'


//create element
const PreviewNewContactForm = (props) => {
    var notes = <div>
      <p>To do : Add validation states</p>
      <p>I do not like the desktop view, need to rethink, but out of time</p>
    </div>

    return (
      <div>
        <h1>New Contact Form</h1>
        <NewContactForm/>
        <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewNewContactForm;

import React from 'react';

//Material UI


//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactLoginForm from 'components/contactApp/components/ContactLoginForm';
import NotesDrawer from 'components/design/NotesDrawer'


//create element
const PreviewContactLoginForm = (props) => {
    var notes = <div>
      <p>To do : Add validation states</p>
    </div>

    return (
      <div>
        <h1>Login Form</h1>
        <ContactLoginForm/>
        <NotesDrawer children={notes} />
      </div>
    )
}

export default PreviewContactLoginForm;

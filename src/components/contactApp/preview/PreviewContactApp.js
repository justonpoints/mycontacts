import React from 'react';

//Material UI

//Components
import DesignPreviewLayout from 'components/design/DesignPreviewLayout';
import ContactAppBar from './PreviewContactAppBar';
import ContactCard from './PreviewContactCard';
import ContactCardDynamic from './PreviewContactCardDynamic';

import NewContactButton from './PreviewNewContactButton';
import ContactCardList from './PreviewContactCardList';
import ContactCardListDynamic from './PreviewContactCardListDynamic';
import ContactListToolbar from './PreviewContactListToolbar';
import ContactLoginForm from './PreviewContactLoginForm';
import NewContactForm from './PreviewNewContactForm';
import ContactSearchModal from './PreviewSearchModal';
import ContactDrawer from './PreviewContactDrawer';
import ContactAddListModal from './PreviewAddListModal';
import ContactDeleteModal from './PreviewContactDeleteModal';




import ContactListView from 'components/contactApp/views/ContactListView';
import ContactListView2 from 'components/contactApp/views/ContactListView2';
import ContactListView3 from 'components/contactApp/views/ContactListView3';
import ContactListView4 from 'components/contactApp/views/ContactListView4';
import ContactListView5 from 'components/contactApp/views/ContactListView5';
import ContactLoginView from 'components/contactApp/views/ContactLoginView';
import NewContactView from 'components/contactApp/views/NewContactView';
import NewContactViewSimple from 'components/contactApp/views/NewContactViewSimple';


//create element
const PreviewContactApp = (props) => {
    console.log(props.match.params.element);
    let element = props.match.params.element || "";

    function renderElement(){
      switch(element){
        case 'appbar':
          return <ContactAppBar />
        case 'new-contact-button':
          return <NewContactButton/>
        case 'contact-card':
          return <ContactCard/>
        case 'contact-card-dynamic':
          return <ContactCardDynamic/>
        case 'contact-card-list':
          return <ContactCardList/>
        case 'contact-card-list-dynamic':
          return <ContactCardListDynamic/>
        case 'contact-list-view':
          return <ContactListView/>
        case 'contact-list-view2':
          return <ContactListView2/>
        case 'contact-list-view3':
          return <ContactListView3/>
        case 'contact-list-view4':
          return <ContactListView4/>
        case 'contact-list-view5':
          return <ContactListView5/>
        case 'contact-login-view':
          return <ContactLoginView/>
        case 'contact-new-view':
          return <NewContactView/>
        case 'contact-list-toolbar':
          return <ContactListToolbar/>
        case 'contact-login-form':
          return <ContactLoginForm/>
        case 'new-contact-form':
          return <NewContactForm/>
        case 'search-modal':
          return <ContactSearchModal/>
        case 'contact-navigation':
          return <ContactDrawer/>
        case 'contact-new-view-simple':
          return <NewContactViewSimple/>
        case 'contact-add-list-modal':
          return <ContactAddListModal/>
        case 'contact-delete-modal':
          return <ContactDeleteModal/>
        default:
          return <DesignPreviewLayout><p>{`No element for the key ${element}`} </p></DesignPreviewLayout>
      }
    }

    return (
      <div>
        {renderElement()}
      </div>
    )
}

export default PreviewContactApp;

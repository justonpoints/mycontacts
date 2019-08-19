import React from 'react';

//Material UI
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';


import NotesDrawer from 'components/design/NotesDrawer'
import ContactAppBar from 'components/contactApp/components/ContactAppBar';
import ContactCardList from 'components/contactApp/components/ContactCardList';
import ContactListToolbar from 'components/contactApp/components/ContactListToolbar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import contactData from 'components/contactApp/testData/contactDataPizza';
import {stableSort,getSorting} from 'components/contactApp/dataManipulation';


//create element
const ContactListView2 = (props) => {

    let data = stableSort(contactData,getSorting("asc","display_name"));
    console.log(data)

    return (
      <div>
        <ContactAppBar/>
        <div style={{height:60}}></div>
        <ContactListToolbar subtitle="Pizza" existing={true} total={data.length} />
        <div style={{marginTop:5,overflowY:"auto",height:"75vh"}}>
          <ContactCardList data={data} />
        </div>
      </div>
    )
}

export default ContactListView2;

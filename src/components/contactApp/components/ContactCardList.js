import React from 'react';

//Material UI
import Grid from '@material-ui/core/Grid';

import NotesDrawer from 'components/design/NotesDrawer'

import ContactCard from 'components/contactApp/components/ContactCard'
import sampleData from 'components/contactApp/testData/contactDataSmall';
//import sampleData from './contactDataLarge';


//create element
const ContactCardList = (props) => {

    let dummyData = props.data || sampleData;

    function example(){
      return dummyData.map(function(item){
        return (
          <Grid style={{margin:"auto",width:"98%"}} item>
            <ContactCard data={item} />
          </Grid>
        )
      })
    }

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
        style={{width:"100%"}}
      >
        {example()}
      </Grid>
    )
}

export default ContactCardList;

import React from 'react';

//Material UI
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

//Components
import ListItemLink from 'components/ListItemLink';

//create element
const PreviewList = (props) => {

    return (
        <div>
        <List component="div" subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Contact App Views
          </ListSubheader>
        }>
        <Divider/>
          <ListItemLink to={`/contacts/preview/contact-login-view`}>
            <ListItemText primary={`Login`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-list-view`}>
            <ListItemText primary={`Contacts List`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-list-view2`}>
            <ListItemText primary={`Contacts List alternate`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-list-view3`}>
            <ListItemText primary={`Contacts List Saved View`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-list-view4`}>
            <ListItemText primary={`Contacts List Filter State`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-list-view5`}>
            <ListItemText primary={`Contacts List Dynamic`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-edit-view`}>
            <ListItemText primary={`Edit Contact`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-new-view`}>
            <ListItemText primary={`New Contact`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-new-view-simple`}>
            <ListItemText primary={`New Contact Simple Case`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/register-user`}>
            <ListItemText primary={`Register`} />
          </ListItemLink>
        </List>
        <Divider/>
        <List component="div" subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Contact App Components
          </ListSubheader>
        }>
        <Divider/>
          <ListItemLink to={`/contacts/preview/appbar`}>
            <ListItemText primary={`Appbar`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/new-contact-button`}>
            <ListItemText primary={`New Contact Button`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-card`}>
            <ListItemText primary={`Contact Card`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-list-toolbar`}>
            <ListItemText primary={`Contact List Toolbar`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-card-list`}>
            <ListItemText primary={`Contact Card List`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/search-modal`}>
            <ListItemText primary={`Search Modal`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/delete-modal`}>
            <ListItemText primary={`Delete Modal`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-login-form`}>
            <ListItemText primary={`Login Form`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/new-contact-form`}>
            <ListItemText primary={`New Contact Form`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-navigation`}>
            <ListItemText primary={`Contact Navigation Draw`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-delete-modal`}>
            <ListItemText primary={`Delete Contact Modal`} />
          </ListItemLink>
          <ListItemLink to={`/contacts/preview/contact-add-list-modal`}>
            <ListItemText primary={`Add List view modal`} />
          </ListItemLink>
        </List>
        <Divider/>
        </div>
    )
}

export default PreviewList;

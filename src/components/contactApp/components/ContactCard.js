import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link'
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import PhoneIcon from '@material-ui/icons/Phone';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

import DeleteModal from 'components/contactApp/components/ContactDeleteModal';


const useStyles = makeStyles(theme => ({
  card: {
      width:'100%'
  },
}));

const ContactCard = (props) => {
  let dummyData =   {
      display_name:"Points, Juston",
      first_name:"Juston",
      last_name:"Points",
      company:"Omniupdate",
      title:"QA Engineer",
      phone:"(123) 456 - 5678",
      email:'jpoints@omniupate.com',
      street:"Sesame ST",
      city:"Oxnard",
      state:"CA",
      zipcode:"12345",
      country:"USA"
    }

  let data = props.data || dummyData

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function formatSubtitle(){
    let company = data.company
    let title = data.title;
    if(company !== ""){
      title = data.title ? `, ${data.title}` : ""
    }
    if(company == data.display_name){
      return "";
    }
    return `${company}${title}`
  }

  function formatAddress(){
    let street = data.street
    let city = data.city
    let state = data.state
    if(city !== "" || state !== ""){
      street = street ? `${street},` : "";
    }
    if(city === "" && state === "" && street === ""){
      return ""
    }
    return `${street} ${city} ${state}`
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        style={{flexWrap: 'wrap'}}
        avatar={
          <Avatar onClick={handleExpandClick} style={{backgroundColor:"#1a237e"}} aria-label="contact logo">
            {data.display_name[0]}
          </Avatar>
        }
        action={
          <div style={{width:300,display:'flex',alignItems:'flex-end',justifyContent:'flex-end',paddingTop:20}}>
          {data.email ? <Tooltip title={`email ${data.display_name}`}><IconButton href={`mailto:${data.email}`}><EmailIcon /></IconButton></Tooltip> : null}
          {data.phone ? <Tooltip title={`call ${data.display_name}`}><IconButton href={`tel:${data.phone}`}><PhoneIcon /></IconButton></Tooltip> : null}
          <Tooltip title="edit"><IconButton><EditIcon /></IconButton></Tooltip>
          <DeleteModal contact={data.display_name}/>

            <Tooltip title="show contact information">
              <span onClick={handleExpandClick}>
              <IconButton
                aria-expanded={expanded}
                aria-label="show more"
              >
                {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>
              </span>
            </Tooltip>
          </div>
        }
        title=<div style={{whiteSpace:"nowrap", width:200}} styleonClick={handleExpandClick}>{data.display_name}</div>
        subheader=<span>{formatSubtitle()}</span>
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {data.phone ? <p>Phone : <Link href={`tel:${data.phone}`} color="primary"> {data.phone}</Link></p> : null}
          {data.email ? <p>Email : <Link href={`mailto:${data.email}`}>{data.email}</Link></p> : null}
          {formatAddress() ? <p>Address : {formatAddress()}</p> : null}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ContactCard;

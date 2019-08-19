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
import Grid from '@material-ui/core/Grid'
import lo from "lodash";
import Chip from "@material-ui/core/Chip"

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
      tags:["one","two","three"],
      addresses:[
        {
          label:"Home",
          street:"Sesame ST",
          city:"Oxnard",
          state:"CA",
          zipcode:"12345",
          country:"USA",
          format:"Sesame St, Oxnard CA 12345"
        },
        {
          label:"Vacation",
          street:"Elm St",
          city:"Someplace",
          state:"AZ",
          zipcode:"33333",
          country:"USA",
          format:"Elm St, Someplace AZ 33333"
        }
      ],
      datapoints:[
        {
          type:"phone",
          label:"Home phone",
          primary:true,
          value:"(123)123-1234"
        },
        {
          type:"phone",
          label:"Work phone",
          primary:false,
          value:"(111)111-1111"
        },
        {
          type:"email",
          label:"Personal email",
          primary:true,
          value:"justonemail@gmail.com"
        },
        {
          type:"email",
          label:"Work email",
          primary:false,
          value:"justonishere@omniupdate.com"
        },
        {
          type:"other",
          label:"Facebook",
          primary:true,
          value:"http://www.facbook.com/me"
        },
        {
          type:"other",
          label:"Linkedin",
          primary:false,
          value:"http://www.linkedin.com/me"
        }
      ]
    }

  let data = props.data || dummyData
  let addresses = data.addresses;
  let phones = lo.filter(data.datapoints, ['type', 'phone']);
  let emails = lo.filter(data.datapoints, ['type', 'email']);
  console.log(emails)
  let others = lo.filter(data.datapoints, ['type', 'other']);
  let primary = lo.filter(data.datapoints, {primary: true});
  let primary_email = lo.find(primary, ['type', 'email'])
  let primary_phone = lo.find(primary, ['type', 'phone'])


  console.log(primary);

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
          {primary_email ? <Tooltip title={`email ${data.display_name}`}><IconButton href={`mailto:${lo.find(primary, ['type', 'email']).value}`}><EmailIcon /></IconButton></Tooltip> : null}
          {primary_phone ? <Tooltip title={`call ${data.display_name}`}><IconButton href={`tel:${lo.find(primary, ['type', 'phone']).value}`}><PhoneIcon /></IconButton></Tooltip> : null}
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
        subheader=<span>{}</span>
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <p> Tags :
          {data.tags ? data.tags.map(function(item){
            return <Chip color="secondary" label={item} className={classes.chip} />
          }) : null}
        </p>
        <Grid container alignItems="space-between" spacing={2} wrap="wrap" justify="flex-start">
          {emails.map(function(item){
            return <Grid style={{minWidth:400,width:"50%"}} item><Typography component="span" color="primary">{item.label}</Typography> : {item.value}</Grid>
          })}
          {phones.map(function(item){
            return <Grid style={{minWidth:400,width:"50%"}} item><Typography component="span" color="primary">{item.label}</Typography> : {item.value}</Grid>
          })}
          {others.map(function(item){
            return <Grid style={{minWidth:400,width:"50%"}} item><Typography component="span" color="primary">{item.label}</Typography> : {item.value}</Grid>
          })}
          {addresses.map(function(item){
            return <Grid style={{minWidth:400,width:"50%"}} item><Typography component="span" color="primary">{item.label}</Typography> : {item.format}</Grid>
          })}
        </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ContactCard;

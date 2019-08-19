module.exports = [
  {
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
    },
    {
        display_name:"George",
        first_name:"George",
        last_name:"",
        company:"",
        title:"",
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
            type:"other",
            label:"Linkedin",
            primary:false,
            value:"http://www.linkedin.com/me"
          }
        ]
      },
      {
          display_name:"Omniupdate",
          first_name:"",
          last_name:"",
          company:"Omniupdate",
          title:"",
          tags:["work"],
          addresses:[
            {
              label:"Main Address",
              street:"11212 Delacruz",
              city:"Camarillo",
              state:"CA",
              zipcode:"12345",
              country:"USA",
              format:"11212 Delacruz, Camarillo CA 12345"
            },
          ],
          datapoints:[
            {
              type:"phone",
              label:"Main phone",
              primary:true,
              value:"(123)123-1234"
            }
          ]
        }
];

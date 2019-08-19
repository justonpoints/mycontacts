import React from 'react';

import TextField from '@material-ui/core/TextField';

const OUTextField = (props) => {

    const [values, setValues] = React.useState({
     error:false,
     value:props.value || ""
    });

    let name = props.name;
    let value = props.value || null;
    let style = props.style || null;
    let label = props.label;
    let regex = props.regex || /^[^A-Z]*[a-z]+$/
    let type = props.type || null
    let required = props.required || false
    let autoFocus = props.autoFocus || false
    let disabled = props.disabled || false
    let helperText = props.helperText || ""
    let errorText = props.errorText || ""
    let displayText = helperText;

    if(values.error){
      helperText = displayText;
    }
    else{
      helperText = displayText;
    }

    function validation(value){
      if(regex.test(value)){
        setValues({...values,error:false})
      }
      else{
        setValues({...values,error:true})
      }
    }

    function handleChange(event) {
      var currentValue = event.target.value
      validation(currentValue)
    }

    return (
      <TextField
        style={style}
        required={required}
        type={type}
        id={name}
        error={values.error}
        name={name}
        onChange={e => handleChange(e)}
        label={label}
        variant="outlined"
        defaultValue={value}
        disabled={disabled}
        autoFocus={autoFocus}
        helperText={displayText}
      />
    )
}

export default OUTextField;

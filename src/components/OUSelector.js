import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const OUSelector = (props) => {

    let name = props.name;
    let options = props.options;
    let label = props.label;
    let selected = props.selected || "";
    let style = props.style || {}
    const [values, setValues] = React.useState({
     selected: selected
    });

    function handleChange(event) {
      setValues(oldValues => ({
        ...oldValues,
        selected: event.target.value,
      }));
    }

    function renderOptions(){
      return options.map(function(option){
            return <MenuItem value={option.value}>{option.label}</MenuItem >
        });
    }

    return (
      <FormControl style={style} variant="outlined">
          <InputLabel htmlFor={props.name}>{label}</InputLabel>
          <Select
            name={name}
            value={values.selected}
            onChange={handleChange}
            input={<OutlinedInput labelWidth={100} name={props.name} id={props.name} />}
          >
            {renderOptions()}
          </Select>
      </FormControl>
    )
}

export default OUSelector;

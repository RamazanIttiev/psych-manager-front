import React from 'react';

const Select = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.title} </label>
      <select id={props.name} name={props.name} onChange={props.onChange} className="form-control">
        <option value="" disabled selected>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

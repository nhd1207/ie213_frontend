import React, { Component } from 'react';
import Select from 'react-select';

// const renderSelect = ({
//   input,
//   className,
//   meta: { asyncValidating, touched, error },
//   ...props
// }) => { 
//     return (
//       <div className={asyncValidating ? 'async-validating' : ''}>
//         <select {...input} {...props} className={className + (touched && error ? ' is-invalid' : '')}/>
//         {touched && error && <span className="invalid-feedback">{error}</span>}
//       </div>
//     )
// }
// export default renderSelect
class renderSelect extends Component {
  
  render() {
    const {
      input,
      placeholder,
      className,
      meta: { asyncValidating, touched, error },
      options,
      multi,
      loading
    } = this.props
    // const value = typeof input.value !== 'object' ? options.find(option=>option.value === input.value) : input.value
    let value = null;
    if (multi) {
      value = [];
      if (input.value) {
        input.value.map(item => {
          if (item.value) {
            value.push(options.find(option => option.value === item.value))
          } else {
            value = input.value
          }        
        })
      }            
    } else {
      value = typeof input.value !== 'object' ? options.find(option=>option.value === input.value) : input.value
    }
    
    return (
      <div className={asyncValidating ? 'async-validating' : ''}>
        {multi
          ? <Select
              isMulti
              value={value}
              onChange={(option)=>input.onChange(option.map(value=>value))}
              onBlur={()=>{input.onBlur([...input.value])}}
              options={options}
              className={className + (touched && error ? ' is-invalid' : '')}
              placeholder={placeholder}
              isLoading={loading}
            />
          : <Select            
              value={value}
              onChange={(option)=>input.onChange(option.value)}
              options={options}
              className={className + (touched && error ? ' is-invalid' : '')}
              placeholder={placeholder}
              isLoading={loading}
            />
        }        
        {error && <span className="invalid-feedback d-block">{error}</span>}
      </div>
    );
  }
}

export default renderSelect;
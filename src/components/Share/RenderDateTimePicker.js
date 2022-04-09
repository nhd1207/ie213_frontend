import React from 'react'
import { DatePicker } from 'antd';

const renderField = ({
  input,
  size,
  showTime = true,
  meta: { invalid, error },
  ...props
}) => { 
  const disabledDate = value => {
    const { min } = props;
    if(value && min){
      return value.valueOf() < min.valueOf();
    }
    // if (!value || !value[1]) {
    //   if(value && min){
    //     return value.valueOf() < min.valueOf();
    //   }
    //   // return false;
    // }
    return false;
    // return startValue.valueOf() > value[1].valueOf() || (min && startValue.valueOf() < min.valueOf());
  };
    return (
      <div className="position-relative">
        <DatePicker
          {...props}
          disabledDate={disabledDate}
          value={input.value}
          size={size || 'large'}
          showTime={showTime}
          format={showTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD"}
          onChange={(value)=>input.onChange(value)}
          onOk={(value)=>input.onChange(value)}
          style={{width: '100%'}}
        />
        {invalid&&<hr className="border-danger m-0 position-absolute" style={{width: '90%', left: '5%', top: size === 'middle' ? 31 : 39}}/>}
        {error && <span className="invalid-feedback">{error}</span>}
      </div>
    )
}

export default renderField
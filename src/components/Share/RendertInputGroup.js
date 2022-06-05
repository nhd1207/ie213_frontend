import {
    Input,
    Select,
    AutoComplete,

  } from 'antd';
  import React from 'react'
  
  const { Option } = Select;


  
  export default function RendertInputGroup() {
    return (
        <Input.Group compact>
        <Select defaultValue="Sign Up" style={{ width: '30%' }}>
          <Option value="Sign Up">Sign Up</Option>
          <Option value="Sign In">Sign In</Option>
        </Select>
        <AutoComplete
          style={{ width: '70%' }}
          placeholder="Email"
          options={[{ value: 'text 1' }, { value: 'text 2' }]}
        />
      </Input.Group>
    )
  }
  


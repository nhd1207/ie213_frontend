import React from 'react'
import { Input } from 'antd';
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import money from './functions/money';
const RenderInputText = ({
  input,
  prefix,
  suffix,
  addonBefore,
  addonAfter,
  className,
  placeholder,
  size,
  meta: { error, invalid },
  disabled,
  maxLength,
  autoFocus
}) => { 
  const { t } = useTranslation();
    return (
      <div className="position-relative w-100">
        {maxLength && <small className="text-muted" style={{position: 'absolute', right: 2, top: '-15px', zIndex: 1, }}>{money((input.value || '').length, false)}/{money(maxLength, false)}</small>}
        <Input
          allowClear
          autoFocus={autoFocus}
          disabled={disabled}
          value={input.value}
          size={size || 'large'}
          className={classNames(className)}
          // onChange={(e)=>input.onChange(e.target.value)}
          onChange={(e)=>input.onChange( maxLength ? e.target.value.substring(0, maxLength) : e.target.value)}
          placeholder={t(placeholder)}
          prefix={prefix}
          suffix={suffix}
          addonBefore={addonBefore}
          addonAfter={addonAfter}
        />
        {invalid&&<hr className="border-danger m-0 position-absolute" style={{width: '90%', left: '5%', top: size === 'middle' ? 31 : 39}}/>}
        {error && <span className="invalid-feedback">{error}</span>}
      </div>
    )
}

export default RenderInputText
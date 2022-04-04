import React from 'react'
import { Input } from 'antd';
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import money from './functions/money';
const RenderTextareAnt = ({
  input,
  className,
  placeholder,
  rows=4,
  size,
  meta: { error, invalid },
  disabled=false,
  autoFocus,
  maxLength
}) => { 
  const { t } = useTranslation();
    return (
      <div className="position-relative">
        {maxLength && <small className="text-muted" style={{position: 'absolute', right: 2, top: '-15px', zIndex: 1, }}>{money((input.value || '').length, false)}/{money(maxLength, false)}</small>}
        <Input.TextArea
          disabled={disabled}
          style={{width: '100%'}}
          rows={rows}
          value={input.value}
          size={size || 'large'}
          className={classNames(className)}
          onChange={(e)=>input.onChange( maxLength ? e.target.value.substring(0, maxLength) : e.target.value)}
          placeholder={t(placeholder)}
          autoFocus={autoFocus} 
        />
        {invalid&&<hr className="border-danger m-0 position-absolute" style={{width: '90%', left: '5%', bottom: 0}}/>}
        {error && <span className="invalid-feedback">{error}</span>}
      </div>
    )
}

export default RenderTextareAnt
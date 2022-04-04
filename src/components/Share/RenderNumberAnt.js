import React, { Component } from 'react';
import { InputNumber, Tooltip } from 'antd';
import classNames from 'classnames'
import { withTranslation } from 'react-i18next';
class renderNumberAnt extends Component {
  render() {
    const {
      input,
      meta: { invalid, error },
      typeNumber,
      min,
      max,
      step,
      size,
      placeholder,
      disabled,
      t
    } = this.props
    let prop = {}
    switch(typeNumber){
      case 'percent':
        prop = {
          // formatter: (value) => `${value}%`,
          // parser: value => value.replace('%', '')
          style: {width: 'calc(100% - 40px)'}
        }
        break;
      case 'money':
        prop = {
          formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
          parser: value => value.replace(/\$\s?|(,*)/g, ''),
          style: {width: 'calc(100% - 40px)'}
        }
        break;
      default:
        prop = {
          // formatter: (value) => `${value}%`,
          // parser: value => value.replace('%', '')
        }
        break;
    }

    if(typeof min === 'number'){
      prop.min = min
    }
    if(typeof max === 'number'){
      prop.max = max
    }
    if(typeof step === 'number'){
      prop.step = step
    }
    return (
      <div className={classNames('position-relative', { 'd-flex' : typeNumber})}>
        {typeNumber === 'money' && <div className="input-number-lg-icon border-right-0 bg-light">$</div>}
        <Tooltip
          // trigger={['focus']}
          title={t(placeholder)}
          placement="topLeft"
        >
          <InputNumber
            {...prop}
            disabled={disabled}
            onChange={(value)=>input.onChange(value)}
            value={typeof input.value === 'number' ? input.value : 0}
            size={size || 'large'}
            style={{width: '100%'}}
            onFocus={(e)=>e.target.select()}
          />
        </Tooltip>
        {typeNumber === 'percent' && <div className="input-number-lg-icon border-left-0 bg-light">%</div>}
        {invalid&&<hr className="border-danger m-0 position-absolute" style={{width: '90%', left: '5%', top: size === 'middle' ? 31 : 39}}/>}
        {error && <span className="invalid-feedback">{error}</span>}
      </div>
    );
  }
}

export default withTranslation()(renderNumberAnt);
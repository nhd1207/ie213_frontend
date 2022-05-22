import style from './FormUpdateCart.module.css';
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import RenderSelect from "../Share/RenderSelect";
import RenderNumberAnt from "../Share/RenderNumberAnt"

let FormUpdateCart = props => {
    const { handleSubmit, colors } = props

    let options = colors?.map(d => {
        return { label: d, value: d }
    }) || []

    return (
        <form onSubmit={handleSubmit}>
            <div className={`${style.buttomChoice} row`}>
                <div className={`${style.choice}`}>
                    <div className={`${style.choiceColor} col-xl-5`}>
                        <label className={`${style.document}`}>Màu sắc</label>
                        <Field className={`${style.buttonNumber} col-xl-9`}
                            name="color"
                            component={RenderSelect}
                            options={options}
                            placeholder='Màu sắc'
                        />
                    </div>
                    <div className={`${style.choiceNumber} col-xl-5`}>
                        <label className={`${style.document}`}>Số lượng</label>
                        <Field className={`${style.buttonNumber} col-xl-9`}
                            min={1}
                            name="quantity"
                            component={RenderNumberAnt}
                            placeholder='Số lượng'
                        />
                    </div>
                </div>
                <div className={`${style.submit} col-xl-12 text-center`}>
                    <button className={`${style.document} btn btn-primary mr-3`} type="submit"> <FontAwesomeIcon icon={faSave} /> THÊM VÀO GIỎ HÀNG</button>
                </div>
            </div>
        </form>
    )
}

FormUpdateCart = reduxForm({
    enableReinitialize: true,
    form: 'FormUpdateCart'
})(FormUpdateCart)

export default FormUpdateCart

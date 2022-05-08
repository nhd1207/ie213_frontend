import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import RenderSelect from "../Share/RenderSelect";
import RenderNumberAnt from "../Share/RenderNumberAnt"

let FormUpdateCart = props => {
    const { handleSubmit, colors } = props

    let options = colors?.map(d=>{
        return {label: d, value: d }
    }) || []

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3' >
                <div className='col-6 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Màu sắc</label>
                    <Field
                        name="color"
                        component={RenderSelect}
                        options={options}
                        placeholder='Màu sắc'
                    />
                </div>
                <div className='col-6 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Số lượng</label>
                    <Field
                        min={1}
                        name="quantity"
                        component={RenderNumberAnt}
                        placeholder='Số lượng'
                    />
                </div>
                <div className='col-12 text-center'>
                    <button className='btn btn-primary mr-3' type="submit"> <FontAwesomeIcon icon={faSave} /> THÊM VÀO GIỎ HÀNG</button>
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

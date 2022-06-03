import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderNumberAnt from '../../../Share/RenderNumberAnt'
//import RenderSelect from '../../../../share/components/RenderSelect'
import RenderTextareaAnt from '../../../Share/RenderTextareaAnt'
import FileInput from '../../../Share/FileInput'
import RenderInputText from '../../../Share/RenderInputText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Space } from 'antd'
import style from "./FormAddNew.module.css";

let ModalAddAccessory = props => {
    const { handleSubmit, handleShowForm, initialValues } = props

    return (
        <form onSubmit={handleSubmit}>
            <label className={`${style.red_symbol}`}>Những trường có dấu (*) là bắt buộc </label> <br></br>
            <div className='row bg-white m-3 pt-3' >
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tên phụ kiện</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="name"
                        component={RenderInputText}
                        placeholder='Tên phụ kiện'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mã phụ kiện</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="code"
                        component={RenderInputText}
                        placeholder='Đây là phụ kiện'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Giá phụ kiện</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="price"
                        component={RenderNumberAnt}
                        placeholder='Giá phụ kiện'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Số lượng</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="amount"
                        component={RenderNumberAnt}
                        placeholder='Số lượng'

                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Loại</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="type"
                        component={RenderInputText}
                        placeholder='Loại'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Thời gian bảo hành</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="warrantyPeriod"
                        component={RenderNumberAnt}
                        placeholder='24'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Thông số chiều dài (cm)</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="specification.height"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Thông số cân nặng (kg)</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="specification.weight"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mô tả</label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="description"
                        component={RenderTextareaAnt}
                        placeholder='Đây là mô tả'
                    />
                </div>
                <div className='col-12 text-center'>
                    <Space>
                        <button className='btn btn-primary mr-3' type='submit' > <FontAwesomeIcon icon={faSave} /> Lưu</button>
                        <button onClick={() => handleShowForm(false)} className='btn btn-secondary' type='button'>  <FontAwesomeIcon icon={faTimes} /> Hủy </button>
                    </Space>
                </div>
            </div>
        </form>
    )
}

ModalAddAccessory = reduxForm({
    enableReinitialize: true,
    form: 'FormAddAccessory'
})(ModalAddAccessory)

export default ModalAddAccessory

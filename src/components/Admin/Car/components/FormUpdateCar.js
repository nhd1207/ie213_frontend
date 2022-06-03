import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderNumberAnt from '../../../Share/RenderNumberAnt'
//import RenderSelect from '../../../../share/components/RenderSelect'
import RenderTextArea from '../../../Share/RenderTextareaAnt'
import RenderInputText from '../../../Share/RenderInputText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Space } from 'antd'
import style from "./FormAddNew.module.css";

let ModalUpdateCar = props => {
    const { handleSubmit, handleShowForm } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
            <div className='col-12 mb-3 text-left' >
                <label className={`${style.red_symbol}`}>Những trường có dấu (*) là bắt buộc </label> <br></br>
                    <label className="font-weight-bold text-muted">Tên xe </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="name"
                        component={RenderInputText}
                        placeholder='Tên xe'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mã xe </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="code"
                        component={RenderInputText}
                        placeholder='Đây là mã xe'
                    />
                </div>
                {/* <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Hình ảnh</label>
                    <Field
                        name="image"
                        component={FileInput}
                        //placeholder='Đây là mã xe'
                    />
                </div> */}
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Giá xe </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="price"
                        component={RenderNumberAnt}
                        placeholder='Giá xe'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Giá đặt cọc </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="deposit"
                        component={RenderNumberAnt}
                        placeholder='Giá đặt cọc'

                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Số lượng </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="amount"
                        component={RenderNumberAnt}
                        placeholder='Số lượng'

                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Năm sản xuất </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="year"
                        component={RenderNumberAnt}
                        placeholder='Năm sản xuất'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Thời gian bảo hành </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="warrantyPeriod"
                        component={RenderNumberAnt}
                        placeholder='24'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mẫu </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="model"
                        component={RenderInputText}
                        placeholder='A001'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mô tả (HTML) </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="description"
                        component={RenderTextArea}
                        placeholder='Đây là mô tả'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Dung tích xi lanh </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="specification.displacement"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Công suất </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="specification.power"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tốc độ tối đa </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="specification.maxSpeed"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Gia tốc </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="specification.acceleration"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tải trọng </label>
                    <label className={`${style.red_symbol}`}>*</label>
                    <Field
                        name="specification.weight"
                        component={RenderNumberAnt}
                        placeholder='0'
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

ModalUpdateCar = reduxForm({
    enableReinitialize: true,
    form: 'FormUpdateCar'
})(ModalUpdateCar)

export default ModalUpdateCar
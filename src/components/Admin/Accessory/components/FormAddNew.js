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
let ModalAddAccessory = props => {
    const { handleSubmit, handleShowForm, initialValues } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tên xe</label>
                    <Field
                        name="name"
                        component={RenderInputText}
                        placeholder='Tên xe'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mã xe</label>
                    <Field
                        name="code"
                        component={RenderInputText}
                        placeholder='Đây là mã xe'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Giá xe</label>
                    <Field
                        name="price"
                        component={RenderNumberAnt}
                        placeholder='Giá xe'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Giá đặt cọc</label>
                    <Field
                        name="deposit"
                        component={RenderNumberAnt}
                        placeholder='Giá đặt cọc'

                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Số lượng</label>
                    <Field
                        name="amount"
                        component={RenderNumberAnt}
                        placeholder='Số lượng'

                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Năm sản xuất</label>
                    <Field
                        name="year"
                        component={RenderNumberAnt}
                        placeholder='Năm sản xuất'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Thời gian bảo hành</label>
                    <Field
                        name="warrantyPeriod"
                        component={RenderNumberAnt}
                        placeholder='24'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mẫu</label>
                    <Field
                        name="model"
                        component={RenderInputText}
                        placeholder='A001'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mô tả</label>
                    <Field
                        name="description"
                        component={RenderInputText}
                        placeholder='Đây là mô tả'
                    />
                </div>
                
                {/* <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Hình ảnh: </label>
                    <Field
                        type="file"
                        name="poster"
                        component={FileInput}
                    />
                </div> */}
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

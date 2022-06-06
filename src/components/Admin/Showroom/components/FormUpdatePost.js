import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderTextareaAnt from '../../../Share/RenderTextareaAnt'
import RenderInputText from '../../../Share/RenderInputText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Space } from 'antd'

let ModalUpdateCar = props => {
    const { handleSubmit, handleShowForm } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tên</label>
                    <Field
                        name="name"
                        component={RenderInputText}
                        placeholder='Tên'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Địa chỉ</label>
                    <Field
                        name="address"
                        component={RenderInputText}
                        placeholder='Địa chỉ'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Kinh độ</label>
                    <Field
                        name="coordinate.longitude"
                        component={RenderInputText}
                        placeholder='Địa chỉ'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Vĩ độ:</label>
                    <Field
                        name="coordinate.latitude"
                        component={RenderInputText}
                        placeholder='Địa chỉ'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mô tả</label>
                    <Field
                        name="description"
                        component={RenderTextareaAnt}
                        placeholder='Mô tả'
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

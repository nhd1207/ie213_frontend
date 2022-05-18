import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderTextareaAnt from '../../../Share/RenderTextareaAnt'
import RenderInputText from '../../../Share/RenderInputText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Space } from 'antd'

let ModalAddCar = props => {
    const { handleSubmit, handleShowForm } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tiêu đề</label>
                    <Field
                        name="title"
                        component={RenderInputText}
                        placeholder='Tiêu đề'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Nội Dung</label>
                    <Field
                        name="content"
                        component={RenderTextareaAnt}
                        placeholder='Nội dung'
                    />
                </div>
                <div className='col-12 text-center'>
                    <Space>
                        <button className='btn btn-primary mr-3' type='submit' > <FontAwesomeIcon icon={faSave} /> Lưu</button>
                        <button
                            onClick={() => handleShowForm(false)}
                            className='btn btn-secondary' type='button'>
                            <FontAwesomeIcon icon={faTimes} /> Hủy
                        </button>
                    </Space>
                </div>
            </div>
        </form>
    )
}

ModalAddCar = reduxForm({
    enableReinitialize: true,
    form: 'FormAddCar'
})(ModalAddCar)

export default ModalAddCar

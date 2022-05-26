import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderNumberAnt from '../../../Share/RenderNumberAnt'
//import RenderSelect from '../../../../share/components/RenderSelect'
import RenderInputText from '../../../Share/RenderInputText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Space } from 'antd'
let ModalUpdateCar = props => {
    console.log(props)
    const { handleSubmit, handleShowForm } = props

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
                    <label className="font-weight-bold text-muted">Giá xe (VNĐ)</label>
                    <Field
                        name="price"
                        component={RenderNumberAnt}
                        placeholder='Giá xe (VNĐ)'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Giá đặt cọc (VNĐ)</label>
                    <Field
                        name="deposit"
                        component={RenderNumberAnt}
                        placeholder='Giá đặt cọc (VNĐ)'

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
                    <label className="font-weight-bold text-muted">Thời gian bảo hành (Tháng)</label>
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
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Dung tích xi lanh</label>
                    <Field
                        name="specification.displacement"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Công suất</label>
                    <Field
                        name="specification.power"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tốc độ tối đa</label>
                    <Field
                        name="specification.maxSpeed"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Gia tốc</label>
                    <Field
                        name="specification.acceleration"
                        component={RenderNumberAnt}
                        placeholder='0'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tải trọng</label>
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
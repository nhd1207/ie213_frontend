import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
    Input,
    Select,
    AutoComplete,
  } from 'antd';
import RenderNumberAnt from '../../Share/RenderNumberAnt'
//import RenderSelect from '../../../../share/components/RenderSelect'
import RenderTextareaAnt from '../../Share/RenderTextareaAnt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
<<<<<<< Updated upstream
import RenderInputText from '../../Share/RenderInputText'
const { Option } = Select;
=======
>>>>>>> Stashed changes
let ModalUpdateAccessory = props => {
    const { handleSubmit, handleShowForm } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
<<<<<<< Updated upstream
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tên Phụ kiện</label>
                    <Field
                        name="name"
                        component={RenderInputText}
                        placeholder='Tên'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Mã Phụ kiện</label>
                    <Field
                        name="code"
                        component={RenderInputText}
                        placeholder='Mã'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Giá</label>
                    <Field
                        name="price"
                        component={RenderNumberAnt}
                        placeholder='Giá'
                    />
                </div>
                <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Số lượng</label>
                    <Field
                        name="amount"
                        // component={<Input.Group compact>
                        //     <Select defaultValue="Sign Up" style={{ width: '30%' }}>
                        //       <Option value="Sign Up">Sign Up</Option>
                        //       <Option value="Sign In">Sign In</Option>
                        //     </Select>
                        //     <AutoComplete
                        //       style={{ width: '70%' }}
                        //       placeholder="Email"
                        //       options={[{ value: 'text 1' }, { value: 'text 2' }]}
                        //     />
                        //   </Input.Group>}
                        placeholder='Số lượng'
                    />
                </div>

                <div className='col-12 text-center'>
                    <button className='btn btn-primary mr-3' type="submit"> <FontAwesomeIcon icon={faSave} /> Lưu</button>
                    <button onClick={() => handleShowForm(false)} className='btn btn-secondary'> <FontAwesomeIcon icon={faTimes} /> Hủy</button>
                </div>
=======
                    <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Dân số (nghìn người):</label>
                        <Field
                            name="population"
                            component={RenderNumberAnt}
                            placeholder='Dân số'
                        />
                    </div>
                    <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Diện tích (m2):</label>
                        <Field
                            name="area"
                            component={RenderNumberAnt}
                            placeholder='Diện tích'
                        />
                    </div>
                    <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Nội dung</label>
                        <Field
                            name="content"
                            component={RenderTextareaAnt}
                            placeholder='Nội dung'
                        />
                    </div>
                    <div className='col-12 text-center'>
                    <button className='btn btn-primary mr-3' type="submit"> <FontAwesomeIcon icon={faSave} /> Lưu</button>
                    <button onClick={()=>handleShowForm(false)} className='btn btn-secondary'> <FontAwesomeIcon icon={faTimes} /> Hủy</button>
                    </div>
>>>>>>> Stashed changes
            </div>
        </form>
    )
}

ModalUpdateAccessory = reduxForm({
    enableReinitialize: true,
    form: 'FormUpdateAccessory'
})(ModalUpdateAccessory)

export default ModalUpdateAccessory

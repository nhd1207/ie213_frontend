import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderInputText from '../../../Share/RenderInputText'
import RenderDateTimePicker from '../../../Share/RenderDateTimePicker'
// import RenderNumberAnt from '../../../../share/components/RenderNumberAnt'
// import RenderSelect from '../../../../share/components/RenderSelect'
// import RenderTextareaAnt from '../../../../share/components/RenderTextareaAnt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'


let ModalUpdateUser = props => {
    const { handleSubmit, handleShowForm } = props


    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
                    <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Tên: </label>
                        <Field
                            name="name"
                            component={RenderInputText}
                            placeholder='Tên'
                        />
                    </div>
                    <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Số điện thoại: </label>
                        <Field
                            name="info.phoneNumber"
                            component={RenderInputText}
                            placeholder='Số điện thoại'
                        />
                    </div>
                    <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Ngày sinh: </label>
                        <Field
                            name='info.dateOfBirth'
                            type='date'
                            // normalize={(value)=>dateFormat(value,"YYYY mm dd")}
                            component={RenderDateTimePicker}
                            placeholder='Ngày sinh'
                            //format={Formatter}
                        />
                    </div>
                    <div className='col-12 text-center'>
                    <button className='btn btn-primary mr-3' type="submit"> <FontAwesomeIcon icon={faSave} /> Save</button>
                    <button onClick={()=>handleShowForm(false)} className='btn btn-secondary' type='button'> <FontAwesomeIcon icon={faTimes} /> Cancel</button>
                    </div>
            </div>
        </form>
    )
}

ModalUpdateUser = reduxForm({
    enableReinitialize: true,
    form: 'FormUpdateUser'
})(ModalUpdateUser)

export default ModalUpdateUser

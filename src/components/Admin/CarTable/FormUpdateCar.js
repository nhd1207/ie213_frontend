import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderNumberAnt from '../../Share/RenderNumberAnt'
//import RenderSelect from '../../../../share/components/RenderSelect'
import RenderTextareaAnt from '../../Share/RenderTextareaAnt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
let ModalUpdateCity = props => {
    const { handleSubmit, handleShowForm } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
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
                    <button className='btn btn-primary mr-3' type="submit"> <FontAwesomeIcon icon={faSave} /> Save</button>
                    <button onClick={()=>handleShowForm(false)} className='btn btn-secondary'> <FontAwesomeIcon icon={faTimes} /> Cancel</button>
                    </div>
            </div>
        </form>
    )
}

ModalUpdateCity = reduxForm({
    enableReinitialize: true,
    form: 'FormUpdateCity'
})(ModalUpdateCity)

export default ModalUpdateCity

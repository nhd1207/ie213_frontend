import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderInputText from '../../../Share/RenderInputText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

let ContactForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
                    <div className='col-3 mb-3 text-left' >
                        <Field
                            name="name"
                            component={RenderInputText}
                            placeholder='Tên Xe'
                        />
                    </div>
                    <div className='col-2'>
                    <button className='btn btn-primary' type="submit"> <FontAwesomeIcon icon={faSearch} /> Search</button>
                    </div>
            </div>
        </form>
    )
}

ContactForm = reduxForm({
    enableReinitialize: true,
    form: 'FilterCar'
})(ContactForm)

export default ContactForm
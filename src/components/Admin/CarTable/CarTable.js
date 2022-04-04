import React, { useState,useEffect } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import LayoutAdmin from '../LayoutAdmin/LayoutAdmin'
import DataTable from './DataTable'
import FormFilter from './FormFilter'
import FormUpdateCar from './FormUpdateCar'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
//import queryString from 'query-string'
import { createCar, getList, updateCar } from './action';
//import { connect } from 'react-redux'
import classes from "./index.module.css";

export default function CarTable(props) {
    //const query_params = queryString.parse(window.location.search);

    const [state,setState] = useState({
        showForm: false,
        //initial_filter_values: query_params,
        idCar: 0
    }) 
    // useEffect(() => {
    //     //handleSubmitFilter(state.initial_filter_values)
    // }, [])
    

    const handleSubmitFilter = ({ ...values }) => {
        let params = {
            ...values,
            status:1
        }
        //props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        props.getList(params) //
    }

    const handleShowForm = (value) => {
        setState({ showForm: value || false })
    }

    const handleCloseModal = (value) => {
        setState({ showForm: false })
    }

    const handleUpdateCar = (value) => {
        let id = state.idCar;
        setState({ showForm: false })
        let params = value;
        props.updateCity(id, params)
    }

    const openModal = (values) => {
        handleShowForm(true);
        setState({idCar : values});
    }

  return (
    <div>
    {/* <LayoutAdmin> */}
        <div className='container-fluid mb-3 text-left py-2'>
            <span className='h5 font-weight-bold '>Xe</span>
        </div>
        <FormFilter
            onSubmit={handleSubmitFilter}
        />
        <DataTable
            dataSource={props.city.data || []}
            //loading={props.city.loading}
            updateCity={openModal}
        />
        <Modal
            title="Cập nhật xe"
            visible={state.showForm}
            closable={false}
            onCancel={handleCloseModal}
            footer={null}
        >
            <FormUpdateCar
                destroyOnClose={true}
                keyboard={true}
                maskClosable={true}
                onCancel={() => handleShowForm(false)}
                onSubmit={handleUpdateCar}
                handleShowForm={handleShowForm}
            />
        </Modal>
    {/* </LayoutAdmin> */}
    </div>
  )
}

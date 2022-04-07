import React, { useState, useEffect } from 'react';
import { Button, Spin, Alert, Modal } from 'antd';
import LayoutAdmin from '../LayoutAdmin/LayoutAdmin'
import DataTable from './DataTable'
import FormFilter from './FormFilter'
import FormUpdateAccessory from './FormUpdateAccessory'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import queryString from 'query-string'
import { createCar, getList, updateAccessory } from './action';
//import { connect } from 'react-redux'
import classes from "./index.module.css";

export default function CarTable(props) {
    // const query_params = queryString.parse(window.location.search);
    const accessory = [
        {
            "_id": "623843e520842dc20d24765f" ,
            "name": "test",
            "code": "233443221",
            "price": 3600000000,
            "type":"glass",
            "deposit": 50000000,
            "image": "123456qwet",
            "amount": 100, "description": "this is description for test car",
            "specification":
            {
            },
            "color": ["yelow", "red"],
            "special": "max speed very fast"
        }]
    const [state, setState] = useState({
        showForm: false,
        //initial_filter_values: query_params,
        idCar: 0
    })

    useEffect(() => {
        //handleSubmitFilter(state.initial_filter_values)
    }, [])


    const handleSubmitFilter = ({ ...values }) => {
        let params = {
            ...values,
            status: 1
        }
        //props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        getList(params) //
    }

    const handleShowForm = (value) => {
        setState({ showForm: value || false })
    }

    const handleCloseModal = (value) => {
        setState({ showForm: false })
    }

    const handleUpdateAccessory = (value) => {
        let id = state.idCar;
        setState({ showForm: false })
        let params = value;
        updateAccessory(id, params)
    }

    const openModal = (values) => {
        handleShowForm(true);
        setState({ ...state, idCar: values });
    }

    return (
        <div>
            <div className='container-fluid mb-3 text-left py-2'>
                <span className='h5 font-weight-bold '>Xe</span>
            </div>
            {/* <FormFilter
            onSubmit={()=>handleSubmitFilter}
        /> */}
            <DataTable //done
                dataSource={
                    // props.city.data 
                    // ||
                    accessory}
                //loading={props.city.loading}
                updateCar={openModal}
            />
            <Modal
                title="Cập nhật xe"
                visible={false}
                closable={false}
                onCancel={handleCloseModal}
                footer={null}
            >
                <FormUpdateAccessory
                    destroyOnClose={true}
                    keyboard={true}
                    maskClosable={true}
                    onCancel={() => handleShowForm(false)}
                    onSubmit={handleUpdateAccessory}
                    handleShowForm={handleShowForm}
                />
            </Modal>

        </div>
    )
}

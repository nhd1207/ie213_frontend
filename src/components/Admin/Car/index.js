import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Spin, Modal } from 'antd';
import DataTable from './components/DataTable'
import FormUpdateCar from './components/FormUpdateCar'
import FormAddCar from './components/FormAddNew'
import Layout from '../LayoutAdmin/LayoutAdmin'
import queryString from 'query-string'
import { createCar, getList, updateCar, deleteCar } from './action';
import { PlusOutlined } from '@ant-design/icons';
import FormFilter from './components/FormFilter'
import classes from "./index.module.css";;


class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            showForm: false,
            showForm2: false,
            initial_filter_values: query_params,
            idCar: 0,
            car: {}
        }
    }

    componentDidMount = () => {
        let params = {};
        this.props.getList(params)
        console.log(this.props)
    }

    //add car
    handleShowFormAdd = (value) => {
        console.log('handleShowForm')
        this.setState({ showForm2: value || false })
    }

    handleCloseModalAdd = (value) => {
        this.setState({ showForm2: false })
    }

    handleCreateCar = (value) => {
        console.log('handleCreateCar')
        let id = this.state.idCar;
        this.setState({ showForm2: false })
        let params = value
        //     name: value.name,
        //     deposit: value.deposit,
        //     amount: value.amount,
        //     price: value.price
        // }
        // if(params.name && params.deposit && params.amount && params.price)
        // return console.log('loi')
        this.props.createCar(params)
    }

    openModalAdd = (values) => {
        console.log('openModal')
        this.handleShowFormAdd(true);
    }

    //update car
    handleShowForm = (value) => {
        console.log('handleShowForm')
        this.setState({ showForm: value || false })
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleUpdateCar = (value) => {
        console.log('handleUpdateCar')
        let id = this.state.idCar;
        this.setState({ showForm: false })
        let params = value
        //     name: value.name,
        //     deposit: value.deposit,
        //     amount: value.amount,
        //     price: value.price
        // }
        // if(params.name && params.deposit && params.amount && params.price)
        // return console.log('loi')
        this.props.updateCar(id, params)
    }

    handleDeleteCar = (value) => {
        let id = value;
        this.props.deleteCar(id);
    }
    openModal = (values) => {
        console.log('openModal')
        this.handleShowForm(true);
        this.state.idCar = values._id;
        this.state.car = values;
    }

    render() {
        const { showForm, showForm2 } = this.state;
        return (
            <div>
                <Layout>
                    {/* <Spin size='large' spinning={this.props.car.loading}> */}
                    <div className='container-fluid mb-3 text-left py-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className='h3 font-weight-bold '>Xe</span>
                        <span ><Button icon={<PlusOutlined />} onClick={this.openModalAdd} title='Thêm xe' type="primary" ></Button></span>
                    </div>
                    {/* <FormFilter
                    onSubmit={()=>handleSubmitFilter}
                    /> */}
                    <DataTable //done
                        dataSource={this.props?.car?.data.car || []}
                        loading={this.props.car.loading}
                        updateCar={this.openModal}
                        deleteCar={this.handleDeleteCar}
                    />
                    <Modal
                        title="Cập nhật xe"
                        visible={showForm}
                        closable={true}
                        onCancel={this.handleCloseModal}
                        footer={null}
                    >
                        <FormUpdateCar
                            destroyOnClose={false}
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowForm(false)}
                            onSubmit={this.handleUpdateCar}
                            handleShowForm={this.handleShowForm}
                            initialValues={this.state.car}
                        />
                    </Modal>
                    <Modal
                        title="Thêm xe"
                        visible={showForm2}
                        closable={true}
                        onCancel={this.handleCloseModalAdd}
                        footer={null}
                    >
                        <FormAddCar
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowFormAdd(false)}
                            onSubmit={this.handleCreateCar}
                            handleShowForm={this.handleShowFormAdd}
                        />
                    </Modal>
                    {/* </Spin> */}
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    car: state.car
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updateCar: (id, params) => {
        dispatch(updateCar(id, params))
    },
    createCar: (params) => {
        dispatch(createCar(params))
    },
    deleteCar: (id) => {
        dispatch(deleteCar(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)

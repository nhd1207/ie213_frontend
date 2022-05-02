import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Spin, Modal } from 'antd';
import DataTable from './components/DataTable'
import FormUpdateAccessory from './components/FormUpdateAccessory'
import FormAddCar from './components/FormAddNew'
import Layout from '../../Admin2/LayoutAdmin/LayoutAdmin'
import queryString from 'query-string'
import { createAccessory, getList, updateAccessory, deleteAccessory } from './action';
import { PlusOutlined } from '@ant-design/icons';
import FormFilter from './components/FormFilter';
import classes from "./index.module.css";


class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            showForm: false,
            showForm2: false,
            initial_filter_values: query_params,
            idAcc: 0,
            acc: {}
        }
    }

    componentDidMount = () => {
        let params = {};
        this.props.getList(params)
    }

    handleSubmitFilter = ({...values}) => { // chưa chạy
        let params = {
            ...values,
            status:1
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
        console.log('handleSubmitFilter')
    }

    //add Acc
    handleShowFormAdd = (value) => {
        this.setState({ showForm2: value || false })
    }

    handleCloseModalAdd = (value) => {
        this.setState({ showForm2: false })
    }

    handleCreateAccessory = (value) => {
        this.setState({ showForm2: false })
        let params = value
        //     name: value.name,
        //     deposit: value.deposit,
        //     amount: value.amount,
        //     price: value.price
        // }
        // if(params.name && params.deposit && params.amount && params.price)
        // return console.log('loi')
        this.props.createAccessory(params)
    }

    openModalAdd = (values) => {
        this.handleShowFormAdd(true);
    }

    //update Acc
    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleUpdateAccessory = (value) => {
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

    handleDeleteAccessory = (value) => {
        let id = value;
        this.props.deleteAccessory(id);
    }
    openModal = (values) => {
        console.log('openModal')
        this.handleShowForm(true);
        this.state.idAcc = values._id;
        this.state.acc= values;
    }

    render() {
        const { showForm, showForm2 } = this.state;
        return (
            <div>
                <Layout>
                    {/* <Spin size='large' spinning={this.props.car.loading}> */}
                    <div className='container-fluid mb-3 text-left py-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className='h3 font-weight-bold '>Phụ kiện</span>
                        <span ><Button icon={<PlusOutlined />} onClick={this.openModalAdd} text='Thêm xe' type="primary" ></Button></span>
                    </div>
                    <FormFilter
                    onSubmit={this.handleSubmitFilter}
                    />
                    <DataTable //done
                        dataSource={this.props?.accessory?.data.accessory || []}
                        loading={this.props.accessory.loading}
                        updateAccessory={this.openModal}
                        deleteAccessory={this.handleDeleteAccessory}
                    />
                    <Modal
                        title="Cập nhật Phụ kiện"
                        visible={showForm}
                        closable={true}
                        onCancel={this.handleCloseModal}
                        footer={null}
                    >
                        <FormUpdateAccessory
                            destroyOnClose={false}
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowForm(false)}
                            onSubmit={this.handleUpdateAccessory}
                            handleShowForm={this.handleShowForm}
                            initialValues={this.state.acc}
                        />
                    </Modal>
                    <Modal
                        title="Thêm Phụ kiện"
                        visible={showForm2}
                        closable={true}
                        onCancel={this.handleCloseModalAdd}
                        footer={null}
                    >
                        <FormAddCar
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowFormAdd(false)}
                            onSubmit={this.handleCreateAccessory}
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
    accessory: state.accessory
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updateAccessory: (id, params) => {
        dispatch(updateAccessory(id, params))
    },
    createAccessory: (params) => {
        dispatch(createAccessory(params))
    },
    deleteAccessory: (id) => {
        dispatch(deleteAccessory(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)

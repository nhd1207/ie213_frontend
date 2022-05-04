import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Spin, Modal, List } from 'antd';
import DataTable from './components/DataTable'
import Layout from '../LayoutAdmin/LayoutAdmin'
import queryString from 'query-string'
import { createCarOrder, getList, updateCarOrder, deleteCarOrder } from './action';
import { PlusOutlined } from '@ant-design/icons';
import FormFilter from './components/FormFilter';
import classes from "./index.module.css";


class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            showForm: false,
            initial_filter_values: query_params,
            idCarOrder: 0,
            carOrder: {}
        }
    }

    componentDidMount = () => {
        let params = {};
        this.props.getList(params)
    }

    handleSubmitFilter = ({ ...values }) => { // chưa chạy
        let params = {
            ...values,
            status: 1
        }
        this.props.history.replace(window.location.pathname + '?' + queryString.stringify(params));
        this.props.getList(params)
        console.log('handleSubmitFilter')
    }

    handleDeleteCarOrder = (value) => {
        let id = value;
        this.props.deleteCarOrder(id);
    }
    //update AccBill
    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    // handleUpdateAccessoryBill = (value) => {
    //     let id = this.state.idAcc;
    //     this.setState({ showForm: false })
    //     let params = value
    //     //     name: value.name,
    //     //     deposit: value.deposit,
    //     //     amount: value.amount,
    //     //     price: value.price
    //     // }
    //     // if(params.name && params.deposit && params.amount && params.price)
    //     // return console.log('loi')
    //     this.props.updateAccessoryBill(id, params)
    // }

    openModal = (values) => {
        console.log('openModal', values)
        this.handleShowForm(true);
        this.state.idCarOrder = values._id;
        this.state.carOrder = values;
        console.log('this.state.accBill', this.state.carOrder)

    }

    render() {
        const { showForm } = this.state;
        return (
            <div>
                <Layout>
                    {/* <Spin size='large' spinning={this.props.car.loading}> */}
                    <div className='container-fluid mb-3 text-left py-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className='h3 font-weight-bold '>Đơn đặt cọc xe</span>
                    </div>
                    <FormFilter
                        onSubmit={this.handleSubmitFilter}
                    />
                    <DataTable //done
                        dataSource={this.props?.carOrder?.data.carOrders || []}
                        // loading={this.props.accessoryBill.loading}
                        info={this.openModal}
                        // deleteAccessory={this.handleDeleteAccessoryBill}
                    />
                    <Modal
                        title="Thông tin đơn đặt hàng xe"
                        visible={showForm}
                        closable={true}
                        onCancel={this.handleCloseModal}
                        onOk={this.handleCloseModal}
                    //onCancel={handleCancel}
                    >
                        <List
                            dataSource={this.state.carOrder?.carInfo || []}
                            renderItem={item => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        //avatar={<Avatar src={item.picture.large} />}
                                        title=
                                        // {<a href="https://ant.design">
                                                {item.itemId}
                                        //    </a>}
                                        description={item.quantity}
                                    />
                                    <div>Content</div>
                                </List.Item>
                            )}
                        />
                    </Modal>
                    {/* </Spin> */}
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    carOrder: state.carOrder
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updateCarOrder: (id, params) => {
        dispatch(updateCarOrder(id, params))
    },
    createCarOrder: (params) => {
        dispatch(createCarOrder(params))
    },
    deleteCarOrder: (id) => {
        dispatch(deleteCarOrder(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)

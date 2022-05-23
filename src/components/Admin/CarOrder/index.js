import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Modal } from 'antd';
import DataTable from './components/DataTable'
import Layout from '../LayoutAdmin/LayoutAdmin'
import queryString from 'query-string'
import { createCarOrder, getList, updateCarOrder, deleteCarOrder } from './action';
import FormFilter from './components/FormFilter';
import money from '../../Share/functions/money';
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
                        loading={this.props.carOrder.loading}
                        info={this.openModal}
                        // deleteAccessory={this.handleDeleteAccessoryBill}
                    />
                    <Modal
                        title="Thông tin xe"
                        visible={showForm}
                        closable={true}
                        onCancel={this.handleCloseModal}
                        onOk={this.handleCloseModal}
                        destroyOnClose={true}
                    //onCancel={handleCancel}
                    >
                        <img src={this.state.carOrder?.carInfo?.image.avatar} style={{width:100,height:100}}></img>
                        <h4>Tên xe: {this.state.carOrder?.carInfo?.name}</h4>
                        <p>Dòng: {this.state.carOrder?.carInfo?.model}</p>
                        <p>Mã: {this.state.carOrder?.carInfo?.code}</p>
                        <p>Giá tiền: {money(this.state.carOrder?.carInfo?.price,'VNĐ')}</p>
                        <p>Tiền đặt cọc: {money(this.state.carOrder?.carInfo?.deposit,'VNĐ')}</p>
                        <p>Mô tả: {this.state.carOrder?.carInfo?.description}</p>
                        <p>Thông tin đặc biệt: {this.state.carOrder?.carInfo?.special}</p>
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

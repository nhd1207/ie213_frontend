import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Spin, Modal, List } from 'antd';
import DataTable from './components/DataTable'
import Layout from '../LayoutAdmin/LayoutAdmin'
import queryString from 'query-string'
import { createAccessoryBill, getList, updateAccessoryBill, deleteAccessoryBill } from './action';
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
            idAccBill: 0,
            accBill: {}
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

    handleDeleteAccessoryBill = (value) => {
        let id = value;
        this.props.deleteAccessoryBill(id);
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
        this.state.idAccBill = values._id;
        this.state.accBill = values;
        console.log('this.state.accBill', this.state.accBill.accessoryInfo)

    }

    render() {
        const { showForm } = this.state;
        return (
            <div>
                <Layout>
                    {/* <Spin size='large' spinning={this.props.car.loading}> */}
                    <div className='container-fluid mb-3 text-left py-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className='h3 font-weight-bold '>Đơn hàng Phụ kiện</span>
                    </div>
                    <FormFilter
                        onSubmit={this.handleSubmitFilter}
                    />
                    <DataTable //done
                        dataSource={this.props?.accessoryBill?.data.accessoryBills || []}
                        loading={this.props.accessoryBill.loading}
                        info={this.openModal}
                        deleteAccessory={this.handleDeleteAccessoryBill}
                    />
                    <Modal
                        title="Thông tin đơn hàng"
                        visible={showForm}
                        closable={true}
                        onCancel={this.handleCloseModal}
                        onOk={this.handleCloseModal}
                    //onCancel={handleCancel}
                    >
                        <List
                            dataSource={this.state.accBill?.accessoryInfo || []}
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
    accessoryBill: state.accessoryBill
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updateAccessoryBill: (id, params) => {
        dispatch(updateAccessoryBill(id, params))
    },
    createAccessoryBill: (params) => {
        dispatch(createAccessoryBill(params))
    },
    deleteAccessoryBill: (id) => {
        dispatch(deleteAccessoryBill(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)

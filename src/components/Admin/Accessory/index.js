import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal,Image,Empty } from 'antd';
import queryString from 'query-string'
import { PlusOutlined } from '@ant-design/icons';
import DataTable from './components/DataTable'
import FormUpdateAccessory from './components/FormUpdateAccessory'
import FormAddAccessory from './components/FormAddNew'
import Layout from '../LayoutAdmin/LayoutAdmin'
import { createAccessory, getList, updateAccessory, deleteAccessory } from './action';
// import FormFilter from './components/FormFilter';
import FileInput from '../../Share/FileInput';
// import classes from "./index.module.css";
const noImage = 'https://res.cloudinary.com/sevenimg/image/upload/v1652028058/no-image-available_yyhche.png';

class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            showForm: false,
            showForm2: false,
            showFormImage:false,
            initial_filter_values: query_params,
            idAcc: 0,
            acc: {},
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
        let params = { ...value, image: { avatar: noImage, banner: noImage} }
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
        let id = this.state.idAcc;
        this.setState({ showForm: false })
        let params = value
        this.props.updateAccessory(id, params)
    }

    handleDeleteAccessory = (value) => {
        let id = value;
        this.props.deleteAccessory(id);
    }
    openModal = (values) => {
        this.handleShowForm(true);
        this.state.idAcc = values._id;
        this.state.acc= values;
    }

    //Image manager
    openModalImage = (values) => {
        this.handleShowFormImage(true);
        this.state.idAcc = values._id;
        this.state.acc = values;
    }

    handleShowFormImage = (value) => {
        this.setState({ showFormImage: value || false })
    }

    handleCloseModalImage = (value) => {
        this.setState({ showFormImage: false })
    }

    handleUrlImage = (value, type) => {
        switch (type) {
            case 'avatar':
                this.state.acc.image.avatar = value;
                break;
            case 'banner':
                this.state.acc.image.banner = value;
                break;
            case 'gallery':
                this.state.acc.image.gallery.push(value);
                break;
            default:
                break;
        }
        this.setState({ urlImage: value })
    }

    render() {
        const { showForm, showForm2 } = this.state;
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className='h3 font-weight-bold '>Phụ kiện</span>
                        {/* <span className='h4 font-weight-bold '>Số phụ kiện: {this.props?.accessory?.data.accessory?.length}</span> */}
                        <span ><Button icon={<PlusOutlined />} onClick={this.openModalAdd} text='Thêm phụ kiện' type="primary" >Thêm phụ kiện</Button></span>
                    </div>
                    {/* <FormFilter
                    onSubmit={this.handleSubmitFilter}
                    /> */}
                    <DataTable //done
                        dataSource={this.props?.accessory?.data.accessory || []}
                        loading={this.props.accessory.loading}
                        updateAccessory={this.openModal}
                        deleteAccessory={this.handleDeleteAccessory}
                        showImage={this.openModalImage}
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
                        <FormAddAccessory
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowFormAdd(false)}
                            onSubmit={this.handleCreateAccessory}
                            handleShowForm={this.handleShowFormAdd}
                        />
                    </Modal>
                    <Modal
                        title="Quản lý hình ảnh"
                        visible={this.state.showFormImage}
                        closable={true}
                        onCancel={this.handleCloseModalImage}
                        footer={null}
                        destroyOnClose={true}
                    >
                        <Image.PreviewGroup>
                            <p>Tải lên hình ảnh cho {this.state.acc?.name}</p>
                            <FileInput gallery={true} urlImage={this.handleUrlImage} update={() => this.handleUpdateAccessory(this.state.acc)}></FileInput>
                            <hr/>
                            <p>Hình đại diện cho phụ kiện</p>{this.state.acc.image?.avatar?
                                <Image width={200} src={this.state.acc.image?.avatar} /> : <Empty />
                            }
                            <hr/>
                            <p>Hình ảnh bìa cho phụ kiện</p>{this.state.acc.image?.banner?
                                <Image width={200} src={this.state.acc.image?.banner} />: <Empty />
                            }
                            <hr/>
                            <p>Hình khác</p>
                            {this.state.acc.image?.gallery[0]?
                                this.state.acc.image?.gallery.map(item => {
                                    return <Image key={item.id} width={200} src={item} />
                                }): <Empty />
                            }
                        </Image.PreviewGroup>
                    </Modal>
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

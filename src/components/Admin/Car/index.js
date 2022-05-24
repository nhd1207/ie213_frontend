import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal, Image, Empty } from 'antd';
import DataTable from './components/DataTable'
import FormUpdateCar from './components/FormUpdateCar'
import FormAddCar from './components/FormAddNew'
import Layout from '../LayoutAdmin/LayoutAdmin'
import FileInput from '../../Share/FileInput'
import queryString from 'query-string'
import { createCar, getList, updateCar, deleteCar } from './action';
import { PlusOutlined } from '@ant-design/icons';
const noImage = 'https://res.cloudinary.com/sevenimg/image/upload/v1652028058/no-image-available_yyhche.png';


class index extends Component {
    constructor(props) {
        super(props);
        const query_params = queryString.parse(window.location.search);
        this.state = {
            showForm: false,
            showForm2: false,
            showFormImage: false,
            initial_filter_values: query_params,
            idCar: 0,
            car: {},
            urlImage: ''
        }
    }


    componentDidMount = () => {
        let params = {};
        this.props.getList(params)
    }

    //add car
    handleShowFormAdd = (value) => {
        this.setState({ showForm2: value || false })
    }

    handleCloseModalAdd = (value) => {
        this.setState({ showForm2: false })
    }

    handleCreateCar = (value) => {
        this.setState({ showForm2: false })
        let params = { ...value, image: { avatar: noImage, banner: noImage} }
        this.props.createCar(params)
    }

    openModalAdd = (values) => {
        this.handleShowFormAdd(true);
    }

    //update car
    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleUpdateCar = (value) => {
        let id = this.state.idCar;
        this.setState({ showForm: false })
        let params = value
        this.props.updateCar(id, params)
    }

    handleDeleteCar = (value) => {
        let id = value;
        this.props.deleteCar(id);
    }
    openModal = (values) => {
        this.handleShowForm(true);
        this.state.idCar = values._id;
        this.state.car = values;
    }

    // Image
    openModalImage = (values) => {
        this.handleShowFormImage(true);
        this.state.idCar = values._id;
        this.state.car = values;
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
                this.state.car.image.avatar = value;
                break;
            case 'banner':
                this.state.car.image.banner = value;
                break;
            case 'gallery':
                this.state.car.image.gallery.push(value);
                break;
            default:
                break;
        }
        this.setState({ urlImage: value })
    }

    render() {
        const { showForm, showForm2, showFormImage } = this.state;
        return (
            <div>
                <Layout>
                    <div className='container-fluid mb-3 text-left py-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className='h3 font-weight-bold '>Xe</span>
                        <span ><Button icon={<PlusOutlined />} onClick={this.openModalAdd} title='Thêm xe' type="primary" >Thêm xe</Button></span>
                    </div>
                    {/* <FormFilter
                    onSubmit={()=>handleSubmitFilter}
                    /> */}
                    <DataTable //done
                        dataSource={this.props?.car?.data.car || []}
                        loading={this.props.car.loading}
                        updateCar={this.openModal}
                        deleteCar={this.handleDeleteCar}
                        showImage={this.openModalImage}
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
                    <Modal
                        title="Quản lý hình ảnh"
                        visible={showFormImage}
                        closable={true}
                        onCancel={this.handleCloseModalImage}
                        footer={null}
                        destroyOnClose={true}
                    >
                        <Image.PreviewGroup>
                            <p>Tải lên hình ảnh cho xe {this.state.car?.name}</p>
                            <FileInput gallery={true} urlImage={this.handleUrlImage} update={() => this.handleUpdateCar(this.state.car)}></FileInput>
                            <hr/>
                            <p>Hình đại diện cho xe</p>{this.state.car.image?.avatar?
                                <Image width={200} src={this.state.car.image?.avatar} /> : <Empty />
                            }
                            <hr/>

                            <p>Hình ảnh bìa cho xe</p>{this.state.car.image?.banner?
                                <Image width={200} src={this.state.car.image?.banner} />: <Empty />
                            }
                            <hr/>
                            <p>Hình khác</p>
                            {this.state.car.image?.gallery[0]?
                                this.state.car.image?.gallery.map(item => {
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

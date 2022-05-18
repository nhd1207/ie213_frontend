import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal, Image, Empty } from 'antd';
import DataTable from './components/DataTable'
import FormUpdatePost from './components/FormUpdatePost'
import FormAddPost from './components/FormAddNew'
import Layout from '../LayoutAdmin/LayoutAdmin'
import queryString from 'query-string'
import { createPost, getList, updatePost, deletePost } from './action';
import { PlusOutlined } from '@ant-design/icons';
import FormFilter from './components/FormFilter'
import FileInput from '../../Share/FileInput';

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
            idPost: 0,
            post: {},
            urlImage: ''
        }
    }

    componentDidMount = () => {
        let params = {};
        this.props.getList(params)
    }

    //add post
    handleShowFormAdd = (value) => {
        this.setState({ showForm2: value || false })
    }

    handleCloseModalAdd = (value) => {
        this.setState({ showForm2: false })
    }

    handleCreatePost = (value) => {
        let id = this.state.idPost;
        this.setState({ showForm2: false })
        let params = { ...value, image: { avatar: noImage, banner: noImage } }
        this.props.createPost(params)
    }

    openModalAdd = (values) => {
        this.handleShowFormAdd(true);
    }

    //update post
    handleShowForm = (value) => {
        this.setState({ showForm: value || false })
    }

    handleCloseModal = (value) => {
        this.setState({ showForm: false })
    }

    handleUpdatePost = (value) => {
        let id = this.state.idPost;
        this.setState({ showForm: false })
        let params = value
        this.props.updatePost(id, params)
    }

    handleDeletePost = (value) => {
        let id = value;
        this.props.deletePost(id);
    }

    openModal = (values) => {
        this.handleShowForm(true);
        this.state.idPost = values._id;
        this.state.post = values;
    }

    // Image post
    openModalImage = (values) => {
        this.handleShowFormImage(true);
        this.state.idPost = values._id;
        this.state.post = values;
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
                this.state.post.image.avatar = value;
                break;
            case 'banner':
                this.state.post.image.banner = value;
                break;
            // case 'gallery':
            //     this.state.post.image.gallery.push(value);
            //     break;
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
                        <span className='h3 font-weight-bold '>Bài viết</span>
                        <span ><Button icon={<PlusOutlined />} onClick={this.openModalAdd} title='Thêm bài viết' type="primary" >Thêm bài viết</Button></span>
                    </div>
                    {/* <FormFilter
                    onSubmit={()=>handleSubmitFilter}
                    /> */}
                    <DataTable
                        dataSource={this.props?.post?.data.post || []}
                        loading={this.props.post.loading}
                        updatePost={this.openModal}
                        deletePost={this.handleDeletePost}
                        showImage={this.openModalImage}
                    />
                    <Modal
                        title="Cập nhật bài viết"
                        visible={showForm}
                        closable={true}
                        onCancel={this.handleCloseModal}
                        footer={null}
                    >
                        <FormUpdatePost
                            destroyOnClose={false}
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowForm(false)}
                            onSubmit={this.handleUpdatePost}
                            handleShowForm={this.handleShowForm}
                            initialValues={this.state.post}
                        />
                    </Modal>
                    <Modal
                        title="Thêm bài viết"
                        visible={showForm2}
                        closable={true}
                        onCancel={this.handleCloseModalAdd}
                        footer={null}
                    >
                        <FormAddPost
                            keyboard={true}
                            maskClosable={true}
                            onCancel={() => this.handleShowFormAdd(false)}
                            onSubmit={this.handleCreatePost}
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
                            <p>Tải lên hình ảnh cho {this.state.post?.title}</p>
                            <FileInput gallery={false} urlImage={this.handleUrlImage} update={() => this.handleUpdatePost(this.state.post)}></FileInput>
                            <hr />
                            <p>Hình đại diện cho bài viết</p>{this.state.post.image?.avatar ?
                                <Image width={200} src={this.state.post.image?.avatar} /> : <Empty />
                            }
                            <hr />
                            <p>Hình ảnh bìa cho bài viết</p>{this.state.post.image?.banner ?
                                <Image width={200} src={this.state.post.image?.banner} /> : <Empty />
                            }
                            {/* <hr/>
                            <p>Hình khác</p>
                            {this.state.car.image?.gallery[0]?
                                this.state.car.image?.gallery.map(item => {
                                    return <Image key={item.id} width={200} src={item} />
                                }): <Empty />
                            } */}
                        </Image.PreviewGroup>
                    </Modal>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    post: state.postAdmin
})

const mapDispatchToProps = dispatch => ({
    getList: (params) => {
        dispatch(getList(params))
    },
    updatePost: (id, params) => {
        dispatch(updatePost(id, params))
    },
    createPost: (params) => {
        dispatch(createPost(params))
    },
    deletePost: (id) => {
        dispatch(deletePost(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)

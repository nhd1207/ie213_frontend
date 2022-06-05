import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, List, Avatar,Tabs } from "antd";
import DataTable from "./components/DataTable";
import Layout from "../LayoutAdmin/LayoutAdmin";
import queryString from "query-string";
import {
  createAccessoryBill,
  getList,
  updateAccessoryBill,
  deleteAccessoryBill,
} from "./action";
// import FormFilter from "./components/FormFilter";
// import classes from "./index.module.css";
const { TabPane } = Tabs;

class index extends Component {
  constructor(props) {
    super(props);
    const query_params = queryString.parse(window.location.search);
    this.state = {
      showForm: false,
      initial_filter_values: query_params,
      idAccBill: 0,
      accBill: {},
    };
  }

  componentDidMount = () => {
    let params = {};
    this.props.getList(params);
  };

  handleSubmitFilter = ({ ...values }) => {
    // chưa chạy
    let params = {
      ...values,
      status: 1,
    };
    this.props.history.replace(
      window.location.pathname + "?" + queryString.stringify(params)
    );
    this.props.getList(params);
  };

  handleDeleteAccessoryBill = (value) => {
    let id = value;
    this.props.deleteAccessoryBill(id);
  };
  //update AccBill
  handleShowForm = (value) => {
    this.setState({ showForm: value || false });
  };

  handleCloseModal = (value) => {
    this.setState({ showForm: false });
  };

  handleUpdateAccessoryBillStatus = (value,status) => {
    // let id = this.state.idAcc;
    let id = value._id;
    this.setState({ showForm: false })
    let params = { status: status }
    this.props.updateAccessoryBill(id, params)
  }

  openModal = (values) => {
    this.handleShowForm(true);
    this.state.idAccBill = values._id;
    this.state.accBill = values;
  };

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <Layout>
          <div
            className="container-fluid mb-3 text-left py-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span className="h3 font-weight-bold ">Đơn hàng Phụ kiện</span>
          </div>
          {/* <FormFilter onSubmit={this.handleSubmitFilter} /> */}
          
          <Tabs defaultActiveKey="1"  style={{marginLeft:10,marginRight:10}}
          ///onChange={callback}
          >
            <TabPane tab="Đang chờ duyệt" key="1">
            <DataTable
            dataSource={this.props?.accessoryBill?.data?.accessoryBills?.filter((item)=>{
              return item.status === 'Pending'
            }) 
            || []} 
            loading={this.props.accessoryBill.loading}
            info={this.openModal}
            type='Pending'
            cancelAccessory={this.handleUpdateAccessoryBillStatus}
          />
            </TabPane>
            <TabPane tab="Đã duyệt" key="2">
            <DataTable //done
            dataSource={this.props?.accessoryBill?.data?.accessoryBills?.filter((item)=>{
              return item.status === 'Accepted'
            })  || []}
            loading={this.props.accessoryBill.loading}
            info={this.openModal}
            type='Accepted'
            cancelAccessory={this.handleUpdateAccessoryBillStatus}
          />
            </TabPane>
            <TabPane tab="Giao thành công" key="3">
            <DataTable //done
            dataSource={this.props?.accessoryBill?.data?.accessoryBills?.filter((item)=>{
              return item.status === 'Success'
            })  || []}
            loading={this.props.accessoryBill.loading}
            info={this.openModal}
            cancelAccessory={this.handleUpdateAccessoryBillStatus}
          />
            </TabPane>
            <TabPane tab="Đã hủy" key="4">
            <DataTable //done
            dataSource={this.props?.accessoryBill?.data?.accessoryBills?.filter((item)=>{
              return item.status === 'Cancelled'
            })  || []}
            loading={this.props.accessoryBill.loading}
            info={this.openModal}
            cancelAccessory={this.handleUpdateAccessoryBillStatus}
          />
            </TabPane>
          </Tabs>
          <Modal
            title="Thông tin đơn hàng"
            visible={showForm}
            closable={true}
            onCancel={this.handleCloseModal}
            footer={false}
          >
            <List
              dataSource={this.state.accBill?.accessoryInfo || []}
              renderItem={(item,index) => (
                <List.Item
               key={index}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.itemId.image.avatar} />}
                    title={
                      item.itemId.name
                    }
                    description={'Số lượng: ' + item.quantity}
                  />
                  <div>{'màu sắc: ' + item.color}</div>
                </List.Item>
              )}
            />
          </Modal>
          {/* </Spin> */}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accessoryBill: state.accessoryBill,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
  updateAccessoryBill: (id, params) => {
    dispatch(updateAccessoryBill(id, params));
  },
  createAccessoryBill: (params) => {
    dispatch(createAccessoryBill(params));
  },
  deleteAccessoryBill: (id) => {
    dispatch(deleteAccessoryBill(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Tabs } from "antd";
import DataTable from "./components/DataTable";
import Layout from "../LayoutAdmin/LayoutAdmin";
import queryString from "query-string";
import {
  createCarOrder,
  getList,
  updateCarOrder,
  deleteCarOrder,
} from "./action";
import money from "../../Share/functions/money";
// import classes from "./index.module.css";
const { TabPane } = Tabs;

class index extends Component {
  constructor(props) {
    super(props);
    const query_params = queryString.parse(window.location.search);
    this.state = {
      showForm: false,
      initial_filter_values: query_params,
      idCarOrder: 0,
      carOrder: {},
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

  handleDeleteCarOrder = (value) => {
    let id = value;
    this.props.deleteCarOrder(id);
  };

  //update AccBill
  handleShowForm = (value) => {
    this.setState({ showForm: value || false });
  };

  handleCloseModal = (value) => {
    this.setState({ showForm: false });
  };

  handleUpdateCarOrder = (value, status) => {
    let id = value._id;
    this.setState({ showForm: false });
    let params = { status: status };
    this.props.updateCarOrder(id, params);
  };

  openModal = (values) => {
    this.handleShowForm(true);
    this.state.idCarOrder = values._id;
    this.state.carOrder = values;
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
            <span className="h3 font-weight-bold ">Đơn đặt cọc xe</span>
          </div>
          {/* <FormFilter
                        onSubmit={this.handleSubmitFilter}
                    /> */}
          <Tabs
            defaultActiveKey="1"
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <TabPane tab="Đang chờ duyệt" key="1">
              <DataTable
                dataSource={
                  this.props?.carOrder?.data?.carOrders?.filter((item) => {
                    return item.status === "Pending";
                  }) || []
                }
                loading={this.props.carOrder.loading}
                info={this.openModal}
                type="Pending"
                changeStatus={this.handleUpdateCarOrder}
              />
            </TabPane>
            <TabPane tab="Đã duyệt" key="2">
              <DataTable
                dataSource={
                  this.props?.carOrder?.data?.carOrders?.filter((item) => {
                    return item.status === "Accepted";
                  }) || []
                }
                loading={this.props.carOrder.loading}
                info={this.openModal}
                type="Accepted"
                changeStatus={this.handleUpdateCarOrder}
              />
            </TabPane>
            <TabPane tab="Nhận xe thành công" key="3">
              <DataTable
                dataSource={
                  this.props?.carOrder?.data?.carOrders?.filter((item) => {
                    return item.status === "Success";
                  }) || []
                }
                loading={this.props.carOrder.loading}
                info={this.openModal}
                changeStatus={this.handleUpdateCarOrder}
              />
            </TabPane>
            <TabPane tab="Đã hủy" key="4">
              <DataTable
                dataSource={
                  this.props?.carOrder?.data?.carOrders?.filter((item) => {
                    return item.status === "Cancelled";
                  }) || []
                }
                loading={this.props.carOrder.loading}
                info={this.openModal}
                changeStatus={this.handleUpdateCarOrder}
              />
            </TabPane>
          </Tabs>
          <Modal
            title="Thông tin xe"
            visible={showForm}
            closable={true}
            onCancel={this.handleCloseModal}
            footer={false}
            destroyOnClose={true}
          >
            <img
              src={this.state.carOrder?.carInfo?.image.avatar}
              style={{ maxWidth: 100, maxHeight: 100 }}
              alt=""
            ></img>
            <h4>Tên xe: {this.state.carOrder?.carInfo?.name}</h4>
            <p>Dòng: {this.state.carOrder?.carInfo?.model}</p>
            <p>Mã: {this.state.carOrder?.carInfo?.code}</p>
            <p>Giá tiền: {money(this.state.carOrder?.carInfo?.price, "VNĐ")}</p>
            <p>
              Tiền đặt cọc:{" "}
              {money(this.state.carOrder?.carInfo?.deposit, "VNĐ")}
            </p>
            <p>Thông tin đặc biệt: {this.state.carOrder?.carInfo?.special}</p>
          </Modal>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  carOrder: state.carOrder,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
  updateCarOrder: (id, params) => {
    dispatch(updateCarOrder(id, params));
  },
  createCarOrder: (params) => {
    dispatch(createCarOrder(params));
  },
  deleteCarOrder: (id) => {
    dispatch(deleteCarOrder(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);

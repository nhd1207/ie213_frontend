import React from "react";
import style from "./CarOrder.module.css";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import money from "../../components/Share/functions/money";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCarOrder, getListShowroom, createCarOrder } from "./action";
import { connect } from "react-redux";
import { Form, Input, Select, Checkbox, Button, DatePicker, Spin } from "antd";
import Layouts from "../../components/layout";
import { Modal } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// const customWeekStartEndFormat = value =>
//   `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
//     .endOf('week')
//     .format(weekFormat)}`;

function CarOrder(props) {
  const [modalShow, setModalShow] = useState(false);

  let options =
    props?.car?.color?.map((d) => {
      return { label: d, value: d };
    }) || [];

  useEffect(() => {
    props.getCarOrder(props.match.params.id);
    props.getListShowroom();
  }, []);

  const [carForm, setCarForm] = useState({
    carInfo: props.match.params.id,
  });

  const [form] = Form.useForm();

  const onFinish = () => {
    setModalShow(true);
    setCarForm((prev) => {
      return { ...prev, deposit: props?.car[0]?.deposit };
    });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Vui Lòng Chọn Ngày",
      },
    ],
  };

  function confirmOrderHandler() {
    props.createCarOrder(carForm);
  }

  let history = useHistory();

  // useEffect(() => {
  //   console.log(props?.status === "success" && props.go);
  //   if (props?.status === "success" && props.go) {
  //     history.push(`/order-result/${props?.carOrder?._id}?re=successful`, [
  //       { ...props?.carOrder },
  //     ]);
  //   }
  // }, [props.orderLoading, props?.status, props.go]);
  return (
    <Layouts>
      {props?.isLoggedIn?.isLoggedIn === false ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Spin spinning={props.loading} size="large">
            <div className={`${style.main}`}>
              <div className={`${style.formWrapper} row`}>
                <div className={`${style.formCol} col-xl-8`}>
                  <div className={`${style.heading} row`}>
                    XÁC NHẬN ĐƠN HÀNG
                  </div>
                  <div className={`${style.carDetail} row`}>
                    <div className={`${style.carImg} col-xl-6`}></div>
                    <div className={`${style.carSpec} col-xl-6 row`}>
                      <div
                        className={`${style.name} ${style.specText} col-xl-12`}
                      >
                        {props?.car[0]?.name}
                      </div>
                      <div
                        className={`${style.modal} ${style.specText} col-xl-12`}
                      >
                        Dòng xe: {props?.car[0]?.model}
                      </div>
                      <div
                        className={`${style.warranty} ${style.specText} col-xl-12`}
                      >
                        Thời hạn bảo hành: {props?.car[0]?.warrantyPeriod} năm
                      </div>
                      <div
                        className={`${style.color} ${style.specText} col-xl-12`}
                      >
                        <div>Màu có sẵn:</div>
                        <div className={`${style["color-container"]}`}>
                        {props?.car[0]?.color.map((item) => {
                          return <div className={style["car-color"]} style={{backgroundColor: item}}/> ;
                        })}
                        </div>
                      </div>
                    </div>
                    <div className={`${style.deposit} col-xl-12`}>
                      Đặt cọc trước và nhận xe tại cửa hàng:{" "}
                      <div className={`${style.de}`}>
                        {money(props?.car[0]?.deposit, "VND")}
                      </div>
                    </div>
                  </div>
                  <div className={`${style.orderInfo} row`}>
                    <Form
                      {...formItemLayout}
                      form={form}
                      name="register"
                      onFinish={onFinish}
                      initialValues={{
                        residence: ["HaNoi", "CauGiay", "ShowRoom-CauGiay"],
                        prefix: "84",
                      }}
                      scrollToFirstError
                      style={{ fontSize: "2rem" }}
                    >
                      <Form.Item name="time" label="Chọn ngày" {...config}>
                        <DatePicker
                          placeholder="Chọn ngày nhận xe"
                          defaultPickerValue={""}
                          onChange={(event) => {
                            setCarForm((prev) => {
                              return {
                                ...prev,
                                time: moment(event).format("MM/DD/YYYY"),
                              };
                            });
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="place"
                        label="Showroom"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng chọn Showroom!",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Chọn Showroom"
                          onChange={(event) => {
                            setCarForm((prev) => {
                              return { ...prev, place: event };
                            });
                          }}
                        >
                          {props?.showroom?.showRoom?.map((item) => {
                            return (
                              <Option key={item._id} value={item._id}>
                                {item.address}
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="color"
                        label="Màu sắc"
                        rules={[
                          {
                            required: true,
                            message: "Chọn màu sắc để tiếp tục",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Chọn Màu Sắc"
                          onChange={(event) => {
                            setCarForm((prev) => {
                              return { ...prev, color: event };
                            });
                          }}
                        >
                          {props?.car[0]?.color?.map((item) => {
                            let key = 1;
                            key++;
                            return (
                              <Option key={item + key} value={item}>
                                <div
                                  style={{ backgroundColor: item }}
                                  className={style.colorbox}
                                />
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        name="phone"
                        label="Số điện thoại"
                        rules={[
                          {
                            required: true,
                            message: "Vui Lòng Nhập Số Điện Thoại",
                          },
                        ]}
                        onChange={(event) => {
                          setCarForm((prev) => {
                            return { ...prev, phone: event.target.value };
                          });
                        }}
                      >
                        <Input
                          addonBefore={prefixSelector}
                          style={{
                            width: "100%",
                          }}
                        />
                      </Form.Item>
                      <Form.Item name="note" label="Lời Nhắn">
                        <Input.TextArea
                          showCount
                          maxLength={100}
                          onChange={(event) => {
                            setCarForm((prev) => {
                              return { ...prev, note: event.target.value };
                            });
                          }}
                        />
                      </Form.Item>

                      {/* <Form.Item label="Captcha" extra="Chúng tôi cần xác nhận từ bạn">
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Vui Lòng nhập mã Captcha",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button>Get captcha</Button>
                  </Col>
                </Row>
              </Form.Item> */}

                      <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                          {
                            validator: (_, value) =>
                              value
                                ? Promise.resolve()
                                : Promise.reject(
                                    new Error(
                                      "Vui lòng đồng ý điều khoản trước khi tiếp tục"
                                    )
                                  ),
                          },
                        ]}
                        {...tailFormItemLayout}
                      >
                        <Checkbox>
                          Tôi đã đọc{" "}
                          <a
                            onClick={() => {
                            }}
                          >
                            Điều Khoản
                          </a>
                        </Checkbox>
                      </Form.Item>
                      <Form.Item {...tailFormItemLayout}>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className={`${style.bookButton} col-xl-12`}
                        >
                          Đặt hàng
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Spin>
          <Modal
            show={modalShow}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header
              closeButton
              onHide={() => {
                setModalShow(false);
              }}
            >
              <Modal.Title id="contained-modal-title-vcenter">
                Xác nhận đặt hàng
              </Modal.Title>
            </Modal.Header>
            <Spin spinning={props.orderLoading}>
              <Modal.Body>
                <h4>Tên xe: {props?.car[0]?.name}</h4>
                <p>Giá: {money(props?.car[0]?.price, "VND")}</p>
                <p>Đặt cọc trước: {money(props?.car[0]?.deposit, "VND")}</p>
                <p>Ngày nhận xe: {carForm.time}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className={`${style.cancelButton}`}
                  onClick={() => {
                    setModalShow(false);
                  }}
                >
                  Huỷ bỏ
                </Button>
                <Button
                  variant="primary"
                  onClick={confirmOrderHandler}
                  className={`${style.confirmButton}`}
                >
                  Xác nhận
                </Button>
              </Modal.Footer>
            </Spin>
          </Modal>
        </>
      )}
    </Layouts>
  );
}

const mapStateToProps = (state) => ({
  car: state.carOrderPage.car,
  loading: state.carOrderPage.loading,
  showroom: state.carOrderPage.showroom,
  orderLoading: state.carOrderPage.orderLoading,
  isLoggedIn: state.isLoggedIn.isLoggedIn,
  response: state.carOrderPage.response,
  status: state.carOrderPage.status,
  carOrder: state.carOrderPage.carOrder,
  go: state.carOrderPage.go,
});

const mapDispatchToProps = (dispatch) => ({
  getCarOrder: (params) => {
    dispatch(getCarOrder(params));
  },
  getListShowroom: (params) => {
    dispatch(getListShowroom(params));
  },
  createCarOrder: (params) => {
    dispatch(createCarOrder(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarOrder);

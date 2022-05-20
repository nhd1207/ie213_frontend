import React from "react";
import style from "./CarOrder.module.css";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import moment from 'moment'
import money from "../../components/Share/functions/money"
import "bootstrap/dist/css/bootstrap.min.css";
import { getCarOrder, getListShowroom, createCarOrder } from "./action";
import { connect } from "react-redux";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
  Spin,
} from "antd";
import Layouts from "../../components/layout";

const { Option } = Select;


const dateFormat = 'DD/MM/YYYY';

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

const customFormat = value => `custom format: ${value.format(dateFormat)}`;

// const customWeekStartEndFormat = value =>
//   `${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
//     .endOf('week')
//     .format(weekFormat)}`;

function CarOrder(props) {


  let options = props?.car?.color?.map(d => {
    return { label: d, value: d }
  }) || []

  useEffect(() => {
    props.getCarOrder(props.match.params.id);
    props.getListShowroom();
  }, []);

  const [carForm, setCarForm] = useState({
    time: '',
    carInfo: props.match.params.id,
    place: '',
    deposit: props?.car[0]?.deposit
  });

  const [form] = Form.useForm();

  const onFinish = (values) => {
    let params= {
      carInfo: props.match.params.id,
      deposit: props?.car[0]?.deposit,
      phone: values.prefix + values.phone,
      place: values.place,
      color: values.color,
      time: moment(carForm.time).format("DD/MM/YYYY")
    }
    console.log(params);
    console.log("Received values of form: ", values);
  };

  const handleDate = (value) => {
    setCarForm({ ...carForm, time: value })
  }

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

  return (
    <Layouts>
      <Spin spinning={props.loading} size="large">
        <div className={`${style.main}`}>
          <div className={`${style.formWrapper} row`}>
            <div className={`${style.formCol} col-xl-8`}>
              <div className={`${style.heading} row`}>Đặt Cọc Xe</div>
              <div className={`${style.carDetail} row`}>
                <div className={`${style.carImg} col-xl-6`}></div>
                <div className={`${style.carSpec} col-xl-6 row`}>
                  <div className={`${style.name} ${style.specText} col-xl-12`}>
                    {props?.car[0]?.name}
                  </div>
                  <div className={`${style.modal} ${style.specText} col-xl-12`}>
                    Dòng Xe: {props?.car[0]?.model}
                  </div>
                  <div className={`${style.warranty} ${style.specText} col-xl-12`}>
                    Thời hạn bảo hành: {props?.car[0]?.warrantyPeriod} năm
                  </div>
                  <div className={`${style.color} ${style.specText} col-xl-12`}>
                    Màu Sắc:
                    {props?.car[0]?.color.map(item => {
                      return (
                        <span> {item}</span>
                      )
                    })}
                  </div>
                </div>
                <div className={`${style.deposit} col-xl-12`}>
                  Đặt cọc trước để xem xe tại cửa hàng:{" "}
                  <div className={`${style.de}`}>{money(props?.car[0]?.deposit, "VND")}</div>
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
                >
                  <Form.Item name="time" label="Chọn Ngày" {...config}>
                    <DatePicker defaultPickerValue={''} onChange={(value) => handleDate(value)} />
                  </Form.Item>
                  <Form.Item
                    name="place"
                    label="ShowRoom"
                    rules={[
                      {
                        required: true,
                        message: "Vui Lòng Chọn ShowRoom!",
                      },
                    ]}
                  >
                    <Select placeholder="Chọn showroom">
                      {props?.showroom?.showRoom?.map(item => {
                        return (
                          <Option value={item._id}>{item.address}</Option>
                        )
                      })}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="color"
                    label="Màu sắc"
                    rules={[
                      {
                        required: true,
                        message: "Vui Lòng Chọn Màu Sắc Của Xe!",
                      },
                    ]}
                  >
                    <Select placeholder="Chọn Màu Sắc">
                      {props?.car[0]?.color?.map(item => {
                        return (
                          <Option value={item}>{item}</Option>
                        )
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
                  >
                    <Input
                      addonBefore={prefixSelector}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                  <Form.Item name="comment" label="Lời Nhắn">
                    <Input.TextArea showCount maxLength={100} />
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
                                "Bạn nên đồng ý với điều khoản của chúng tôi"
                              )
                            ),
                      },
                    ]}
                    {...tailFormItemLayout}
                  >
                    <Checkbox>
                      Tôi đã đọc <a onClick={() => { console.log('dieu khoan') }}>Điều Khoản</a>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" >
                      Thanh Toán
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </Layouts>
  );
}

const mapStateToProps = state => ({
  car: state.carOrderPage.car,
  loading: state.carOrderPage.loading,
  showroom: state.carOrderPage.showroom
})

const mapDispatchToProps = dispatch => ({
  getCarOrder: (params) => {
    dispatch(getCarOrder(params))
  },
  getListShowroom: (params) => {
    dispatch(getListShowroom(params))
  },
  createCarOrder: (params) => {
    dispatch(createCarOrder(params))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarOrder)
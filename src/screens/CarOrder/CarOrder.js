import React from "react";
import style from "./CarOrder.module.css";
import { useState } from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
} from "antd";
const { Option } = Select;
const places = [
  {
    value: "HaNoi",
    label: "HaNoi",
    children: [
      {
        value: "CauGiay",
        label: "CauGiay",
        children: [
          {
            value: "ShowRoom-CauGiay",
            label: "ShowRoom-CauGiay",
          },
        ],
      },
    ],
  },
  {
    value: "HoChiMinh",
    label: "HoChiMinh",
    children: [
      {
        value: "ThuDuc",
        label: "ThuDuc",
        children: [
          {
            value: "ShowRoom-ThuDuc",
            label: "ShowRoom-ThuDuc",
          },
        ],
      },
    ],
  },
];
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

export default function CarOrder() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="1">+1</Option>
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
    <div className={`${style.main}`}>
      <div className={`${style.formWrapper} row`}>
        <div className={`${style.formCol} col-xl-8`}>
          <div className={`${style.heading} row`}>Đặt Cọc Xe</div>
          <div className={`${style.carDetail} row`}>
            <div className={`${style.carImg} col-xl-6`}></div>
            <div className={`${style.carSpec} col-xl-6 row`}>
              <div className={`${style.name} ${style.specText} col-xl-12`}>
                Hurricaneeeeeee
              </div>
              <div className={`${style.modal} ${style.specText} col-xl-12`}>
                Dòng Xe: Hijeep
              </div>
              <div className={`${style.warranty} ${style.specText} col-xl-12`}>
                Thời hạn bảo hành: 2 năm
              </div>
              <div className={`${style.color} ${style.specText} col-xl-12`}>
                Màu Sắc: Xanh, Đỏ, Vàng
              </div>
            </div>
            <div className={`${style.deposit} col-xl-12`}>
              Đặt cọc trước để xem xe tại cửa hàng:{" "}
              <div className={`${style.de}`}>500 000 000 VNĐ</div>
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
              <Form.Item name="date-picker" label="Chọn Ngày" {...config}>
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="places"
                label="ShowRoom"
                rules={[
                  {
                    type: "array",
                    required: true,
                    message: "Vui Lòng Chọn ShowRoom",
                  },
                ]}
              >
                <Cascader options={places} />
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
                <Select placeholder="chọn showroom">
                  <Option value="ShowRoom 1">ShowRoom 1</Option>
                  <Option value="ShowRoom 2">ShowRoom 2</Option>
                  <Option value="ShowRoom 3">ShowRoom 3</Option>
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
                  Tôi đã đọc <a href="">Điều Khoản</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Thanh Toán
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
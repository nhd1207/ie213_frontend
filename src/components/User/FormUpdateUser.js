import React, {useState } from "react";
import style from "../../screens/CarOrder/CarOrder.module.css";
import "antd/dist/antd.css";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, Select, Button, DatePicker } from "antd";

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

export default function FormUpdateUser(props) {    
  
  const [infoUser, setInfoUser] = useState(props?.data?.info);

  const [form] = Form.useForm();

  const onFinish = () => {
    props.updateUser(infoUser);
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

  return (
            <div className={`${style.main}`}>
              <div className={`${style.formWrapper} row`}>
                <div className={`${style.formCol} col-xl-8`}>
                  <div className={`${style.heading} row`}>Cập nhật thông tin người dùng</div>
                  <div className={`${style.orderInfo} row`}>
                    <Form
                      {...formItemLayout}
                      form={form}
                      name="register"
                      onFinish={onFinish}
                      initialValues={{
                      prefix: "84",
                      }}
                      scrollToFirstError
                    >
                      <Form.Item style={{textAlign:"center"}} name="time" label="Chỉnh sửa ngày sinh">
                        <DatePicker
                          defaultPickerValue={""}
                          onChange={(event) => {
                            setInfoUser((info) => {
                              return {
                                ...info,
                                dateOfBirth: moment(event).format("MM/DD/YYYY")
                              }
                            })
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        label="Số điện thoại"
                        onChange={(event) => {
                          setInfoUser((info) => {
                            return {
                              ...info,
                              phoneNumber: event.target.value
                            }
                          })
                        }}
                      >
                        <Input
                          addonBefore={prefixSelector}
                          style={{
                            width: "100%",
                          }}
                        />
                      </Form.Item>
                      <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                          Cập nhật
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
  );
}

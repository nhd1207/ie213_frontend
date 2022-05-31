import React, {useState} from "react";
import style from "./Support.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/layout"
import { send } from 'emailjs-com';

import { MailOutlined, PhoneOutlined, CarOutlined } from "@ant-design/icons";

import { Form, Input, InputNumber, Button, message } from "antd";

import { Menu } from "antd";
const { SubMenu } = Menu;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

/* eslint-enable no-template-curly-in-string */

export default function Support() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
    address: '',
    from_email: ''
  });

  const onFinish = (values) => {
    console.log(values);
    // e.preventDefault();
    setToSend({
      from_name: values.user.name,
      to_name: 'Seven',
      address: values.user.address,
      message: 'Câu hỏi: ' + values.user.comment,
      from_email: values.user.email,
      reply_to: values.user.email
    })
    send(
      'service_6nktika',
      'template_8ghgt6g',
      toSend,
      'Ykjj7Wn1OrFZUmA72'
    )
      .then((response) => {
        message.success("Bạn đã gửi đơn thông tin hỗ trợ thành công, chúng tôi sẽ liên hệ đến bạn sớm nhất có thể!")
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        message.error("Đã có lỗi xảy ra!!!" + err);
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className={`${style.main}`}>
        <div className={`${style.headingWrapper} row`}>
          <div className={`${style.headingTitle} col-xl-8`}>
            Chúng tôi có thể giúp gì cho bạn ?
          </div>
        </div>
        <div className={`${style.contactWrapper} row`}>
          <div className={`${style.questionsWrapper} col-xl-6 row`}>
            <div className={`${style.questionsRow} col-xl-12 row`}>
              <Menu
                className={`${style.question} col-xl-12`}
                mode="inline"
                // defaultSelectedKeys={["1"]}
                // defaultOpenKeys={["sub1"]}
                triggerSubMenuAction="click"
                selectable={false}
              >
                <SubMenu
                  // onClick={(e) => {
                  //   const element = e.domEvent.target;
                  //   console.log(element.className.includes("ant-menu-item"));
                  //   if (e.domEvent.target.className.includes("ant-menu-item")) {
                  //     element.classList.toggle("ant-menu-item-selected");
                  //     console.log(1);
                  //   } else {
                  //     element.parentElement.parentElement.classList.toggle(
                  //       "ant-menu-item-selected"
                  //     );
                  //     console.log(2);
                  //   }
                  // }}
                  className={`${style.questionDetail} col-xl-12 row`}
                  // key="sub1"
                  title="Làm thế nào để tôi đặt xe ?"
                >
                  <Menu.Item>
                    <div className={`${style.answer} col-xl-8`}>Trả lời</div>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div className={`${style.questionsRow} col-xl-12 row`}>
              <Menu
                className={`${style.question} col-xl-12`}
                mode="inline"
                triggerSubMenuAction="click"
                selectable={false}
              >
                <SubMenu
                  className={`${style.questionDetail} col-xl-12 row`}
                  title="Làm thế nào để tôi đặt xe ?"
                >
                  <Menu.Item>
                    <div className={`${style.answer} col-xl-8`}>trả lời</div>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div className={`${style.questionsRow} col-xl-12 row`}>
              <Menu
                className={`${style.question} col-xl-12`}
                mode="inline"
                triggerSubMenuAction="click"
                selectable={false}
              >
                <SubMenu
                  className={`${style.questionDetail} col-xl-12 row`}
                  title="Làm thế nào để tôi đặt xe ?"
                >
                  <Menu.Item>
                    <div className={`${style.answer} col-xl-8`}>trả lời</div>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div className={`${style.questionsRow} col-xl-12 row`}>
              <Menu
                className={`${style.question} col-xl-12`}
                mode="inline"
                triggerSubMenuAction="click"
                selectable={false}
              >
                <SubMenu
                  className={`${style.questionDetail} col-xl-12 row`}
                  title="Làm thế nào để tôi đặt xe ?"
                >
                  <Menu.Item>
                    <div className={`${style.answer} col-xl-8`}>trả lời</div>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </div>
          <div className={`${style.contactFormWrapper} col-xl-4 row`}>
            <h3 className={`${style.contactHeading} col-xl-12`}>
              Liên hệ với chúng tôi
            </h3>
            <Form
              className={`${style.contactForm}`}
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onChange={handleChange}/>
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input onChange={handleChange} />
              </Form.Item>
              <Form.Item name={["user", "address"]} label="Address">
                <Input onChange={handleChange} />
              </Form.Item>
              <Form.Item name={["user", "comment"]} label="Thông tin cần hỗ trợ" rules={[
                  {
                    required: true,
                  },
                ]}>
                <Input.TextArea onChange={handleChange} />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Gửi
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className={`${style.midBanner} row`}>
          <div className={`${style.banner} col-xl-10`}></div>
        </div>
        <div className={`${style.contactInfoWrapper} row`}>
          <div className={`${style.contactInfo} col-xl-3`}>
            <div className={`${style.infoTitle} row`}>
              Thông tin tư vấn nhanh:
            </div>
            <div className={`${style.info} row`}>
              <PhoneOutlined className={`col-xl-1`} />
              <div className={`col-xl-11`}> Số điện thoại:</div>
            </div>
            <div className={`${style.info} row`}>
              <MailOutlined className={`col-xl-1`} />
              <div className={`col-xl-11`}>Email:</div>
            </div>
          </div>
          <div className={`${style.contactInfo} col-xl-3`}>
            <div className={`${style.infoTitle} row`}>
              Các chi nhánh hỗ trợ dịch vụ bảo trì:
            </div>
            <div className={`${style.info} row`}>
              <CarOutlined className={`col-xl-1`} />
              <div className={`col-xl-11`}> Chi Nhánh Hồ Chí Minh:</div>
            </div>
            <div className={`${style.info} row`}>
              <CarOutlined className={`col-xl-1`} />
              <div className={`col-xl-11`}>Chi Nhánh Hà Nội:</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
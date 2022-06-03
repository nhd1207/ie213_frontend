import React, { useState } from "react";
import style from "./Support.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../components/layout";
import { send } from "emailjs-com";

import { MailOutlined, PhoneOutlined, CarOutlined } from "@ant-design/icons";

import { Form, Input, Button, message } from "antd";

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

export default function Support(props) {
  const [form] = Form.useForm();

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
    address: "",
    from_email: "",
  });

  const onFinish = (values) => {
    setToSend({
      from_name: values.user.name,
      to_name: "Seven",
      address: values.user.address,
      message: "Câu hỏi: " + values.user.comment,
      from_email: values.user.email,
      reply_to: values.user.email,
    });
    send("service_6nktika", "template_8ghgt6g", toSend, "Ykjj7Wn1OrFZUmA72")
      .then((response) => {
        message.success(
          "Bạn đã gửi đơn thông tin hỗ trợ thành công, chúng tôi sẽ liên hệ đến bạn sớm nhất có thể!"
        );
        form.resetFields();
      })
      .catch((err) => {
        message.error("Đã có lỗi xảy ra!!!" + err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.id]: e.target.value });
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
                  title="Làm thế nào để tôi xem thông tin xe ?"
                >
                  <Menu.Item
                    className={`${style.answerRow}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <p className={`${style.answer} col-xl-8`}>
                      Đầu tiên, bạn cần có tài khoản tại Seven. Tiếp đó, hãy đi
                      đến trang các dòng xe, lựa chọn chiếc xe yêu thích của
                      mình. Sau đó, lựa chọn màu sắc phù hợp với bạn. Bạn cần
                      tìm hiểu kĩ các thông số và tính năng của xe, đồng thời
                      giá cả của chúng. Bạn có thể tiến hành đặt xe qua nút đặt
                      xe ngay bên dưới.
                    </p>
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
                  <Menu.Item
                    className={`${style.answerRow}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <p className={`${style.answer} col-xl-8`}>
                      Sau khi đã tìm hiểu kĩ các thông số và lựa chọn được chiếc
                      xe ưng ý cho mình. Ở phía dưới trang thông tin xe, bạn
                      click vào nút "đặt xe ngay" để tiến hành đặt xe. Ở trang
                      Xác nhận đơn hàng, bạn sẽ điền các thông tin cá nhân, chọn
                      địa điểm xem xe và đặt cọc.
                    </p>
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
                  title="Làm thế nào để tôi đặt phụ kiện ?"
                >
                  <Menu.Item
                    className={`${style.answerRow}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <p className={`${style.answer} col-xl-8`}>
                      Đầu tiên, bạn cần có tài khoản tại Seven. Sau đó, hãy đi
                      đến trang các phụ kiện, lựa chọn phụ kiện mà bạn cần. Tiếp
                      theo, Bạn cần tìm hiểu kĩ các thông số và lựa chọn màu sắc
                      yêu thích của mình. Sau đó, hãy đi đến trang chi tiết phụ
                      kiện, thêm sản phẩm vào giỏ hàng. Sau đó hãy mở giỏ hàng,
                      ở đây sẽ hiển thị thông tin về các phụ kiện bạn đã chọn,
                      bạn sẽ tiến hành thanh toán. Phía công ty sẽ tiến hành xác
                      nhận thông tin và giao hàng.
                    </p>
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
                  title="Làm thế nào để tôi tìm kiếm thông tin xe ?"
                >
                  <Menu.Item
                    className={`${style.answerRow}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <p className={`${style.answer} col-xl-8`}>
                      Ở trang chi tiết xe và phụ kiện đều có một ô tìm kiếm, bạn
                      chỉ cần nhập tên xe hoặc phụ kiện vào đó và tiềm kiếm, các
                      thông tin xe và phụ kiện tương ứng sẽ được hiển thị. Bạn
                      cũng có thể sử dụng bộ lọc phía bên trái để lọc ra các sản
                      phẩm theo mong muốn.
                    </p>
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
              onSubmit={(e) => e.preventDefault()}
              validateMessages={validateMessages}
              form={form}
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
                <Input id="from_name" onChange={handleChange} />
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
                <Input id="email" onChange={handleChange} />
              </Form.Item>
              <Form.Item name={["user", "address"]} label="Address">
                <Input id="address" onChange={handleChange} />
              </Form.Item>
              <Form.Item
                name={["user", "comment"]}
                label="Thông tin cần hỗ trợ"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea id="message" onChange={handleChange} />
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
              <div className={`col-xl-11`}> Số điện thoại: 0123 456 789</div>
            </div>
            <div className={`${style.info} row`}>
              <MailOutlined className={`col-xl-1`} />
              <div className={`col-xl-11`}>Email: SevenGroup@gmail.com</div>
            </div>
          </div>
          <div className={`${style.contactInfo} col-xl-3`}>
            <div className={`${style.infoTitle} row`}>
              Các chi nhánh hỗ trợ dịch vụ bảo trì:
            </div>
            <div className={`${style.info} row`}>
              <CarOutlined className={`col-xl-1`} />
              <div className={`col-xl-11`}>
                {" "}
                Chi Nhánh Hồ Chí Minh: Linh Trung, Thủ Đức, Hồ Chí Minh
              </div>
            </div>
            <div className={`${style.info} row`}>
              <CarOutlined className={`col-xl-1`} />
              <div className={`col-xl-11`}>
                Chi Nhánh Hà Nội: Cầu Giấy, Hà Nội
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

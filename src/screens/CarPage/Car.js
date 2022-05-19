import style from "./car.module.css";
import { InputGroup } from "react-bootstrap";
import "antd/dist/antd.css";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import React, { useEffect, useState } from 'react';
import { getListCar } from "./action";
import { NavLink } from 'react-router-dom'
import {
    Form,
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, Spin } from "antd";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function Car(props) {
    // const handleClick = (e) => {
    //     console.log("click ", e);
    // };

    useEffect(() => {
        props.getListCar()
        console.log(props.cars.car);
    }, []);

    return (
        <Layout>
            <Spin size='large' spinning={props?.cars?.loading}>
                <div className={`${style.container}`}>
                    <div className={`${style.headingContainer} container`}>
                        <div className={`${style.headings} `}>
                            <h2 className={`${style.heading} `}>CÁC DÒNG XE</h2>
                            <InputGroup className={`${style.searchGroup} mb-3 `}>
                                <InputGroup.Text
                                    id="basic-addon1"
                                    className={`${style.searchTitle}`}
                                >
                                    Tìm kiếm
                                </InputGroup.Text>
                                <FormControl
                                    className={`${style.searchBox}`}
                                    placeholder="Nhập tên xe"
                                    aria-label="Search"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </div>
                        <h3 className={`${style.headingNumber}`}>{props.cars?.cars?.car?.length} chiếc</h3>
                    </div>
                    <div className={`${style.main} row`}>
                        <div
                            className={`${style.filterContainer} col col-xl-2 col-lg-3 col-md-4 d-none d-md-block`}
                        >
                            <Menu
                                // onClick={handleClick}
                                defaultSelectedKeys={["1"]}
                                defaultOpenKeys={["sub1"]}
                                mode="inline"
                            >
                                <div className={`${style.rangeInput}`}>
                                    <>
                                        <Form.Label>Công Suất</Form.Label>
                                        <Form.Range />
                                    </>
                                </div>
                                <SubMenu key="sub1" icon={<SettingOutlined />} title="Dòng Xe">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<SettingOutlined />} title="Chổ Ngồi">
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                        <div
                            className={`${style.cardContainer} col col-xl-10 col-lg-9 col-md-8`}
                        >
                            <div className={`row`}>
                                {
                                    props.cars?.cars?.car?.map(car => {
                                        let myStyle = {
                                            backgroundImage: `url(${car?.image?.avatar})`
                                        }
                                        return (
                                            <Link className={"col col-xl-6"} key={car?._id} to={`/car/${car?._id}`}>
                                            <div className={`${style.card} `}>
                                                {/* <NavLink to={`/car/${car._id}`}> */}
                                                {/* </NavLink> */}
                                                <div className={`${style.image}`} style={myStyle}>
                                                </div>
                                                <div className={`${style.description}`}>
                                                    <div className={`${style.nameGroup}`}>
                                                        <h5 className={`${style.sub}`}>Tên Xe</h5>
                                                        <h4 className={`${style.text}`}>{car.name}</h4>
                                                    </div>
                                                    <div>
                                                        <h5 className={`${style.sub}`}>Công Suất</h5>
                                                        <h4 className={`${style.text}`}>
                                                            {car?.specification?.power}
                                                        </h4>
                                                    </div>
                                                    <div>
                                                        <h5 className={`${style.sub}`}>Chỗ ngồi</h5>
                                                        <h4 className={`${style.text}`}>
                                                            {car?.specification?.displacement} chỗ
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            </Link>
                                        );
                                    })}
                            </div>
                            {/* <div className={`${style.pagination} row`}>
                <Pagination defaultCurrent={6} total={100} />;
              </div> */}
                        </div>
                    </div>
                </div>
            </Spin>
        </Layout>
    );
}

const mapStateToProps = state => ({
    cars: state.carList,
})

const mapDispatchToProps = dispatch => ({
    getListCar: (params) => {
        dispatch(getListCar(params))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Car);

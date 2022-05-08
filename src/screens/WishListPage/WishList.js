import React from "react";
import style from "./WishList.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../../components/layout'
import { Button } from "antd";

import {
    HeartFilled,
    ShoppingCartOutlined,
    CarOutlined,
} from "@ant-design/icons";

export default function WishList() {
    return (
        <Layout>

            <div className={`${style.wishListContainer}`}>
                <div className={`${style.imgWrapper}`}></div>

                <div className={`${style.main}`}>
                    <div className={`${style.headingWrapper} row`}>
                        <h1 className={`${style.heading} col`}>SẢN PHẨM YÊU THÍCH</h1>
                    </div>
                    <div className={`${style.carWrapper} row`}>
                        <h2 className={`${style.listHeading}`}>Danh Sách Xe</h2>
                        {/* list product */}
                        <div className={`col-xl-12`}>
                            <div className={`${style.product} row`}>
                                <img className={`${style.productImg} col-xl-4 col-md-12`}></img>
                                <div className={`${style.productDetail} col-xl-4 col-md-12`}>
                                    <div className={`${style.productName} row`}>
                                        <HeartFilled className={`${style.heartIcon}`} />
                                        XE SIEU CAP VIP PRO
                                    </div>
                                    <div className={`${style.productDesc} row`}>
                                        Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap vip
                                        pro Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap
                                        vip pro
                                    </div>
                                </div>
                                <div className={`${style.productPrice} col-xl-2 col-md-12`}>
                                    <div>1 000 000</div>
                                </div>
                                <div className={`${style.productButton} col-xl-2 col-md-12`}>
                                    <div className={`row`}>
                                        <Button
                                            className={`${style.bookButton} col-xl-12`}
                                            type="primary"
                                            danger
                                        >
                                            <CarOutlined />
                                            Đặt Xe Ngay
                                        </Button>
                                    </div>
                                    <div className={`row`}>
                                        <Button className={`${style.removeButton}`} type="default">
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-xl-12`}>
                            <div className={`${style.product} row`}>
                                <img className={`${style.productImg} col-xl-4`}></img>
                                <div className={`${style.productDetail} col-xl-4`}>
                                    <div className={`${style.productName} row`}>
                                        <HeartFilled className={`${style.heartIcon}`} />
                                        XE SIEU CAP VIP PRO
                                    </div>
                                    <div className={`${style.productDesc} row`}>
                                        Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap vip
                                        pro Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap
                                        vip pro
                                    </div>
                                </div>
                                <div className={`${style.productPrice} col-xl-2`}>
                                    <div>1 000 000</div>
                                </div>
                                <div className={`${style.productButton} col-xl-2`}>
                                    <div className={`row`}>
                                        <Button
                                            className={`${style.bookButton} col-xl-12`}
                                            type="primary"
                                            danger
                                        >
                                            <CarOutlined />
                                            Đặt Xe Ngay
                                        </Button>
                                    </div>
                                    <div className={`row`}>
                                        <Button className={`${style.removeButton}`} type="default">
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end list product */}
                    </div>
                    <div className={`${style.accessoryWrapper} row`}>
                        <h2 className={`${style.listHeading}`}>Danh Sách Phụ Kiện</h2>
                        {/* list product */}
                        <div className={`col-xl-12`}>
                            <div className={`${style.product} row`}>
                                <img className={`${style.productImg} col-xl-4`}></img>
                                <div className={`${style.productDetail} col-xl-4`}>
                                    <div className={`${style.productName} row`}>
                                        <HeartFilled className={`${style.heartIcon}`} />
                                        XE SIEU CAP VIP PRO
                                    </div>
                                    <div className={`${style.productDesc} row`}>
                                        Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap vip
                                        pro Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap
                                        vip pro
                                    </div>
                                </div>
                                <div className={`${style.productPrice} col-xl-2`}>
                                    <div>1 000 000</div>
                                </div>
                                <div className={`${style.productButton} col-xl-2`}>
                                    <div className={`row`}>
                                        <Button
                                            className={`${style.addButton} col-xl-12`}
                                            type="primary"
                                            danger
                                        >
                                            <ShoppingCartOutlined />
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </div>
                                    <div className={`row`}>
                                        <Button className={`${style.removeButton}`} type="default">
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-xl-12`}>
                            <div className={`${style.product} row`}>
                                <img className={`${style.productImg} col-xl-4`}></img>
                                <div className={`${style.productDetail} col-xl-4`}>
                                    <div className={`${style.productName} row`}>
                                        <HeartFilled className={`${style.heartIcon}`} />
                                        XE SIEU CAP VIP PRO
                                    </div>
                                    <div className={`${style.productDesc} row`}>
                                        Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap vip
                                        pro Mo ta San pham sieu cap vip pro Mo ta San pham sieu cap
                                        vip pro
                                    </div>
                                </div>
                                <div className={`${style.productPrice} col-xl-2`}>
                                    <div>1 000 000</div>
                                </div>
                                <div className={`${style.productButton} col-xl-2`}>
                                    <div className={`row`}>
                                        <Button
                                            className={`${style.addButton} col-xl-12`}
                                            type="primary"
                                            danger
                                        >
                                            <ShoppingCartOutlined />
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </div>
                                    <div className={`row`}>
                                        <Button className={`${style.removeButton}`} type="default">
                                            Xóa
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end list product */}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
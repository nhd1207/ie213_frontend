import style from "./AccessoryDetail.module.css";
import "antd/dist/antd.css";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { message, Modal } from "antd";
import { Button } from "react-bootstrap";
import { getWishList, deleteWishList } from "../WishListPage/action";
import { addAccessoryToWishlist } from "../AccessoryPage/action";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spin } from "antd";
import money from "../../components/Share/functions/money";
import { getDetailAccessory, updateCart } from "./action";
import FormUpdateCart from "../../components/AccessoryDetail/FormUpdateCart";
import { useHistory, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function AccessoryDetail(props) {
  const [wishList, setWishList] = useState({});
  const [accessoryId, setAccessoryId] = useState();
  const [isLiked, setIsLiked] = useState(false);

  const params = useParams();
  const splitLine = (htmlString) => {
    const lines = htmlString?.split(/\r?\n/);
    let html = "";
    for (var i = 0; i < lines?.length; i++) {
      html += "<p>" + lines[i] + "</p>";
    }
    return html;
  };
  useEffect(() => {
    props.getWishList();
    props.getDetailAccessory(params.id);
    setAccessoryId(params.id);
  }, []);

  useEffect(() => {
    setWishList({ ...props?.wishList?.wishList });
  }, [props.wishList.wishList]);

  useEffect(() => {
    props?.wishList?.wishList?.accessories?.forEach((item) => {
      if (item._id === accessoryId) {
        setIsLiked(true);
      }
    });
  }, [props.data.loading, props?.wishList?.wishList?.accessories]);

  const handleAddAccessoryToWishlist = () => {
    props.addAccessoryToWishlist({ itemId: params.id });
  };

  const handleDeleteWishListItem = () => {
    let wishList2;
    let index1;
    wishList2 = { ...wishList };
    wishList2.accessories.map((item, index) => {
      if (item._id === accessoryId) index1 = index;
    });
    wishList2.accessories.splice(index1, 1);
    let wishList3 = {
      cars: [],
      accessories: [],
    };
    wishList3.cars = wishList2.cars.map((item) => {
      return item._id;
    });
    wishList3.accessories = wishList2.accessories.map((item) => {
      return item._id;
    });
    props.deleteWishList({ wishList: { ...wishList3 } });
  };

  const handleUpdateCart = (value) => {
    if (value.color == null) {
      message.error("Chưa chọn màu sắc");
      return;
    }
    if (!value.quantity) {
      message.error("Số lượng phải lớn hơn 0");
      return;
    }
    let data = {
      ...value,
      //color: null,
      itemId: props.match.params.id,
    };
    props.updateCart(data);
  };
  const contentStyle = {
    height: "150px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const onChange = (a, b, c) => {};

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const history = useHistory();

  function loginHandler() {
    history.push("/login");
  }

  return (
    <Layout>
      <Spin size="large" spinning={props.data.loading}>
        <div className={`${style.container}`}>
          <div className={`${style.headingContainer} container`}>
            <div className={`${style.headings} `}>
              <h2 className={`${style.heading} `}>CHI TIẾT PHỤ KIỆN</h2>
            </div>
          </div>
          <div className={`${style.main} row`}>
            {/* <Carousel autoplay className="col-6">
                            <CarouselItem>
                                <img className={style.image} style={{ backgroundImage: `url(${props.data?.data[0]?.image?.gallery[0]})` }}></img>
                            </CarouselItem>
                            <CarouselItem>
                                <img className={style.image} style={{ backgroundImage: `url(${props.data?.data[0]?.image?.gallery[1]})` }}></img>
                            </CarouselItem>
                            <CarouselItem>
                                <img className={style.image} style={{ backgroundImage: `url(${props.data?.data[0]?.image?.gallery[2]})` }}></img>
                            </CarouselItem>
                        </Carousel> */}
            {/* <div className={`${style.image} col-4`} style={{ backgroundImage: `url(${props.data?.data[0]?.image.banner})` }} alt="abc"></div>
                        <div className={`${style.content} col-6`}>
                            <div className={`${style.content_name}`}>
                                {props.data?.data[0]?.name}
                            </div>
                            <div className={`${style.document}`}>Mã mặt hàng: {props.data?.data[0]?.code}</div>
                            <div>Thông số: {props.data?.data[0]?.specification?.height} cm, {props.data?.data[0]?.specification.weight} kg</div>
                            <div className={`${style.content_price}`}>
                                Giá tiền: {money(props.data?.data[0]?.price, "VND")}
                            </div>
                            <FormUpdateCart
                                onSubmit={handleUpdateCart}
                                colors={props.data?.data[0]?.color}
                            />
                        </div> */}
            <div className={`${style.bottom} col-xl-11 row`}>
              {/* <div className={`${style.image} col-xl-5`} 
                            style={{ backgroundImage: `url(${props.data?.data[0]?.image.banner})` }} 
                            alt="abc"></div> */}
              <div className={`${style.image} col-xl-5`}>
                <Carousel
                  className={`${style.carousel}`}
                  afterChange={onChange}
                >
                  {/* <div>
                                    <h3 style={contentStyle}>1</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>2</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>3</h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>4</h3>
                                </div> */}
                  {props.data?.data[0]?.image?.gallery?.map((item) => {
                    let key = 0;
                    key++;
                    return (
                      <Carousel.Item key={key + " ascimg"}>
                        <img
                          className={`${style.imgAccessory}`}
                          src={item}
                        ></img>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
              <div className={`${style.content} col-xl-5`}>
                <div className={`${style.content_name}`}>
                  {props.data?.data[0]?.name}
                </div>
                <div className={`${style.informationCar}`}>
                  <div className={`${style.document} col-xl-5`}>
                    Mã mặt hàng:{" "}
                  </div>
                  <div className={`${style.numberCar} col-xl-5`}>
                    {props.data?.data[0]?.code}
                  </div>
                </div>
                <div className={`${style.informationCar}`}>
                  <div className={`${style.document} col-xl-5`}>Thông số: </div>
                  <div className={`${style.numberCar} col-xl-5`}>
                    {props.data?.data[0]?.specification?.height} cm,{" "}
                    {props.data?.data[0]?.specification.weight} kg
                  </div>
                </div>
                <div className={`${style.informationCar}`}>
                  <div className={`${style.document} col-xl-5`}>Giá tiền: </div>
                  <div className={`${style.numberCar} col-xl-5`}>
                    {money(props.data?.data[0]?.price, "VND")}
                  </div>
                </div>
                {/* <div className={`${style.document} col-xl-3`}>Thông số: {props.data?.data[0]?.specification?.height} cm, {props.data?.data[0]?.specification.weight} kg</div>
                                <div className={`${style.content_price} ${style.document} col-xl-3`}>
                                    Giá tiền: {money(props.data?.data[0]?.price, "VND")} */}
                <div className={`${style.FromUpdateCart}`}>
                  <FormUpdateCart
                    onSubmit={handleUpdateCart}
                    colors={props.data?.data[0]?.color}
                    isLiked={isLiked}
                    addAccessoryToWishlist={handleAddAccessoryToWishlist}
                    handleDeleteWishListItem={handleDeleteWishListItem}
                    setShow={setShow}
                  />
                </div>
                <div className={`${style.informationCar}`}>
                  <div
                    className={`${style.descriptionCar} col-xl-10`}
                    dangerouslySetInnerHTML={{
                      __html: splitLine(props.data?.data[0]?.description),
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chức năng này yêu cầu đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>Vui lòng đăng nhập để tiếp tục</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="primary" onClick={loginHandler}>
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  wishList: state.wishList,
  data: state.accessoryDetailPage,
});

const mapDispatchToProps = (dispatch) => ({
  getDetailAccessory: (params) => {
    dispatch(getDetailAccessory(params));
  },
  updateCart: (data) => {
    dispatch(updateCart(data));
  },
  addAccessoryToWishlist: (data) => {
    dispatch(addAccessoryToWishlist(data));
  },
  getWishList: (params) => {
    dispatch(getWishList(params));
  },
  deleteWishList: (params) => {
    dispatch(deleteWishList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccessoryDetail);

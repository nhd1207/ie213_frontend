import React, { useEffect, useState } from "react";
import style from "./Compare.module.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getListCar, compareTwoCar, getCar1, getCar2 } from "./action";
import { Button } from "antd";
import { connect } from "react-redux";
import { CarOutlined } from "@ant-design/icons";
import Layouts from "../../components/layout";
import CarSelection from "../../components/CarSelection";
import { useLocation, useHistory } from "react-router-dom";
import money from "../../components/Share/functions/money";

function CompareTwoCar(props) {
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  let history = useHistory();

  const [car1ID, setCar1ID] = useState("");
  const [car2ID, setCar2ID] = useState("");
  function getIDCar() {
    if (params.has("id1")) {
      setCar1ID(params.get("id1"));
    }
    if (params.has("id2")) {
      setCar2ID(params.get("id2"));
    }
  }
  useEffect(() => {
    props.getListCar();
    getIDCar();
  }, []);

  useEffect(() => {
    // if (car1ID && car2ID) {
    //   let params = {
    //     carId1: car1ID,
    //     carId2: car2ID,
    //   };
    //   console.log(params);
    // props.compareTwoCar(params);
    // }
    // console.log(car1ID + " and " + car2ID);

    if (car1ID !== "") {
      props.getCar1(car1ID);
      if (car2ID !== "") {
        history.push(`${location.pathname}?id1=${car1ID}&id2=${car2ID}`);
        props.getCar2(car2ID);
      } else history.push(`${location.pathname}?id1=${car1ID}`);
    } else history.push(`${location.pathname}?`);
    if (car2ID !== "") {
      props.getCar2(car2ID);
      if (car1ID === "") history.push(`${location.pathname}?id2=${car2ID}`);
    }
  }, [car1ID, car2ID]);

  function placingOder(carID) {
    history.push(`/order/${carID}`);
  }

  return (
    <Layouts>
      <div className={`${style.main}`}>
        <div className={`${style.bannerContainer} row`}>
          <div className={`${style.bannerImg} col-xl-12`}></div>
        </div>
        <div className={`${style.carSpecWrapper} row`}>
          <div className={`${style.carSpecCol} col-xl-10`}>
            <div className={`${style.specTitle} row`}>So S??nh xe</div>
            <div className={`${style.select} row`}>
              <CarSelection
                carID={"-car1"}
                data={props?.cars?.car}
                default={props?.car?.car1[0]?.name}
                onChangeCar={setCar1ID}
              />
              <CarSelection
                carID={"-car2"}
                data={props?.cars?.car}
                default={props?.car?.car2[0]?.name}
                onChangeCar={setCar2ID}
              />
            </div>
            <div className={`${style.specRowHeading} row`}>
              <div className={`${style.rowHeading} col-xl-4`}>Th??ng s???</div>
              <div className={`${style.rowHeading} col-xl-4`}>
                {props?.car?.car1[0]?.name
                  ? props?.car?.car1[0]?.name
                  : "Ch???n xe ????? so s??nh"}
              </div>
              <div className={`${style.rowHeading} col-xl-4`}>
                {props?.car?.car2[0]?.name
                  ? props?.car?.car2[0]?.name
                  : "Ch???n xe ????? so s??nh"}
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>M?? l???c</div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car1[0]?.specification?.power
                  ? props?.car?.car1[0]?.specification?.power + " HP"
                  : ""}
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car2[0]?.specification?.power
                  ? props?.car?.car2[0]?.specification?.power + " HP"
                  : ""}
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                Dung t??ch xi lanh
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car1[0]?.specification?.displacement
                  ? props?.car?.car1[0]?.specification?.displacement + " cc"
                  : ""}
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car2[0]?.specification?.displacement
                  ? props?.car?.car2[0]?.specification?.displacement + " cc"
                  : ""}
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                T???c ????? t???i ??a
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car1[0]?.specification?.maxSpeed
                  ? props?.car?.car1[0]?.specification?.maxSpeed + " km/h"
                  : ""}
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car2[0]?.specification?.maxSpeed
                  ? props?.car?.car2[0]?.specification?.maxSpeed + " km/h"
                  : ""}
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                T??ng t???c t??? 0-100 km/h
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car1[0]?.specification?.acceleration
                  ? props?.car?.car1[0]?.specification?.acceleration + " gi??y"
                  : ""}
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car2[0]?.specification?.acceleration
                  ? props?.car?.car2[0]?.specification?.acceleration + " gi??y"
                  : ""}
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>Kh???i l?????ng</div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car1[0]?.specification?.weight
                  ? props?.car?.car1[0]?.specification?.weight + " kg"
                  : ""}
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car2[0]?.specification?.weight
                  ? props?.car?.car2[0]?.specification?.weight + " kg"
                  : ""}
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                N??m s???n xu???t
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car1[0]?.year ? props?.car?.car1[0]?.year : ""}
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car2[0]?.year ? props?.car?.car2[0]?.year : ""}
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>M??u c?? s???n</div>
              <div
                className={`${style.specRowText} ${style.colorContainer} col-xl-4`}
              >
                {props?.car?.car1[0]?.color
                  ? props?.car?.car1[0]?.color.map((item) => {
                      let key = 1;
                      key++;
                      return (
                        <div
                          key={item + " car1 " + key}
                          className={style.color}
                          style={{ backgroundColor: `${item}` }}
                        />
                      );
                    })
                  : ""}
              </div>
              <div
                className={`${style.specRowText} ${style.colorContainer} col-xl-4`}
              >
                {props?.car?.car2[0]?.color
                  ? props?.car?.car2[0]?.color.map((item) => {
                      let key = 1;
                      key++;
                      return (
                        <div
                          key={item + " car2 " + key}
                          className={style.color}
                          style={{ backgroundColor: `${item}` }}
                        />
                      );
                    })
                  : ""}
              </div>
            </div>
            <div className={`${style.specRow} ${style.specRowPrice} row`}>
              <div className={`${style.specRowTitle} col-xl-4`}>
                Gi?? Ti??u Chu???n
              </div>
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car1[0]?.price
                  ? money(props?.car?.car1[0]?.price, "VND")
                  : ""}
              </div>{" "}
              <div className={`${style.specRowText} col-xl-4`}>
                {props?.car?.car2[0]?.price
                  ? money(props?.car?.car2[0]?.price, "VND")
                  : ""}
              </div>
            </div>
            <div className={`${style.specRow} row`}>
              <div className={`${style.specRowPolicy} col-xl-12`}>
                *Gi?? ti??u chu???n bao g???m thu??? nh???p kh???u, thu??? ti??u th??? ?????c bi???t
                v?? thu??? gi?? tr??? gia t??ng. B???ng gi??, th??ng s??? k??? thu???t v?? h??nh
                ???nh c?? th??? thay ?????i theo t???ng th???i ??i???m m?? kh??ng b??o tr?????c
              </div>
            </div>
            <div className={`${style.buttonWrapper} row`}>
              <div className={`${style.button} col-xl-6`}>
                <Button
                  className={`${style.bookButton} col-xl-12`}
                  type="primary"
                  danger
                  disabled={car1ID ? false : true}
                  onClick={() => {
                    placingOder(props?.car?.car1[0]?._id);
                  }}
                >
                  ?????t xe {props?.car?.car1[0]?.name}
                  <CarOutlined />
                </Button>
              </div>
              <div className={`${style.button} col-xl-6`}>
                <Button
                  className={`${style.bookButton} col-xl-12`}
                  type="primary"
                  danger
                  disabled={car2ID ? false : true}
                  onClick={() => {
                    placingOder(props?.car?.car2[0]?._id);
                  }}
                >
                  ?????t xe {props?.car?.car2[0]?.name}
                  <CarOutlined />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
}

const mapStateToProps = (state) => ({
  cars: state.compare.cars,
  loading: state.compare.loading,
  car: state.compare,
});

const mapDispatchToProps = (dispatch) => ({
  getListCar: (params) => {
    dispatch(getListCar(params));
  },
  compareTwoCar: (params) => {
    dispatch(compareTwoCar(params));
  },
  getCar1: (params) => {
    dispatch(getCar1(params));
  },
  getCar2: (params) => {
    dispatch(getCar2(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareTwoCar);

import React from "react";
import style from "./CarOverview.module.css";

function CarOvierview() {
  const car = [
    {
      name: "Audi A7",
      price: 500000,
      image: "",
      amount: "100",
      model: "202-etron",
      specification: { power: "600", maxSpeed: "325", acceleration: "2.1" },
    },
  ];

  function mapCar() {
    return car.map((car) => {
      return (
        <div className={style.container}>
          <div className={style["car-price"]}>
            <h2>{car.name}</h2>
            <p>{car.price}</p>
          </div>
          <div>
          <h3>Công suất</h3>
          <p>{car.specification.power} HP</p>
          <h3>Tốc độ tối đa</h3>
          <p>{car.specification.maxSpeed} km/h</p>
          <h3>0-100 km/h</h3>
          <p>{car.specification.acceleration}</p>
          </div>
        </div>
      );
    });
  }
  return <>{mapCar()}</>;
}

export default CarOvierview;

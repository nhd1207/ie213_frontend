import React from "react";
import { Select } from "antd";

const { Option } = Select;
function CarSelection(props) {

  function carSelectHandler(id) {
    props.onChangeCar(id);
  }

  return (
    <Select
      listHeight={150}
      showSearch
      style={{ width: "400px", fontSize: "1.2rem" }}
      placeholder={props?.default}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
      onChange={(value) => {
        carSelectHandler(value);
      }}
    >
      {props?.data?.map((car) => {
        return (
          <Option key={car._id + props.carID} value={car._id}>
            {car.name}
          </Option>
        );
      })}
    </Select>
  );
}

export default CarSelection;

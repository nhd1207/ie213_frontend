import React from "react";
import { Select } from "antd";

const { Option } = Select;
function CarSelection(props) {

  return (
    <Select
      listHeight={150}
      showSearch
      style={{ width: "400px", fontSize: "1.2rem" }}
      placeholder="Tìm xe"
      optionFilterProp="children"
      filterOption= {(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
      onChange={(value) => {console.log(value)}}
    >
    {props?.data?.map(car => { return (<Option key={car._id} value={car._id}>{car.name}</Option>)})}
    </Select>
  );
}

export default CarSelection;

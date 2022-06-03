import React, { useState, useEffect } from 'react'
import { Select, Input } from 'antd';
import data from '../../local.json'

const { Option } = Select;

export default function Province(props) {
    const [city, setCity] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([])
    const [address, setAddress] = useState({ city: '', district: '', ward: '', add: '' });

    useEffect(() => {
        setCity([...data]);
    }, [])

    useEffect(() => {
        props.address(address.add + ', ' + address.ward + ', ' + address.district + ', ' + address.city)
        if (address.add === '' || address.ward === '' || address.district === '' || address.city === '') {
            props.modalValidate(false)
        } else {
            props.modalValidate(true)
        }
    }, [address])

    const handleCityChange = (value) => { //value là id
        if (value !== "") {
            const result = data.filter(n => n.Id === value);
            setAddress({ ...address, city: result[0].Name });
            setDistricts([...result[0].Districts])
        }
    }

    const handleDistrictChange = (value) => {
        if (value !== "") {
            const dataWards = districts.filter(n => n.Id === value)
            setWards([...dataWards[0].Wards])
            setAddress({ ...address, district: dataWards[0].Name });
        }
    }

    const handleChangeWard = (value) => {
        if (value !== "") {
            const Wa = wards.filter(n => n.Id === value)
            setAddress({ ...address, ward: Wa[0].Name });
        }
    }

    const handleChangeAdd = (e) => {
        setAddress({ ...address, add: e.target.value });
    }

    return (
        <div>
            <p style={{ marginBottom: "2px", marginTop: "10px" }}>Chọn tỉnh</p>
            <Select defaultValue={city[0]} style={{ width: 200 }} onChange={handleCityChange}>
                {city?.map(item => {
                    return <Option key={item.Id} value={item.Id}>{item.Name}</Option>
                })}
            </Select>
            <p style={{ marginBottom: "2px", marginTop: "10px" }}>Chọn quận/huyện*</p>
            <Select defaultValue={districts[0]} style={{ width: 200 }} onChange={handleDistrictChange} >
                {districts?.map(item => {
                    return <Option key={item.Id} value={item.Id}>{item.Name}</Option>
                })}
            </Select>
            <p style={{ marginBottom: "2px", marginTop: "10px" }}>Chọn xã/phường*</p>
            <Select defaultValue={wards[0]} style={{ width: 200 }} onChange={handleChangeWard}>
                {wards?.map(item => {
                    return <Option key={item.Id} value={item.Id}>{item.Name}</Option>
                })}
            </Select>
            <p style={{ marginBottom: "2px", marginTop: "10px" }}>Địa chỉ nhà*</p>
            <Input onChange={(e) => handleChangeAdd(e)}></Input>

            {/* <RenderInputText></RenderInputText> */}

        </div>
    )
}

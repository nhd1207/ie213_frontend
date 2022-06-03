import React, { useState } from "react"
import { Drawer, Button } from "antd"
import { MenuOutlined } from "@ant-design/icons"
import style from "./NavBarAdmin.module.css"

export default function NavBarAdmin() {
    const [visible, setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(true);
        console.log(visible);
      };
    
    return (
        <div classname={`${style.navbar}`}>
            <Button
                className={`${  style.menu}`}
                type="primary"
                icon={<MenuOutlined />}
                onClick={showDrawer}
            />
            <Drawer
                title="Topics"
                placement="Left"
                onClick={() => setVisible(false)}
                onClose={() => setVisible(false)}
                visible={visible}
            >
                {/* {props} */}
              <p>cac</p>
            </Drawer>
            {/* <a href="/"><img src={}></img></a> */}
        </div>
    );
}
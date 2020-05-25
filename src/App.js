import React from 'react';
import './App.css';
import Particles from "react-particles-js";
import { Input, Button } from "antd";
import { UserOutlined, SecurityScanOutlined } from "@ant-design/icons";

export default class App extends React.Component {

  render() {
  return (
    <div className="App">
      <form className="login-form">
        <h2>MEZUZA.ID</h2>
        <Input
          placeholder="Ваш логин"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
        <Input.Password
          placeholder="Пароль"
          prefix={<SecurityScanOutlined className="site-form-item-icon" />}
        />
        <Button type="primary">Войти</Button>
      </form>
      <Particles
        params={{
          particles: {
            number: {
              value: 150,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
            },
          },
        }}
      />
    </div>
  );
  }
}

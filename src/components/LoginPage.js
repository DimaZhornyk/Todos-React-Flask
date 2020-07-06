import React from "react";
import { getJwt, register } from "../requests";
import { connect } from "react-redux";
import { setJwtToken, setLogin } from "../actions/JwtActions";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function Login(props) {
  const [form] = Form.useForm();
  React.useEffect(() => {
    if (sessionStorage.getItem("token") !== null) props.history.push("/");
  });
  const onFinish = (values) => {
    getJwt(values.username, values.password)
      .then((res) => {
        sessionStorage.setItem("token", res.token);
        sessionStorage.setItem("username", values.username);
        props.setJwt(res.token);
        props.setLogin(values.username);
        props.history.push("/");
      })
      .catch((res) => console.log(res));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <Button
          type="primary"
          htmlType="button"
          className="login-form-button"
          onClick={(event) => {
            event.preventDefault();
            register(
              form.getFieldValue("username"),
              form.getFieldValue("password")
            )
              .then((res) => {
                sessionStorage.setItem("token", res.token);
                sessionStorage.setItem(
                  "username",
                  form.getFieldValue("username")
                );
                props.setJwt(res.token);
                props.setLogin(form.getFieldValue("username"));
                props.history.push("/");
              })
              .catch((res) => console.log(res));
          }}
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setJwt: (token) => {
      dispatch(setJwtToken(token));
    },
    setLogin: (login) => {
      dispatch(setLogin(login));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

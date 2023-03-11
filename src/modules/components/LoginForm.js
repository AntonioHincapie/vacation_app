import React from "react";
import { Form, Input, Button } from "antd";

export default function LoginForm() {
  const [loading, setLoading] = React.useState(false);
  const URL = "https://vacations-n2qv.onrender.com/api/v1/auth/login";
  const onFinish = async (values) => {
    setLoading(true);
    const requesrOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    };
    const fetchData = await fetch(URL, requesrOptions);
    if (fetchData.status === 200) {
      const data = await fetchData.json();
      localStorage.setItem("currentUser", JSON.stringify(data));
      window.location.href = "/vacations";
    } else {
      alert("Wrong email or password");
    }
    setLoading(false);
  };

  return (
    <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="email" rules={[{ required: true }]}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true }]}>
        <Input placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

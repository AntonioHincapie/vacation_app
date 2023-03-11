import React from "react";
import { Form, Input } from "antd";

export default function VacationForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Form
      name="vacation"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item label="Employee">
        <Input name="employee" onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Deparment">
        <Input name="department" onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Start">
        <Input name="start" onChange={handleChange} />
      </Form.Item>
      <Form.Item label="End">
        <Input name="end" onChange={handleChange} />
      </Form.Item>
    </Form>
  );
}

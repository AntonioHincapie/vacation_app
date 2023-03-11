import React, { useEffect, useState } from "react";
import { Button, Layout, Modal, Table, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getVacations } from "../redux/vacations/vacations";
import CsvUploader from "./Upload";
import column from "./components/Columns";

export default function Vacations() {
  const URL = "https://vacations-foht.onrender.com/api/v1/vacations";
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const vacations = useSelector((state) => state.vacations);

  useEffect(() => {
    dispatch(getVacations());
  }, []);

  const handleOk = async () => {
    const postBody = {
      employee_name: formData.employee,
      department: formData.department,
      start_date: formData.start_date,
      end_date: formData.end_date,
    };
    const postVacation = {
      method: "POST",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("currentUser")).token,
      },
      body: JSON.stringify(postBody),
    };
    await fetch(URL, postVacation);
    dispatch(getVacations());
    setVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ display: "flex" }}>
      <Layout style={{ padding: "50px", alignItems: "center" }}>
        <Button
          style={{ width: 300, alignSelf: "center", marginBottom: 20 }}
          onClick={() => setVisible(true)}
        >
          Add Vacation
        </Button>

        <CsvUploader />

        <Modal
          title="Add Vacation"
          visible={visible}
          onOk={handleOk}
          onCancel={() => setVisible(false)}
        >
          {/* <VacationForm /> */}
          <Form
            name="vacation"
            align="center"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            initialValues={{ remember: true }}
          >
            <Form.Item label="Employee">
              <Input name="employee" onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Deparment">
              <Input name="department" onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Start Date">
              <Input
                name="start_date"
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item label="End Date">
              <Input
                name="end_date"
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
              />
            </Form.Item>
          </Form>
        </Modal>

        <Table columns={column(vacations)} dataSource={vacations} />
      </Layout>
    </div>
  );
}

import React from "react";
import { Space } from "antd";
import getOptions from "../../utils/getOptions";

export default function Columns(items) {
  return [
    {
      title: "Vacation ID",
      dataIndex: "id",
      key: "id",
      filterSearch: true,
      align: "center",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Employee Name",
      dataIndex: "employee_name",
      key: "employee_name",
      filterSearch: true,
      align: "center",
      filters: getOptions(items, "employee_name"),
      onFilter: (value, record) => record.employee_name.indexOf(value) === 0,
      render: (text, record) => <Space>{text}</Space>,
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      filterSearch: true,
      align: "center",
      filters: getOptions(items, "department"),
      onFilter: (value, record) => record.department.indexOf(value) === 0,
      render: (text, record) => <Space>{text}</Space>,
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      filterSearch: true,
      align: "center",
      filters: getOptions(items, "start_date"),
      onFilter: (value, record) => record.start_date.indexOf(value) === 0,
      render: (text, record) => <Space>{text}</Space>,
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      filterSearch: true,
      align: "center",
      filters: getOptions(items, "end_date"),
      onFilter: (value, record) => record.end_date.indexOf(value) === 0,
      render: (text, record) => <Space>{text}</Space>,
    },
  ];
}

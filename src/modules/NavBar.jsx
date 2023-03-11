import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";

export default function NavBar() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogOut = () => {
    setLoading(true);
    localStorage.removeItem("currentUser");
    navigate("/login");
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Menu
        mode="horizontal"
        style={{ width: 200, alignSelf: "center", marginLeft: 20 }}
        onClick={(e) => navigate(e.key)}
      >
        <Menu.Item key="/vacations">Vacations</Menu.Item>
        <Menu.Item key="/calendar">Calendar</Menu.Item>
      </Menu>
      <Header style={{ background: "#fff", lineHeight: "20px" }}>
        <h1>Calendar Manager</h1>
      </Header>
      <Button
        disabled={localStorage.getItem("currentUser") ? false : true}
        style={{ alignSelf: "center", margin: "0 50px" }}
        type="primary"
        onClick={handleLogOut}
        loading={loading}
      >
        Log Out
      </Button>
    </div>
  );
}

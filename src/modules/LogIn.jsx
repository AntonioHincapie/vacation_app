import React from "react";
import { Navigate } from "react-router-dom";
import { Card } from "antd";
import LoginForm from "./components/LoginForm.js";

export default function LogIn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "200px",
      }}
    >
      {localStorage.getItem("currentUser") ? (
        <Navigate to="/vacations" />
      ) : (
        <Card title="Calendar Manager" style={{ width: 300 }}>
          <LoginForm />
        </Card>
      )}
    </div>
  );
}

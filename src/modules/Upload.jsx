import { Button, message, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

export default function CsvUploader() {
  const URL = "https://vacations-foht.onrender.com/api/v1/data_upload";
  // const URL = "http://localhost:3000/api/v1/data_upload";
  const [file, setfile] = useState(null);

  const handleUpload = () => {
    if (!file) {
      message.error("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const postUpload = {
      method: "POST",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("currentUser")).token,
      },
      body: formData,
    };

    fetch(URL, postUpload)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        message.success("Upload successful");
      })
      .catch((error) => {
        console.error(error);
        message.error("Upload failed");
      });
    setfile(null);
    window.location.reload();
  };

  const handleChange = (info) => {
    if (info.file) {
      message.success(`${info.file.name} file uploaded successfully`);
      setfile(info.file);
    } else {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div>
      <Upload
        accept=".csv"
        showUploadList={false}
        beforeUpload={() => false}
        onChange={handleChange}
      >
        <Button
          disabled={file}
          style={{ marginBottom: "12px", marginRight: "12px" }}
        >
          Upload CSV
        </Button>
      </Upload>
      <Button
        icon={<UploadOutlined />}
        onClick={handleUpload}
        disabled={!file}
        style={{ marginBottom: "12px" }}
      >
        Send
      </Button>
    </div>
  );
}

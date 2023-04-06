"use client";
import { SmileOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import Image from "next/image";
const Donate: React.FC = () => {
  const [open, setOpen] = useState(true);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        title="Donation to support the project"
        placement="bottom"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" className="bg-[#1677ff]" onClick={onClose}>
              Done
            </Button>
          </Space>
        }
      >
        <p className="text-2xl text-center text-blue-600">
          <SmileOutlined />
          Thank you
        </p>
        <div className="flex relative justify-center items-center ">
          <Image
            src="/donate.jpeg"
            className=" object-cover "
            alt="staycurios Logo"
            width={250}
            height={250}
          />
        </div>
      </Drawer>
    </>
  );
};

export default Donate;

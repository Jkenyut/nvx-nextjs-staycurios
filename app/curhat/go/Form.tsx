"use client";
import React, { useState } from "react";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  message,
  Checkbox,
  Tooltip,
  Radio,
} from "antd";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import { z } from "zod";
import { useRouter } from "next/navigation";

interface CurhatInput {
  name: string;
  age: number;
  description: string;
  email: string;
}
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 8,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const withtailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 19,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

function MyForm() {
  const [via, setVia] = useState<boolean>(true);
  const [messageApi, contextHolder] = message.useMessage();
  let intialValues: CurhatInput;
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log(values);
  };
  const handleSubmit = (e: React.FormEvent, data: any, type: "email" | "wa") => {
    e.preventDefault();
    if (data === undefined) {
      if (type === "email") {
        router.push;
      } else {
      }
    }

    // Do something with form values
    console.log("Form values:", data);
  };
  const onFinishFailed = () => {
    messageApi.error("Submit failed!");
  };

  return (
    <Form
      className="mx-5 my-5 sm:mx-10  md:mx-16"
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      {contextHolder}
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            validator: (_, value) => {
              const name = z
                .string()
                .min(1, { message: "Must be 1 or more characters long" })

                .regex(/^[a-zA-Z]+$/, { message: "Only alphabet!" })
                .safeParse(value);
              if (name.success === true) {
                return Promise.resolve();
              } else {
                return Promise.reject(name.error.issues.map((err) => err.message));
              }
            },
          },
          { required: true, message: "Please input your name" },
        ]}
        hasFeedback={true}
        className="mb-1 "
      >
        <Input className="rounded-md border-slate-300" />
      </Form.Item>

      <Form.Item
        hasFeedback
        name={["user", "email"]}
        label="Email"
        rules={[{ required: true, type: "email" }]}
        className="mb-1 "
      >
        <Input className="rounded-md border-slate-300" />
      </Form.Item>

      <Form.Item
        hasFeedback
        name={["user", "age"]}
        label="Age"
        rules={[
          {
            validator: (_, value) => {
              const name = z.number().min(17, { message: "Must be 17th or more" }).safeParse(value);
              if (name.success === true) {
                return Promise.resolve();
              } else {
                return Promise.reject(name.error.issues.map((err) => err.message));
              }
            },
          },
          { required: true, type: "number", min: 17, max: 99 },
        ]}
        className="mb-1 "
      >
        <InputNumber className="rounded-md border-slate-300" min={17} max={99} placeholder="0" />
      </Form.Item>

      <Form.Item
        hasFeedback
        name={["user", "description"]}
        label="Description"
        className="mb-1 "
        rules={[
          { required: true, message: "Description your problem" },
          {
            validator: (_, value) => {
              const name = z
                .string()
                .min(10, { message: "Min 10 characters" })
                .max(500, { message: "Max 500 characters" })
                .safeParse(value);
              if (name.success === true) {
                return Promise.resolve();
              } else {
                return Promise.reject(name.error.issues.map((err) => err.message));
              }
            },
          },
        ]}
      >
        <Input.TextArea showCount maxLength={500} />
      </Form.Item>
      <Form.Item
        label="Send Via"
        name={["user", "via"]}
        rules={[
          { required: true, message: "Please pick an send!" },
          {
            validator: (_, value) => {
              console.log(value);
            },
          },
        ]}
      >
        <Radio.Group>
          <Radio value="Email"> Email </Radio>
          <Radio value="Wa"> Whatshapp </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        className="mb-1"
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>I have read the a greement</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ ...withtailFormItemLayout.wrapperCol }} className="mb-0">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#D33830",
            },
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#D33830]"
            // onClick={(e) => handleSubmit(e, intialValues, "email")}
            icon={<MailOutlined style={{ fontSize: "20px" }} />}
          >
            <span className="align-top">Email</span>
          </Button>
        </ConfigProvider>

        {/* <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#3BE35A",
            },
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#3BE35A] ml-2"
            // onClick={(e) => handleSubmit(e, intialValues, "wa")}
            icon={<WhatsAppOutlined style={{ fontSize: "20px" }} />}
          >
            <span className="align-top">Wa</span>
          </Button>
        </ConfigProvider> */}
      </Form.Item>
    </Form>
  );
}
export default MyForm;

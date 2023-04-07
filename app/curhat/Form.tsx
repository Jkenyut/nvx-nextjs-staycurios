"use client";
import React, { FormEvent, useState, useEffect } from "react";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  message,
  Checkbox,
  Skeleton,
} from "antd";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import { z } from "zod";

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
      span: 16,
      offset: 7,
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
  const [scrollOffset, setScrollOffset] = useState(0);
  const [loading, Setloading] = useState(true);

  const updateScrollOffset = () => {
    if (scrollOffset > 700) {
      setTimeout(() => {
        Setloading(false);
      }, 2000);
    }
    setScrollOffset(window.pageYOffset);
    requestAnimationFrame(updateScrollOffset);
  };

  useEffect(() => {
    requestAnimationFrame(updateScrollOffset);
  });

  const [initialValues, setInitialValues] = useState<CurhatInput>({
    name: "",
    email: "",
    age: 0,
    description: "",
  });
  const [state, setState] = useState<number>(1);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  let codeNumber = Math.floor(Math.random() * 100 + 1);
  const onFinish = (values: any) => {
    if (state === 1) {
      window.open(
        `mailto:satrianursaputro06@gmail.com?subject=Sharing%20Session%20code%3A%20${codeNumber}&body=Hello%2C%20I%20would%20like%20to%20consult%20regarding%20code%20${codeNumber}.%20Please%20provide%20the%20following%20dataform%3A%0D%0Aname%20%3A%20${values.name}%0D%0Aemail%20%3A%20${values.email}%0D%0Aage%20%3A%20${values.age}%0D%0Adescription%20%3A%20${values.description}%0D%0Athank%20you.`
      );
    } else {
      window.open(
        `https://wa.me/081226428336?text=Hello%2C%20I%20would%20like%20to%20consult%20regarding%20code%20${codeNumber}.%20Please%20provide%20the%20following%20dataform%3A%0D%0Aname%20%3A%20${values.name}%0D%0Aemail%20%3A%20${values.email}%0D%0Aage%20%3A%20${values.age}%0D%0Adescription%20%3A%20${values.description}%0D%0Athank%20you.`
      );
    }
  };

  const onFinishFailed = () => {
    messageApi.error("Submit failed!");
  };

  return (
    <div>
      <p
        id="book"
        className="text-2xl font-semibold leading-relaxed text-center text-slate-400 sm:text-3xl"
      >
        Make a reservation now
      </p>
      <Skeleton active paragraph={{ rows: 6 }} loading={loading}>
        <Form
          className="mx-5 my-5 sm:mx-10  md:mx-16"
          initialValues={initialValues}
          onFinish={onFinish}
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="complex-form"
          onFinishFailed={onFinishFailed}
          style={{ maxWidth: 600 }}
          validateMessages={validateMessages}
        >
          {contextHolder}
          <Form.Item
            tooltip={{ color: "#2db7f5", title: "input name" }}
            name="name"
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
            <Input className="rounded-md border-slate-300" value={initialValues.name} />
          </Form.Item>

          <Form.Item
            tooltip={{ color: "#2db7f5", title: "input email" }}
            hasFeedback
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
            className="mb-1 "
          >
            <Input className="rounded-md border-slate-300" value={initialValues.email} />
          </Form.Item>

          <Form.Item
            tooltip={{ color: "#2db7f5", title: "input age" }}
            hasFeedback
            name="age"
            label="Age"
            rules={[
              {
                validator: (_, value) => {
                  const name = z
                    .number()
                    .min(17, { message: "Must be 17th or more" })
                    .safeParse(value);
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
            <InputNumber
              className="rounded-md border-slate-300"
              min={17}
              max={99}
              placeholder="0"
              value={initialValues.age}
            />
          </Form.Item>

          <Form.Item
            tooltip={{ color: "#2db7f5", title: "input problem" }}
            hasFeedback
            name="description"
            label="Problem"
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
            <Input.TextArea showCount maxLength={500} value={initialValues.description} />
          </Form.Item>

          <Form.Item
            className="mb-1 mx-auto"
            name="agreement"
            valuePropName="checked"
            wrapperCol={{ sm: { span: 16, offset: 8 }, xs: { span: 16 } }}
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>I have read the agreement</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{ sm: { span: 16, offset: 8 }, xs: { span: 16 } }}
            className="mb-0 "
          >
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
                onClick={() => setState(1)}
                icon={<MailOutlined style={{ fontSize: "20px" }} />}
              >
                <span className="align-top">Email</span>
              </Button>
            </ConfigProvider>

            <ConfigProvider
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
                onClick={() => setState(2)}
                icon={<WhatsAppOutlined style={{ fontSize: "20px" }} />}
              >
                <span className="align-top">Wa</span>
              </Button>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </Skeleton>
    </div>
  );
}
export default MyForm;

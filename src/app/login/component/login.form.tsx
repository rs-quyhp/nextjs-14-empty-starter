'use client';

import type { FormProps } from 'antd';
import { Form, Input } from 'antd';
import { useState } from 'react';
import LoginButton from './login.button';
import { handleLogin } from './login.form.action';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setLoading(true);
    await handleLogin(values as FormData);
    console.log('Success:', values);
    setLoading(false);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, marginTop: '50px' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <LoginButton loading={loading} />
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

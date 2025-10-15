'use client';

import { Button } from 'antd';

const LoginButton = ({ loading }: { loading: boolean }) => {
  return (
    <Button type="primary" htmlType="submit" loading={loading}>
      Submit
    </Button>
  );
};

export default LoginButton;

import React, { memo } from 'react';
import { Button, Form, Input } from 'tdesign-react';

const { FormItem } = Form;

export default memo((props: { current: number; callback: Function; steps: any[] }) => {
  const { current, callback, steps = [] } = props;

  const next = () => {
    callback('next');
  };

  const prev = () => {
    callback('back');
  };

  return (
    <Form labelWidth={100}>
      <FormItem label='Name' name='invoice' rules={[{ required: true, message: '请输入发票抬头', type: 'error' }]}>
        <Input placeholder='Applicant Name' />
      </FormItem>

      <FormItem
        label='Case ID'
        name='taxpayerId'
        rules={[{ required: true, message: '请输入纳税人识别号', type: 'error' }]}
      >
        <Input placeholder='Case ID' />
      </FormItem>

      <FormItem label='Justification' name='address'>
        <Input placeholder='Justification' />
      </FormItem>

      <FormItem label='Risk Level' name='bank'>
        <Input placeholder='Risk Level' />
      </FormItem>

      <FormItem label='Department' name='bankCount'>
        <Input placeholder='Department' />
      </FormItem>

      <FormItem>
      {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type='submit' onClick={() => next()}>
            下一步
          </Button>
        )}
      </FormItem>
    </Form>
  );
});

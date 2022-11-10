import React, { memo } from 'react';
import { Button, Form, Select, Input, Textarea } from 'tdesign-react';

const { FormItem } = Form;
const { Option } = Select;

const addressOptions = [
  {
    label: 'me@wisenance.com',
    value: '0',
  },
  {
    label: 'yuu@wisenance.com',
    value: '1',
  },
  {
    label: 'heyy@wisenance.com',
    value: '2',
  },
  {
    label: 'hoho@wisenance.com',
    value: '3',
  },
  {
    label: 'hehe@wisenance.com',
    value: '4',
  },
];

export default memo((props: { current: number; callback: Function; steps: any[] }) => {
  const { current, callback, steps } = props;

  const next = () => {
    callback('next');
  };

  const prev = () => {
    callback('back');
  };

  return (
    <Form labelWidth={100}>
      <FormItem label='Dispute Item' name='receiver' rules={[{ required: true, message: '请输入收货人', type: 'error' }]}>
        <Input placeholder='Dispute Item' />
      </FormItem>

      <FormItem
        label='Dispute Data'
        name='receiverPhone'
        rules={[{ required: true, message: '请输入收货人手机号', type: 'error' }]}
      >
        <Input placeholder='Dispute Data' />
      </FormItem>

      <FormItem
        label='Analyst'
        name='receiverAddress'
        rules={[{ required: true, message: '请选择收货地址', type: 'error' }]}
      >
        <Select value='3' placeholder='Analyst'>
          {addressOptions.map((item: { label: string; value: string }) => {
            const { label, value } = item;
            return <Option key={value} label={label} value={value} />;
          })}
        </Select>
      </FormItem>

      <FormItem
        label='Remarks'
        name='taxpayerId'
        rules={[{ required: true, message: '请输入详细地址', type: 'error' }]}
      >
        <Textarea placeholder='Remarks' value={'哈哈哈'} />
      </FormItem>

      <FormItem>
      {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous Step
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type='submit' onClick={() => next()}>
            Next Step
          </Button>
        )}
      </FormItem>
    </Form>
  );
});

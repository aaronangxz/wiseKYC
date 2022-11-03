import React, { memo } from 'react';
import { Alert, Button, Form, Select } from 'tdesign-react';
import Style from '../index.module.less';

const { FormItem } = Form;
const { Option } = Select;

const message = [
  '1. Dispute requests require approval from Risk & Compliance Department.',
  ' 2. Please select the appropriate urgency level with supporting reason.',
  ' 3. Contact Risk On-Call at 13300001111 for live support.',
];

const names = [
  {
    label: 'Incorrect flagging',
    value: 'A',
  },
  {
    label: 'Alter KYC Parameters',
    value: 'B',
  },
  {
    label: 'Manual Override',
    value: 'C',
  },
];

const types = [
  {
    label: 'Low',
    value: 'A',
  },
  {
    label: 'Medium',
    value: 'B',
  },
  {
    label: 'High',
    value: 'C',
  },
];

export default memo((props: { callback: Function }) => {
  const { callback } = props;
  const next = () => {
    callback('next');
  };

  return (
    <>
      <div className={Style.alertBox}>
        <Alert theme='error' message={message} title='Note:' maxLine={0}  />
      </div>
      <Form labelWidth={100}>
        <FormItem label='Reason' name='name' rules={[{ required: true, message: 'Select Reason', type: 'error' }]}>
          <Select value='A' placeholder='Select Reason'>
            {names.map((item) => {
              const { label, value } = item;
              return <Option label={label} value={value} key={value} />;
            })}
          </Select>
        </FormItem>

        <FormItem label='Urgency' name='type' rules={[{ required: true, message: 'Select Urgency', type: 'error' }]}>
          <Select value='A' placeholder='Select Urgency'>
            {types.map((item) => {
              const { label, value } = item;
              return <Option label={label} value={value} key={value} />;
            })}
          </Select>
        </FormItem>
        <FormItem>
          <Button type='submit' onClick={() => next()}>
            Submit
          </Button>
        </FormItem>
      </Form>
    </>
  );
});

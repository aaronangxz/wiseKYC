import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, MessagePlugin, Input, Checkbox, Button, FormInstanceFunctions, SubmitContext } from 'tdesign-react';
import { LockOnIcon, UserIcon, BrowseOffIcon, BrowseIcon, RefreshIcon } from 'tdesign-icons-react';
import classnames from 'classnames';
import QRCode from 'qrcode.react';
import { useAppDispatch } from 'modules/store';
import { login } from 'modules/user';
import useCountdown from '../../hooks/useCountDown';

import Style from './index.module.less';

const { FormItem } = Form;

export type ELoginType = 'password' | 'phone' | 'qrcode';

export default function Login() {
  const [loginType, changeLoginType] = useState<ELoginType>('password');
  const [showPsw, toggleShowPsw] = useState(false);
  const { countdown, setupCountdown } = useCountdown(60);
  const formRef = useRef<FormInstanceFunctions>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (e: SubmitContext) => {
    if (e.validateResult === true) {
      try {
        const formValue = formRef.current?.getFieldsValue?.(true) || {};
        await dispatch(login(formValue));
        console.log(e);
        MessagePlugin.success('Successfully Login');

        navigate('/dashboard/base');
      } catch (e) {
        console.log(e);
        MessagePlugin.error('Failed to Login');
      }
    }
  };

  const switchType = (val: ELoginType) => {
    formRef.current?.reset?.();
    changeLoginType(val);
  };

  return (
    <div>
      <Form
        ref={formRef}
        className={classnames(Style.itemContainer, `login-${loginType}`)}
        labelWidth={0}
        onSubmit={onSubmit}
      >
        {loginType === 'password' && (
          <>
            <FormItem name='account' rules={[{ required: true, message: 'Required', type: 'error' }]}>
              <Input size='large' placeholder='Enter WiseNance Email Acconut' prefixIcon={<UserIcon />}></Input>
            </FormItem>
            <FormItem name='password' rules={[{ required: true, message: 'Required', type: 'error' }]}>
              <Input
                size='large'
                type={showPsw ? 'text' : 'password'}
                clearable
                placeholder='Enter Password'
                prefixIcon={<LockOnIcon />}
                suffixIcon={
                  showPsw ? (
                    <BrowseIcon onClick={() => toggleShowPsw((current) => !current)} />
                  ) : (
                    <BrowseOffIcon onClick={() => toggleShowPsw((current) => !current)} />
                  )
                }
              />
            </FormItem>
            <div className={classnames(Style.checkContainer, Style.rememberPwd)}>
              <Checkbox>Remember Me</Checkbox>
              <span className={Style.checkContainerTip}>Forget Account?</span>
            </div>
          </>
        )}

        {/* 扫码登陆 */}
        {loginType === 'qrcode' && (
          <>
            <div className={Style.tipContainer}>
              <span className='tip'>Login with WiseTalk</span>
              <span className='refresh'>
                Refresh <RefreshIcon />
              </span>
            </div>
            <QRCode value='' size={200} />
          </>
        )}
        {/* // 手机号登陆 */}
        {loginType === 'phone' && (
          <>
            <FormItem name='phone' rules={[{ required: true, message: 'Required', type: 'error' }]}>
              <Input maxlength={11} size='large' placeholder='Enter your mobile number' prefixIcon={<UserIcon />} />
            </FormItem>
            <FormItem name='verifyCode' rules={[{ required: true, message: 'Required', type: 'error' }]}>
              <Input size='large' placeholder='Enter verification code' />
              <Button
                variant='outline'
                className={Style.verificationBtn}
                disabled={countdown > 0}
                onClick={setupCountdown}
              >
                {countdown === 0 ? 'Send Code' : `Resend ${countdown}s`}
              </Button>
            </FormItem>
          </>
        )}
        {loginType !== 'qrcode' && (
          <FormItem className={Style.btnContainer}>
            <Button block size='large' type='submit'>
              Login
            </Button>
          </FormItem>
        )}
        <div className={Style.switchContainer}>
          {loginType !== 'password' && (
            <span className='tip' onClick={() => switchType('password')}>
              Login with Email
            </span>
          )}
          {loginType !== 'qrcode' && (
            <span className='tip' onClick={() => switchType('qrcode')}>
              Login with WiseTalk
            </span>
          )}
          {loginType !== 'phone' && (
            <span className='tip' onClick={() => switchType('phone')}>
              Login with Mobile Number
            </span>
          )}
        </div>
      </Form>
    </div>
  );
}

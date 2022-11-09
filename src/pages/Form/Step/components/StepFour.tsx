import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleFilledIcon } from 'tdesign-icons-react';
import { Button } from 'tdesign-react';
import Style from './index.module.less';

export default memo((props: { callback: Function }) => {
  const navigate = useNavigate();
  const { callback } = props;

  const onClickAgain = () => {
    callback('first');
  };

  const onCheck = () => {
    const url = '/detail/advanced';
    navigate(url);
  };

  return (
    <div className={Style.stepFourWrapper}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <CheckCircleFilledIcon className={Style.icon} />
        <div className={Style.title}>Dispute Submitted</div>
        <p>Ticket will be processed within 24 hours.</p>
        <div className='tdesign-demo-block-column' style={{ marginTop: '20px' }}>
          <Button theme='primary' variant='base' onClick={onClickAgain}>
            Apply Again
          </Button>
          <Button theme='default' variant='base' style={{ marginLeft: '15px' }} onClick={onCheck}>
            View Progress
          </Button>
        </div>
      </div>
    </div>
  );
});

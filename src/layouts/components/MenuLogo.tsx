import React, { memo } from 'react';
import Style from './Menu.module.less';
import FullLogo from 'assets/svg/assets-logo-full.svg?component';
import MiniLogo from 'assets/svg/assets-t-logo.svg?component';
import { useNavigate } from 'react-router-dom';

interface IProps {
  collapsed?: boolean;
}

export default memo((props: IProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    
    <div className={Style.menuLogo} onClick={handleClick}>
      {props.collapsed ? <img src="https://img.icons8.com/avantgarde/50/000000/approve.png"/> : <img src="https://img.icons8.com/avantgarde/50/000000/approve.png"/> }
      <h3>WiseKYC</h3>
    </div>
  );
});

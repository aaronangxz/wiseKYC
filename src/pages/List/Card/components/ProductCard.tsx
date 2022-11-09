import React from 'react';
import { Card, Avatar, Tag, Dropdown, Button } from 'tdesign-react';
import { UserAvatarIcon, CalendarIcon, LaptopIcon, ShopIcon, ServiceIcon, Icon,DashboardIcon } from 'tdesign-icons-react';
import { IProduct } from 'services/product';
import Style from './ProductCard.module.less';

const { Group: AvatarGroup } = Avatar;
const icons = [UserAvatarIcon, CalendarIcon, LaptopIcon, ShopIcon, ServiceIcon];

const CardIcon = React.memo(() => {
  // const random = Math.floor(Math.random() * icons.length);
  const Icon = DashboardIcon;
  return <Icon />;
});

const ProductCard = ({ product }: { product: IProduct }) => {
  const disabled = !product.isSetup;
  return (
    <Card headerBordered
      className={Style.panel}
      actions={
        disabled ? (
          <Tag theme='default' disabled={true}>
            Inactive
          </Tag>
        ) : (
          <Tag theme='success'>Active</Tag>
        )
      }
      avatar={
        <Avatar size='56px'>
          <CardIcon />
        </Avatar>
      }
      footer={
        <div className={Style.footer}>
          <AvatarGroup cascading='left-up'>
            <Avatar>{String.fromCharCode(64 + product.type || 0)}</Avatar>
            <Avatar>+</Avatar>
          </AvatarGroup>
          <Dropdown
            trigger={'click'}
            options={[
              {
                content: 'Manage',
                value: 1,
              },
              {
                content: 'Delete',
                value: 2,
              },
            ]}
          >
            <Button theme='default' variant='text' disabled={disabled}>
              <Icon name='more' size='16' />
            </Button>
          </Dropdown>
        </div>
      }
    >
      <div className={Style.name}>{product?.name}</div>
      <div className={Style.description}>{product?.description}</div>
    </Card>
  );
};

export default React.memo(ProductCard);

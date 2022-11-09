import React, { memo, useState } from 'react';
import { Tabs, List, Tag, Row, Col, Popup } from 'tdesign-react';
import { AddRectangleIcon, DeleteIcon, ChatIcon } from 'tdesign-icons-react';
import classnames from 'classnames';
import { dataItemList, IItem, TStatus } from './consts';
import Style from './index.module.less';

const { TabPanel } = Tabs;
const { ListItem } = List;

const typeMap: {
  [key: number]: 'default' | 'primary' | 'warning' | 'danger' | 'success';
} = {
  1: 'danger',
  2: 'primary',
  3: 'warning',
};

interface IMsgListProps {
  list: IItem[];
  onDelete: Function;
  onUpdate: Function;
}

const MsgList = memo((props: IMsgListProps) => {
  const { list, onUpdate, onDelete } = props;
  return (
    <List className={Style.msgList}>
      {list?.map((item) => (
        <ListItem
          className={Style.listItem}
          key={item.id}
          action={
            <li>
              <div className={Style.createTime}>{item.createTime}</div>
              <div className={Style.action}>
                <Row gutter={8}>
                  <Col>
                    {item.status === 1 && (
                      <Popup trigger='hover' showArrow content='Mark as Read'>
                        <AddRectangleIcon onClick={() => onUpdate(item, 2)} />
                      </Popup>
                    )}
                    {item.status === 2 && (
                      <Popup trigger='hover' showArrow content='Mark as Unread'>
                        <ChatIcon onClick={() => onUpdate(item, 1)} />
                      </Popup>
                    )}
                  </Col>
                  <Col>
                    <Popup trigger='hover' showArrow content='Delete'>
                      <DeleteIcon onClick={() => onDelete(item)} />
                    </Popup>
                  </Col>
                </Row>
              </div>
            </li>
          }
        >
          <div
            className={classnames(Style.content, {
              [Style.unread]: item.status === 1,
            })}
          >
            <Tag variant='light' theme={typeMap[item.type]} className={Style.tag}>
              {item.tag}
            </Tag>
            {item.content}
          </div>
        </ListItem>
      ))}
      {list.length === 0 && <div className={Style.noData}>暂无数据</div>}
    </List>
  );
});

export default memo(() => {
  const [list, setList] = useState(dataItemList);

  const deleteItem = (item: IItem) => {
    setList((value) => value.filter((val) => val.id !== item.id));
  };

  const updateStatus = (item: IItem, status: TStatus) => {
    setList((value) => {
      value.forEach((val) => {
        if (val.id === item.id) {
          val.status = status;
        }
        return val;
      });
      return [...value];
    });
  };

  return (
    <div>
      <section className={Style.secondaryNotification}>
        <Tabs placement='top' size='medium' defaultValue='1'>
          <TabPanel value='1' label='All'>
            <MsgList list={list} onDelete={deleteItem} onUpdate={updateStatus} />
          </TabPanel>
          <TabPanel value='2' label='Unread'>
            <MsgList list={list.filter((item) => item.status === 1)} onDelete={deleteItem} onUpdate={updateStatus} />
          </TabPanel>
          <TabPanel value='3' label='Read'>
            <MsgList list={list.filter((item) => item.status === 2)} onDelete={deleteItem} onUpdate={updateStatus} />
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
});

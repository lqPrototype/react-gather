import { Col, Empty, Space, Tabs } from 'antd';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { prefix } from '../constants';
import TabsCascaderContainer from '../hooks/index';
import { ITabsArr, Option, TabsCascaderProps } from '../interface';
import { RightOutlined, LoadingOutlined } from '@ant-design/icons';

const TabsCascaderCardList = (props: TabsCascaderProps) => {
  const [loading, setLoading] = useState(false);
  const { menuData, menuPath, handleCascaderChange } = TabsCascaderContainer.useContainer();
  const [activeKey, setActiveKey] = useState<string | undefined>();

  useEffect(() => {
    const restMenuData = menuData[menuData.length - 1];
    setActiveKey(String(restMenuData?.id))
  }, [menuData]);

  const handleClick = (node: Option, depth: number) => {
    setLoading(true);
    handleCascaderChange(node, depth)
  }

  return (
    <Tabs activeKey={activeKey} onChange={setActiveKey} size="small">
      {menuData?.map((item: ITabsArr, depthParent) => (
        <Tabs.TabPane
          tab={item.title}
          key={item.id}
          className={classnames(
            {
              [`${prefix}-no-center`]: !item?.pane?.length,
            },
          )}
        >
          <Space>
            {item?.pane?.length ? (item?.pane || []).map((paneArr: Option, depth) => {
              const { children, label, value } = paneArr;
              const hasChildren = children && children.length > 0;
              return (
                <Col
                  onClick={() => handleClick(paneArr, depthParent)}
                  className={classnames(`${prefix}-item`, {
                    [`${prefix}-item-active`]: !!menuPath.find((item) => item.value == value),
                  })}
                  key={paneArr.value}
                >
                  <p className={`${prefix}-item-label`}>
                    <span>{label}</span>
                    {!hasChildren ? null : loading && !children?.length ? (
                      <LoadingOutlined className={`${prefix}-item-icon`} />
                    ) : (
                      <RightOutlined className={`${prefix}-item-icon`} />
                    )}
                  </p>
                </Col>
              );
            }) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          </Space>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};

export default TabsCascaderCardList;

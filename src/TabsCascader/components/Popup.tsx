import React, { useRef } from 'react';
import { prefix } from '../constants';
import { Empty } from 'antd';
import TabsCascaderCardList from './Tabs';
import { TabsCascaderProps } from '../interface';

/**
 * extend properties
 */
export interface PopupProps extends TabsCascaderProps {
  // 
}

const TabsCascaderPopup = (props: PopupProps) => {
  const ref = useRef(null);
  const { options } = props;
  return (
    <div className={`${prefix}-popupBox`} ref={ref}>
      {options && options.length ? (
        <TabsCascaderCardList {...props} />
      ) : (
        <Empty style={{ width: 240 }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </div>
  );
};

export default TabsCascaderPopup;

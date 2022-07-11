import React, { useCallback, useImperativeHandle } from 'react';
import Trigger from 'rc-trigger';
import BUILT_IN_PLACEMENTS, { prefix } from './constants';
import OverflowComponent from './components/Overflow';
import TabsCascaderContainer from './hooks';
import TabsCascaderPopup from './components/Popup';
import { Option, TabsCascaderComponent, TabsCascaderProps, TabsCascaderRef, ValueType } from './interface';
import './style';
// Todo： 打包记得注释
import 'antd/dist/antd.css';

const Component = React.memo(
  React.forwardRef((props: TabsCascaderProps, ref: React.Ref<TabsCascaderRef>) => {
    const {
      disabled,
      placement = 'bottomLeft',
      getPopupContainer,
      popupStyle,
    } = props;

    const { active, flattenData, removeNode, value, setActive, onClearTabs, setValue, hackValue, menuData } = TabsCascaderContainer.useContainer();

    const handleItemRemove = useCallback(
      (item: Option) => {
        const nextValue: ValueType[] = value.filter((v) => v !== item.value)
        hackValue.current = nextValue
        setValue(nextValue);
        removeNode(item.value)
      },
      [value]
    )

    const handleClear = () => {
      hackValue.current = [];
      setValue([])
      onClearTabs()
    }

    useImperativeHandle(
      ref,
      () => {
        return {
          flattenData: () => flattenData
        }
      },
      [flattenData]
    )

    return (
      <Trigger
        action={!disabled ? ['click'] : []}
        prefixCls={prefix}
        popup={<TabsCascaderPopup {...props} />}
        popupVisible={disabled ? false : active}
        onPopupVisibleChange={(popupVisible) => setActive(popupVisible)}
        builtinPlacements={BUILT_IN_PLACEMENTS}
        popupPlacement={placement}
        popupTransitionName={'ant-slide-up'}
        getPopupContainer={getPopupContainer}
        destroyPopupOnHide
        popupStyle={popupStyle || {
          position: 'absolute',
          zIndex: 1050,
        }}
      >
        {/* 必须加 */}
        <div>
          <OverflowComponent
            onRemove={handleItemRemove}
            onClear={handleClear}
            {...props}
          />
        </div>
      </Trigger>
    );
  })
) as TabsCascaderComponent;

const TabsCascader: React.FunctionComponent<TabsCascaderProps> = React.forwardRef(
  (props: TabsCascaderProps, ref: React.Ref<TabsCascaderRef>) => {
    return (
      <TabsCascaderContainer.Provider initialState={props}>
        <Component {...props} ref={ref} />
      </TabsCascaderContainer.Provider>
    );
  },
);

export default TabsCascader;

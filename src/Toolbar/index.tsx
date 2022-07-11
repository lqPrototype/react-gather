import React from 'react';
import classNames from 'classnames';
import { ToolbarItem, ToolbarItemProps } from './item';
import { ToolbarGroup, ToolbarGroupProps } from './group';
import { ToolbarContext } from './context';
import './style';

export interface ToolbarProps {
  prefixCls?: string;
  className?: string;
  extra?: React.ReactNode;
  size?: 'small' | 'big';
  hoverEffect?: boolean;
  onClick?: (name: string, value?: any) => void;
  split?: 'vertical' | 'horizontal';
}

const Toolbar: React.FC<ToolbarProps> & {
  Item: React.FC<ToolbarItemProps>;
  Group: React.FC<ToolbarGroupProps>;
} = (props) => {
  const {
    prefixCls = 'react-gather',
    className,
    children,
    extra,
    size,
    hoverEffect = true,
    split = 'vertical',
    onClick,
  } = props;

  const onItemClick = (key: string, value?: any) => {
    if (onClick) {
      onClick(key, value);
    }
  };

  const baseClsVertical = `${prefixCls}-toolbar`;

  const baseClsHorizontal = `${prefixCls}-toolbar-horizontal`;

  const baseCls = split === 'vertical' ? baseClsVertical : baseClsHorizontal;

  return (
    <div
      className={classNames(baseCls, className, {
        [`${baseCls}-${size}`]: size,
        [`${baseCls}-hover-effect`]: hoverEffect,
      })}
    >
      <div className={`${baseCls}-content`}>
        <div className={`${baseCls}-content-inner`}>
          <ToolbarContext.Provider
            value={{
              prefixCls: baseCls,
              onClick: onItemClick,
              split,
            }}
          >
            {children}
          </ToolbarContext.Provider>
        </div>
        {extra && <div className={`${baseCls}-content-extras`}>{extra}</div>}
      </div>
    </div>
  );
};

Toolbar.Item = ToolbarItem;

Toolbar.Group = ToolbarGroup;

export default Toolbar;

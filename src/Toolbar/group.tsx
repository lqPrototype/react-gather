import React, { useContext } from 'react';
import classNames from 'classnames';
import { ToolbarContext } from './context';

export const ToolbarGroup: React.FC<ToolbarGroupProps> = ({
  children,
  className,
  dividingLine = true,
}) => {
  const { prefixCls, split } = useContext(ToolbarContext);
  return (
    <div
      className={classNames(
        `${prefixCls}-group`,
        {
          [`${prefixCls}-dividingLine`]: !dividingLine,
          [`${prefixCls}-${split}`]: split === 'vertical',
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export interface ToolbarGroupProps {
  className?: string;
  dividingLine?: boolean;
}

import { Tooltip, TooltipProps } from 'antd';
import React from 'react';
import { useContext } from 'react';
import { ToolbarContext, ToolbarContextContexts } from './context';
import classNames from 'classnames';

export interface ToolbarItemInnerProps extends ToolbarItemProps {
  context: ToolbarContextContexts;
}

const ToolbarItemInner: React.FC<ToolbarItemInnerProps> = (props) => {
  const { className, hidden, disabled, active, icon, text, tooltip, children, name, tooltipProps } =
    props;
  const handleClick = () => {
    if (!props.disabled) {
      if (name) {
        props.context.onClick(name);
      }
    }
  };

  const renderButton = () => {
    const { prefixCls } = props.context;
    const baseCls = `${prefixCls}-item`;
    const propsCompose: any = {
      onClick: handleClick,
      className: classNames(
        baseCls,
        {
          [`${baseCls}-hidden`]: hidden,
          [`${baseCls}-active`]: active,
          [`${baseCls}-disabled`]: disabled,
        },
        className,
      ),
    };

    if (tooltip) {
      propsCompose.title = tooltip;
    }

    const button = (
      <button type="button" {...propsCompose}>
        {icon && React.isValidElement(icon) && <span className={`${baseCls}-icon`}>{icon}</span>}
        {(text || children) && <span className={`${baseCls}-text`}>{text || children}</span>}
      </button>
    );

    if (tooltip && !disabled) {
      return (
        <Tooltip
          title={tooltip}
          placement="bottom"
          mouseEnterDelay={0}
          mouseLeaveDelay={0}
          {...tooltipProps}
        >
          {button}
        </Tooltip>
      );
    }

    return button;
  };

  return <>{renderButton()}</>;
};

export const ToolbarItem: React.FC<ToolbarItemProps> = (props) => {
  const context = useContext(ToolbarContext);
  return <ToolbarItemInner context={context} {...props} />;
};

export interface ToolbarItemProps {
  className?: string;
  name: string;
  icon?: React.ReactNode;
  text?: string | React.ReactNode;
  hidden?: boolean;
  disabled?: boolean;
  active?: boolean;
  children?: React.ReactNode;
  tooltip?: string;
  tooltipProps?: TooltipProps;
}

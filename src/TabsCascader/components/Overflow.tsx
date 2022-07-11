import React, { useCallback } from 'react';
import classnames from 'classnames';
import { CloseCircleFilled } from '@ant-design/icons';
import Overflow from 'rc-overflow';
import { Option, TabsCascaderProps } from '../interface';
import { prefix } from '../constants';
import Tag from './Tag';
import { keyBy } from 'lodash';
import TabsCascaderContainer from '../hooks';

/**
 * extend properties
 */
export interface OverflowComponentProps extends TabsCascaderProps {
  onRemove?: (item: Option) => void;
  onClear?: () => void;
}

const OverflowComponent = (props: OverflowComponentProps) => {
  const {
    className,
    value: valueProps,
    disabled,
    placeholder,
    allowClear,
    size = 'default',
    maxTagCount = 'responsive',
    onRemove,
    onClear,
    renderTitle,
    ...rest
  } = props;

  const { hackValue, selectedItems } = TabsCascaderContainer.useContainer();

  const selectedItemsMap = keyBy(selectedItems, 'value');

  const renderItem = useCallback(
    (item: string) => {
      return (
        <Tag
          key={item}
          onRemove={onRemove}
          item={selectedItemsMap[item] || item}
          renderTitle={renderTitle}
        />
      );
    },
    [selectedItemsMap, renderTitle, onRemove],
  );

  const renderRest = useCallback(
    (omittedValues: string[]) => (
      <Tag
        closable={false}
        renderTitle={() => <span>+{omittedValues.length}...</span>}
        item={{
          label: '',
          value: '',
        }}
      />
    ),
    [],
  );

  const handleClear = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      event.stopPropagation();
      if (onClear) {
        onClear();
      }
    },
    [onClear],
  );

  const values = valueProps || hackValue.current || [];

  console.log('overflow:', { selectedItems, valueProps, 'hackValue.current': hackValue.current })

  return (
    <div
      className={classnames(prefix, 'ant-select ant-tree-select ant-select-multiple', className, {
        [`ant-select-disabled`]: !!disabled,
        [`ant-select-lg`]: size === 'large',
        [`ant-select-sm`]: size === 'small',
      })}
      style={{ width: 250 }}
      {...rest}
    >
      <div
        className="ant-select-selector"
      >
        {values.length ? (
          <Overflow
            prefixCls={`${prefix}-overflow`}
            data={values}
            renderRest={renderRest}
            renderItem={renderItem}
            maxCount={maxTagCount}
          />
        ) : (
          <span className={`ant-select-selection-placeholder`}>{placeholder}</span>
        )}
      </div>
      {!disabled && allowClear ? (
        <span className="ant-select-clear" onClick={handleClear}>
          <CloseCircleFilled />
        </span>
      ) : undefined}
    </div>
  );
};

export default OverflowComponent;

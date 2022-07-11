

import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import { Option, TabsCascaderProps } from '../interface';
import { OverflowComponentProps } from './Overflow';

const Tag = (props: {
    onRemove?: OverflowComponentProps['onRemove']
    item: Option;
    renderTitle: TabsCascaderProps['renderTitle']
    closable?: boolean
}) => {
    const {
        onRemove,
        item,
        renderTitle = () => undefined,
        closable = true,
    } = props
    const handleRemove = (
        event: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => {
        event.stopPropagation()
        if (onRemove) {
            onRemove(item)
        }
    }

    const value = (item.value || item) as string
    const title = renderTitle(value) || item.label || item

    return (
        <span className="ant-select-selection-item">
            <span className="ant-select-selection-item-content">{title}</span>
            {closable && (
                <span className="ant-select-selection-item-remove">
                    <CloseOutlined onClick={handleRemove} />
                </span>
            )}
        </span>
    )
}

export default Tag
/**
 * label: 基本用法
 * desc: <TabsCascader options={options} onChange={onChange} placeholder="Please select" />
 */
import React from 'react';
import TabsCascader from '../index';
import { UnorderedListOutlined } from '@ant-design/icons'
import { ValueType } from '../interface';

interface Option {
  value: string | number;
  label: string | React.ReactNode;
  children?: Option[];
}

const options: Option[] = [
  {
    value: '1',
    label: (
      <>
        <UnorderedListOutlined /> Node1
      </>
    ),
    children: [
      {
        value: '1-1',
        label: (
          <>
            <UnorderedListOutlined /> Node1-1
          </>
        ),
      },
      {
        value: '1-2',
        label: (
          <>
            <UnorderedListOutlined /> Node1-2
          </>
        ),
      },
    ],
  },
  {
    value: '2',
    label: 'Node2',
  },
]

export default () => {
  const onChange = (value: ValueType[]) => {
    console.log({ value });
  };

  return (
    <TabsCascader defaultTabsText={<span><UnorderedListOutlined />请选择</span>} options={options} onChange={onChange} placeholder="Please select" allowClear />
  );
};

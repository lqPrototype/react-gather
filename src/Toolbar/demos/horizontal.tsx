/**
 * title: 基本用法
 * desc: 垂直方向
 */
import React from 'react';
import Toolbar from '../index';
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  UndoOutlined,
  RedoOutlined,
  DeleteOutlined,
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';

const Item = Toolbar.Item;
const Group = Toolbar.Group;

const BorizontalToolBar = () => {
  return (
    <Toolbar onClick={(vl: any) => console.log(vl)} split="horizontal">
      <Group dividingLine={false}>
        <Item name="zoomIn" tooltip="Zoom In (Cmd +)" icon={<ZoomInOutlined />} />
        <Item name="zoomOut" tooltip="Zoom Out (Cmd -)" icon={<ZoomOutOutlined />} />
      </Group>
      <Group dividingLine={false}>
        <Item name="undo" tooltip="Undo (Cmd + Z)" icon={<UndoOutlined />} />
        <Item name="redo" tooltip="Redo (Cmd + Shift + Z)" icon={<RedoOutlined />} />
      </Group>
      <Group dividingLine={false}>
        <Item name="delete" icon={<DeleteOutlined />} disabled={true} tooltip="Delete (Delete)" />
      </Group>
      <Group dividingLine={false}>
        <Item name="bold" icon={<BoldOutlined />} active={true} tooltip="Bold (Cmd + B)" />
        <Item name="italic" icon={<ItalicOutlined />} tooltip="Italic (Cmd + I)" />
        <Item
          name="strikethrough"
          icon={<StrikethroughOutlined />}
          tooltip="Strikethrough (Cmd + Shift + x)"
        />
        <Item name="underline" icon={<UnderlineOutlined />} tooltip="Underline (Cmd + U)" />
      </Group>
    </Toolbar>
  );
};

export default BorizontalToolBar;

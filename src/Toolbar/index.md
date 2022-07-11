---
nav:
  title: 组件
  path: /components
group:
  title: 工具栏
---

# Toolbar

> 工具栏

## 何时使用

- 经常在画布需求里面，常常有工具栏 🔧，可以快速帮你解决 UI

## 代码演示：

<code src="./demos/size.tsx" />

<code src="./demos/basic.tsx" />

<code src="./demos/horizontal.tsx" />

## API:

```javascript
<Toolbar onClick={(value) => {}} extra={<span>Extra Component</span>}>
  <Group>
    <Item name="zoomIn" tooltip="Zoom In (Cmd +)" icon={<ZoomInOutlined />} />
    <Item name="zoomOut" tooltip="Zoom Out (Cmd -)" icon={<ZoomOutOutlined />} />
  </Group>
  <Group>
    <Item name="undo" tooltip="Undo (Cmd + Z)" icon={<UndoOutlined />} />
    <Item name="redo" tooltip="Redo (Cmd + Shift + Z)" icon={<RedoOutlined />} />
  </Group>
  <Group>
    <Item name="delete" icon={<DeleteOutlined />} disabled={true} tooltip="Delete (Delete)" />
  </Group>
  <Group>
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
```

### Toolbar

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| prefixCls | 前缀 | string | 'react-gather' | 1.0 |
| className | className | string | undefined | 1.0 |
| extra | 额外的元素 | React.ReactNode | undefined | 1.0 |
| size | 大小 | "small big" | undefined | 1.0 |
| hoverEffect | hover 是否有效果 | boolean | true | 1.0 |
| onClick | 回调函数 | (name: string, value?: any) => void; | (name: string, value?: any) => void; | 1.0 |
| split | 水平布局还是垂直布局 | "vertical horizontal" | vertical | 1.0 |

### Toolbar.Item

| 参数         | 说明         | 类型            | 默认值    | 版本 |
| ------------ | ------------ | --------------- | --------- | ---- |
| className    | className    | string          | undefined | 1.0  |
| name         | 名称         | string          | undefined | 1.0  |
| icon         | 图标         | React.ReactNode | undefined | 1.0  |
| text         | 名称         | string          | undefined | 1.0  |
| hidden       | 隐藏         | boolean         | undefined | 1.0  |
| disabled     | 禁用         | boolean         | undefined | 1.0  |
| active       | 激活         | boolean         | undefined | 1.0  |
| tooltip      | tooltip name | string          | undefined | 1.0  |
| tooltipProps | tooltipProps | TooltipProps    | undefined | 1.0  |

### Toolbar.Group

| 参数         | 说明      | 类型    | 默认值    | 版本 |
| ------------ | --------- | ------- | --------- | ---- |
| dividingLine | 是否分割  | boolean | true      | 1.0  |
| className    | className | string  | undefined | 1.0  |

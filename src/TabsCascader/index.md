---
nav:
  title: 组件
  path: /components
group:
  title: 卡片级联选择框
---

# TabsCascader

> 卡片级联选择框

## 何时使用

- 需要从视觉上一目了然，看到更多内容，从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。

## 代码演示：

<code src="./demos/basic.tsx" />

## API:

```javascript
<TabsCascader options={options} onChange={onChange} />
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否清除 | boolean | true | 1.0 |
| defaultTabsText | 默认 tabs 卡片名称 | 'React.ReactNode' | 请选择 | 1.0 |
| defaultValue | 默认值 | ValueType[] | [] | 1.0 |
| value | 指定选中项 | ValueType[] | [] | 1.0 |
| onChange | 选择完成后的回调 | (value: ValueType[]) => void; | undefined | 1.0 |
| options | 可选项数据源 | Option[] | [] | 1.0 |
| disabled | 是否禁用 | boolean | false | 1.0 |
| placeholder | 输入框占位文本 | string | undefined | 1.0 |
| className | 自定义类名 | string | undefined | 1.0 |
| placement | 浮层预设位置：bottomLeft bottomRight topLeft topRight | SelectCommonPlacement | 'bottomLeft' | 1.0 |
| size | 输入框大小，可选 large default small | SizeType | undefined | 1.0 |
| getPopupContainer |  | getPopupContainer | HTMLElement | 1.0 |
| popupStyle | 样式 | React.CSSProperties | undefined | 1.0 |
| maxTagCount | 最大标签数量 | responsive | 'responsive' | 1.0 |
| renderTitle | 自定义渲染卡片 | (value: string) => React.ReactNode | undefined | 1.0 |

### Option

```typescript
interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
}

export interface OptionParent extends Option {
  parent: Option;
}

export type ValueType = number | string;

export type SizeType = 'small' | 'large' | 'default';

export const tuple = <T extends string[]>(...args: T) => args;

const SelectPlacements = tuple('bottomLeft', 'bottomRight', 'topLeft', 'topRight');

export type SelectCommonPlacement = typeof SelectPlacements[number];
```

> 注意，如果需要获得中国省市区数据，可以参考 ant-design [china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)。

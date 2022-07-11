import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createContainer } from 'unstated-next';
import { ITabsArr, Option, OptionParent, TabsCascaderProps, ValueType } from '../interface';
import { flattenTree, paneLevelOne } from '../libs/utils';
import useControlled from './useControlled';

/**
 * context
 * @param initialStateProps
 * @returns
 */
const useTabsCascader = (initialStateProps?: TabsCascaderProps) => {
  const {
    defaultValue = [],
    value: tabsValue,
    options = [],
    onChange,
    defaultTabsText = '请选择'
  } = initialStateProps || {};
  const [active, setActive] = useState(false);
  const [value, setValue] = useControlled(tabsValue, defaultValue);
  const hackValue = useRef(value)
  const [flattenData, setFlattenData] = useState<OptionParent[]>(flattenTree(options));

  useEffect(() => {
    setFlattenData(flattenTree(options));
  }, [options]);
  // 

  const [menuData, setMenuData] = useState<ITabsArr[]>(() => paneLevelOne(flattenData.filter((item: OptionParent) => !item.parent), defaultTabsText))
  const [menuPath, setMenuPath] = useState<Option[]>([]); // 选择路径

  // 当前激活tab， 也是最后一个元素的缓存
  const lastItemRef = useRef<any>(null);

  const handleCascaderChange = useCallback((node: Option, depth: number) => {
    const { children = [], value: nodeValue, label = '' } = node
    lastItemRef.current = node;
    // pane 
    addMenu({
      title: label,
      id: nodeValue,
      pane: children
    } as ITabsArr, depth)
    // 路径
    setMenuPath((prevMenuPath) => prevMenuPath.slice(0, depth + 1).concat(node))
    // 路径结束
    if (!children.length) {
      triggerChange([nodeValue])
    }
  }, [flattenData, value, tabsValue,]);

  const selectedItems = useMemo(() => {
    return flattenData.filter((node: Option) => {
      return (tabsValue || hackValue.current).includes(node.value)
    })
  }, [flattenData, tabsValue, value, hackValue.current])

  const onClearTabs = useCallback(() => {
    if (onChange) {
      onChange([])
    }
    const resetActiveKey = paneLevelOne(flattenData.filter((item: OptionParent) => !item.parent), defaultTabsText);
    const [resetActiveKeyNode] = resetActiveKey || [undefined];
    lastItemRef.current = resetActiveKeyNode;
    setMenuData(resetActiveKey);
    setMenuPath([])
  }, [flattenData, value, defaultTabsText, selectedItems])

  const triggerChange = useCallback(
    (nextValue: ValueType[]) => {
      const setValueNode = [...new Set([...value, ...nextValue])]
      if (onChange) {
        onChange(setValueNode)
      }
      hackValue.current = setValueNode
      setValue(setValueNode)
      setActive(false)
    },
    [selectedItems]
  )

  const removeNode = useCallback((node: ValueType) => {
    if (onChange) {
      onChange(value)
    }
    setMenuData(pre => pre.filter(item => item.id !== node));
    setMenuPath(pre => pre.filter(item => item.value !== node))
  }, [flattenData, tabsValue, value, selectedItems])

  const addMenu = (menu: ITabsArr, depth: number) => setMenuData((prevMenuData) => {
    return prevMenuData.slice(0, depth + 1).concat(menu)
  });

  return {
    value,
    setValue,

    active,
    setActive,

    menuData,
    setMenuData,

    flattenData,

    menuPath,

    hackValue,
    handleCascaderChange,
    lastItemRef,

    selectedItems,
    onClearTabs,
    removeNode
  };
};

const TabsCascaderContainer = createContainer(useTabsCascader);

export default TabsCascaderContainer;

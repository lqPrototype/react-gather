import { valueType } from 'antd/lib/statistic/utils';
import { Option } from '../interface';

export function isArray(value: any[]) {
  return (Array.isArray && Array.isArray(value)) || value instanceof Array;
}

/**
 * flatten tree structure to array
 * @param {*} tree
 * @param {*} childrenKey
 * @param {*} executor
 */
export function flattenTree(
  tree: any[],
  childrenKey = 'children',
  executor?: (node: any, index: number) => any,
) {
  const flattenData: any[] = [];
  const traverse = (data: any[], parent: any | null) => {
    if (!isArray(data)) {
      return;
    }

    data.forEach((item: any, index: number) => {
      const node: any = typeof executor === 'function' ? executor(item, index) : item;
      node.parent = parent;

      flattenData.push({ ...node });

      if (item[childrenKey]) {
        traverse(item[childrenKey], item);
      }
    });
  };

  traverse(tree, null);
  return flattenData;
}

/**
 * 浅比较
 * @param arrA
 * @param arrB
 * @returns
 */
export function shallowEqualArray(arrA: valueType[], arrB: valueType[]) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}

/**
 * 层序遍历
 * @param tree
 * @param childrenKey
 */
export function levelOrder(root: Option[], childrenKey = 'children'): Option[][] {
  if (!root || !root.length) return [];
  const queue = [...root];
  const ans: Option[][] = [];
  while (queue.length > 0) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const cur = queue.shift()!;
      level.push(cur);
      const curLevel: any = cur[childrenKey];
      if (curLevel) {
        for (const child of curLevel) {
          queue.push(child);
        }
      }
    }
    ans.push(level);
  }
  return ans;
}

export const paneLevelOne = (root: any, defaultTabsText: any) => {
  if (!root || !root.length) {
    return [];
  }

  return [
    {
      title: defaultTabsText,
      id: uuid(),
      pane: root,
    },
  ];
};

export const uuid = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
};

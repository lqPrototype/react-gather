import React from 'react';
/**
 * TabsCascaderRef
 */
export interface TabsCascaderRef { }

/**
 * TabsCascaderProps
 */
export interface TabsCascaderProps {
  defaultTabsText?: string | React.ReactNode;
  defaultValue?: ValueType[];
  value?: ValueType[];
  onChange?: (value: ValueType[]) => void;
  //
  options?: Option[];
  //
  disabled?: boolean;
  placeholder?: string;
  //
  className?: string;
  style?: React.CSSProperties;
  //
  placement?: SelectCommonPlacement;
  size?: SizeType;
  getPopupContainer?: (props: any) => HTMLElement;
  allowClear?: boolean;
  popupStyle?: React.CSSProperties;
  maxTagCount?: number | 'responsive';
  childrenKey?: string;
  renderTitle?: (value: string) => React.ReactNode | undefined;
}

/**
 * TabsCascaderComponent
 */
export interface TabsCascaderComponent {
  (
    props: TabsCascaderProps & {
      ref?: React.Ref<TabsCascaderRef>;
    },
  ): JSX.Element | null;
  displayName?: string;
}

/**
 * Option
 */
export interface Option {
  value: string | number;
  label: string | React.ReactNode;
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

export interface ITabsArr {
  title: string;
  id?: number | string;
  pane: OptionParent[];
}

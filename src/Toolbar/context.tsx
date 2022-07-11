import React from 'react';

export interface ToolbarContextContexts {
  prefixCls: string;
  onClick: (key: string, value?: any) => void;
  split: 'vertical' | 'horizontal';
}

export const ToolbarContext = React.createContext<ToolbarContextContexts>({} as any);

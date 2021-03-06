export const prefix = 'react-gather';

import { BuildInPlacements } from 'rc-trigger';

const BUILT_IN_PLACEMENTS: BuildInPlacements = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
};

export default BUILT_IN_PLACEMENTS;

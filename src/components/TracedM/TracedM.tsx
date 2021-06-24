import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledMotionPath = styled(motion.path)`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.secondary};
  stroke-width: 1.3;
  transform: translateX(calc(50% - 3.75rem));

  @media (min-width: 768px) {
    transform: translateX(calc(50% - 6.25rem));
  }
`;

export const TracedM: FunctionComponent = () => (
  <StyledMotionPath
    d="M75.7,6.5c-4,2-7.5,4.8-10.2,8.5l-1.8,2.4l-10.2,13c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.2-0.3,0.3-0.4,0.5l0.4-0.7V19.9v-1.7
	V3.4C50,3.4,47,3.9,44,4.9c0,0,0,0,0,0c0,0,0,0,0,0c-1.3,0.4-2.5,1-3.8,1.6c-4,2-7.5,4.8-10.2,8.5l-1.8,2.4L18,30.3
	c-0.1,0.1-0.2,0.2-0.3,0.4c-3.1,3.8-7.8,6.2-13.1,6.2H3.1v16.5c4.6,0,9-1.1,13-3.1s7.5-4.8,10.2-8.5l1.8-2.4l10.2-13
	c0.1-0.1,0.2-0.2,0.3-0.4v10.9V37v16.3v0.1c4.6,0,9-1.1,13-3.1s7.5-4.8,10.2-8.5l1.8-2.4l10.2-13c0.1-0.1,0.2-0.2,0.3-0.4v12.3
  c0,8,6.5,14.4,14.6,14.4V19.9V3.4C84.1,3.4,79.7,4.5,75.7,6.5z"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
    transition={{
      pathLength: { duration: 2, ease: 'easeInOut', delay: 0.25 },
      opacity: { duration: 2.75, ease: 'easeInOut', times: [0, 0.1, 0.75, 1] },
    }}
  />
);

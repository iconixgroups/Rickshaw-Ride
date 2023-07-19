import React from 'react';

// Performance monitoring tools
import { unstable_Profiler as Profiler } from 'react';

// Importing components
import App from '../App';

const onRenderCallback = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<any>
) => {
  // Logs the profiling information
  console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
};

const Performance = () => {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <App />
    </Profiler>
  );
};

export default Performance;
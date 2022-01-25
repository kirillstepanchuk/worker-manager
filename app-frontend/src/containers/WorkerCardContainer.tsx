import React, { useState, FC } from 'react';

import { Worker } from '../types/worker';
import WorkerCard from '../components/common/WorkerCard/WorkerCard';

interface WorkerProps {
  worker: Worker
}

const WorkerCardContainer: FC<WorkerProps> = function ({ worker }) {
  const [isAdministration] = useState<boolean>(
    worker.positionType === 'administration',
  );

  return (
    <WorkerCard
      worker={worker}
      isAdministration={isAdministration}
    />
  );
};

export default WorkerCardContainer;

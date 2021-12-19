import React, { useState, FC } from 'react';
import { useLocation } from 'react-router-dom';

import { Worker } from '../../../types/worker';
import WorkerCard from '../../../components/common/WorkerCard/WorkerCard';

interface WorkerProps {
  worker: Worker
}

const WorkerCardContainer: FC<WorkerProps> = function ({ worker }) {
  const [isAdministration] = useState(
    worker.positionType === 'administration',
  );
  const location = useLocation();

  return (
    <WorkerCard
      worker={worker}
      isAdministration={isAdministration}
      location={location}
    />
  );
};

export default WorkerCardContainer;

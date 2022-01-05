import React, { useState, FC } from 'react';
import { useLocation } from 'react-router-dom';

import { Worker } from '../../../types/worker';
import { Location } from '../../../types/location';
import WorkerCard from '../../../components/common/WorkerCard/WorkerCard';

interface WorkerProps {
  worker: Worker
}

const WorkerCardContainer: FC<WorkerProps> = function ({ worker }) {
  const [isAdministration] = useState<boolean>(
    worker.positionType === 'administration',
  );
  const location: Location = useLocation();

  return (
    <WorkerCard
      worker={worker}
      isAdministration={isAdministration}
      location={location}
    />
  );
};

export default WorkerCardContainer;

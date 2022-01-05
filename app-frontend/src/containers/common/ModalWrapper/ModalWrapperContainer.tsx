import React, {
  FC, ReactChild, ReactChildren,
} from 'react';

import ModalWrapper from '../../../components/common/ModalWrapper/ModalWrapper';

interface ModalContainerProps {
  children: ReactChild | ReactChildren
}

const ModalWrapperContainer: FC<ModalContainerProps> = function ({ children }) {
  return (
    <ModalWrapper>
      {children}
    </ModalWrapper>
  );
};

export default ModalWrapperContainer;

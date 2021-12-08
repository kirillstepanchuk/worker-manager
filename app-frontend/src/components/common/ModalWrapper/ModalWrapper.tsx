import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';

import { Modal, ModalContent, CloseButton } from './style';

interface IModal {
	children: React.ReactNode
}

const ModalWrapper: FC<IModal> = ({ children }) => {
	const history = useHistory();

	return (
		<Modal onClick={() => history.goBack()}>
			<ModalContent onClick={(evt) => evt.stopPropagation()}>
				{children}
				<CloseButton onClick={() => history.goBack()}>
					<CloseIcon sx={{ color: grey[500] }} />
				</CloseButton>
			</ModalContent>
		</Modal>
	);
};

export default ModalWrapper;

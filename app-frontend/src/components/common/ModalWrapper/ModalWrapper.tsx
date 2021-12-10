import React, { FC, MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { grey } from '@mui/material/colors'
import CloseIcon from '@mui/icons-material/Close'

import { Modal, ModalContent, CloseButton } from './style'
import { ModalProps } from '../../../types/modal'

const ModalWrapper: FC<ModalProps> = function ({ children }) {
	const history = useHistory()

	return (
		<Modal onClick={() => history.goBack()}>
			<ModalContent onClick={(evt: MouseEvent) => evt.stopPropagation()}>
				{children}
				<CloseButton onClick={() => history.goBack()}>
					<CloseIcon sx={{ color: grey[500] }} />
				</CloseButton>
			</ModalContent>
		</Modal>
	)
}

export default ModalWrapper

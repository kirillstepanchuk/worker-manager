import React from 'react';
import { useHistory } from 'react-router';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

import { Modal, ModalContent, CloseButton } from './style';

const ModalWrapper = ({children}) => {
    const history = useHistory();

    return (
        <Modal onClick={() => history.goBack()}>
            <ModalContent onClick={(evt) => evt.stopPropagation()}>
                {children}
                <CloseButton onClick={() => history.goBack()}>
                    <CloseIcon sx={{ color: grey[500] }}/>
                </CloseButton>
            </ModalContent>
        </Modal>
    )
}

ModalWrapper.propTypes = {
    isModalActive: PropTypes.bool,
    setIsModalActive: PropTypes.func,
    children: PropTypes.element,
}

export default ModalWrapper

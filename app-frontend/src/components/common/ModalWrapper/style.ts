import styled, { keyframes } from 'styled-components';

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	height: 100vh;
	width: 100vw;

	background-color: rgba(0, 0, 0, 0.6);

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContent = styled.div`
	position: relative;

	padding: 20px;

	background-color: #ffffff;
	border: 1px solid #b9c4c9;
	border-radius: 20px;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 15px;
	right: 20px;

	background: none;
	border: none;

	cursor: pointer;
`;

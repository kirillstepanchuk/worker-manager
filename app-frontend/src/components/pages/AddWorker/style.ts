import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const CardContainer = styled.form`
    text-align: center;

    width: 280px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 530px;
    }
`;

export const TopInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const FileInput = styled.input`
    display: none;
`;

export const Link = styled(RouterLink)`
text-align: center;
text-decoration: none;
color: #B9C4C9;

padding: 10px;
margin-top: 20px;

border: 1px solid #B9C4C9;
border-radius: 5px;

&:hover {
color: #959b9e;
border-color: #959b9e;

transition: 0.5s;
}
`;

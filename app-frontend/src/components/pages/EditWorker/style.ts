import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const CardContainer = styled.form`
    text-align: center;

    width: 530px;

    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;

    background-color: #FFFFFF;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
`;

export const TopInfoContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const FileInput = styled.input`
    display: none;
`;

export const Link = styled(RouterLink)`
text-align: center;
text-decoration: none;
color: #b9c4c9;

padding: 10px;
margin-top: 20px;

border: 1px solid #b9c4c9;
border-radius: 5px;

&:hover {
color: #959b9e;
border-color: #959b9e;

transition: 0.5s;
}
`;

import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
    width: 280px;
    height: 70px;

    padding-left: 20px;
    padding-right: 20px;

    background-color: #04202C;
    border: 1px solid #B9C4C9;
    border-radius: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        width: 728px;

        padding-left: 20px;
        padding-right: 20px;
    }

    @media (min-width: 1300px) {
        width: 1260px;
    }
`;

export const Heading = styled.h1`
    color: #ffffff;
    font-size: 20px;
    font-weight: 400;
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: #B9C4C9;

    padding: 10px;

    border: 1px solid #B9C4C9;
    border-radius: 5px;

    &:hover {
        color: #ffffff;
        border-color: #ffffff;
        
        transition: .5s;
    }
`;

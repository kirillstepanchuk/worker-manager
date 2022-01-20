import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const CardContainer = styled.div`
    position: relative;

    text-align: center;

    width: 530px;

    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
    padding-bottom: 70px;

    background-color: #FFFFFF;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NameTitle = styled.span`
    font-size: 24px;
    font-weight: 600;

    margin-top: 10px;
`;

export const TypeTitle = styled.span`
    color: #B9C4C9;
    font-size: 20px;
`;

export const ParameterHeading = styled.span`
    font-size: 20px;

    margin-top: 10px;
`;

export const ParameterValue = styled.span`
    font-size: 16px;
    color: #B9C4C9 ;
`;

export const LinkS = styled.a`
    position: absolute;
    bottom: 10px;

    text-decoration: none;
    color: #B9C4C9;

    padding: 10px;

    border: 1px solid #B9C4C9;
    border-radius: 5px;

    &:hover {
        color: #000000;
        border-color: #000000;
        transition: .5s;
    }
`;

export const Link = styled(RouterLink)`
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

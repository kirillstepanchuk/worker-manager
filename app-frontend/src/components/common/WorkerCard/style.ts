import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const CardContainer = styled.div`
    position: relative;

    width: 280px;

    margin-top: 20px;
    padding: 10px;
    padding-bottom: 60px;

    border: 1px solid #B9C4C9;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        width: 340px;
    }

    @media (min-width: 1300px) {
        width: 280px;
    }
`

export const NameTitle = styled.span`
    font-size: 18px;
    font-weight: 600;

    margin-top: 10px;
`

export const TypeTitle = styled.span`
    color: #B9C4C9;
`

export const ParameterHeading = styled.span`
    margin-top: 10px;
`

export const ParameterValue = styled.span`
    color: #B9C4C9;
`

export const Link = styled(RouterLink)`
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
`

export const LinkConteiner = styled.div`
    position: absolute;
    bottom: 10px;

    width: 190px;

    display: flex;
    justify-content: space-between;;
`

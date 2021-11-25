import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,500;1,500&display=swap');

    html, body {
        margin: 0;

        overflow-x: hidden;
    }

    * {
        font-family: 'Raleway', sans-serif;

        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    padding: 10px;

    width: 300px;

    @media (min-width: 768px) {
        width: 768px;

        padding: 20px;
    }

    @media (min-width: 1300px) {
        width: 1300px;
    }
`;

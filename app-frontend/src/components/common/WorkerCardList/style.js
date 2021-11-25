import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 280px;

    margin-top: 20px;

    display: flex;
    gap: 0px 43px;
    flex-wrap: wrap;

    @media (min-width: 768px) {
        width: 728px;
    }

    @media (min-width: 1300px) {
        width: 1260px;
    }
`;

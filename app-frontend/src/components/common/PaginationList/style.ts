import styled from 'styled-components';

const PaginationContainer = styled.div`
    width: 280px;

    display: flex;
    justify-content: center;

    margin-top: 20px;

    @media (min-width: 768px) {
        width: 728px;
    }

    @media (min-width: 1300px) {
        width: 1260px;
    }
`;

export default PaginationContainer;

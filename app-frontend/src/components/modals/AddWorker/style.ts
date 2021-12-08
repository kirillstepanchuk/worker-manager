import styled from 'styled-components'

export const CardContainer = styled.form`
    width: 280px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        width: 500px;
    }
`

export const TopInfoContainer = styled.div`
    display: flex;
    align-items: center;
`

export const FileInput = styled.input`
    display: none;
`

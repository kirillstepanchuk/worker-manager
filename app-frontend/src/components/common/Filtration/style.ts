import styled from 'styled-components'

export const Container = styled.form`
    color: #ffffff;

    width: 280px;

    margin-top: 10px;
    padding: 20px;

    background-color: #304040;
    border-radius: 20px;

    @media (min-width: 768px) {
        width: 728px;
    }

    @media (min-width: 1300px) {
        width: 1260px;
    }
`

export const ParametersContainer = styled.div`
    margin-bottom: 15px;
`

export const Title = styled.span`
    color: #B9C4C9;
    font-size: 20px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const FormLabel = styled.span`
    margin-top: 10px
`

export const controlProps = {
	sx: {
		color: '#ffffff',
		'&.Mui-checked': {
			color: '#ffffff'
		}
	}
}

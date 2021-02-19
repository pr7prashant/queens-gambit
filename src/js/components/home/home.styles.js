import styled from 'styled-components';

export const HomeContainer = styled.div`
	height: 100%;
	background-color: #3b4b95;
`;

export const ButtonContainer = styled.div`
	display: block;
	text-align: center;
`;

export const ResetButton = styled.button`
	border-radius: 4px;
	margin: 0;
	background-color: purple;
	box-shadow: none;
	border: 1px solid purple;
	width: 80px;
	height: 42px;
	color: #fff;
	font-size: 16px;
	padding: 10px 0;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`;

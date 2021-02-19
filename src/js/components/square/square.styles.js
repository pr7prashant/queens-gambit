import styled from 'styled-components';

export const SquareContainer = styled.div`
	display: inline-block;
	position: relative;
	width: 60px;
	height: 60px;
	background-color: ${(props) => props.bg};
	cursor: pointer;
`;

export const QueenContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 60px;
	height: 60px;
`;

export const Queen1 = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 40px;
	height: 40px;
	border-radius: 50%;
	box-sizing: border-box;
	background-color: green;
`;

export const Queen2Valid = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 40px;
	height: 40px;
	border-radius: 50%;
	box-sizing: border-box;
	background-color: yellow;
`;

export const Queen2Capture = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 40px;
	height: 40px;
`;

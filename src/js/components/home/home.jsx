import React from 'react';
import { useDispatch } from 'react-redux';
import Board from 'components/board/board';
import { HomeContainer, ButtonContainer, ResetButton } from './home.styles';
import initialState from 'json/init.json';
import { RESET_BOARD } from 'src/actions/actionTypes.json';

const Home = (props) => {
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch({ type: RESET_BOARD, payload: initialState });
	};

	return (
		<HomeContainer>
			<Board></Board>
			<ButtonContainer>
				<ResetButton onClick={handleReset}>RESET</ResetButton>
			</ButtonContainer>
		</HomeContainer>
	);
};

export default Home;

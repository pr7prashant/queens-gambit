import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SquareContainer, QueenContainer, Queen1, Queen2Valid, Queen2Capture } from './square.styles';
import closeIcon from 'images/close.png';
import { SET_QUEEN_1, SET_QUEEN_2 } from 'src/actions/actionTypes.json';

const Square = ({ x, y, bg }) => {
	const queen1Pos = useSelector((state) => state.board.queen1);
	const queen2Pos = useSelector((state) => state.board.queen2);
	const dispatch = useDispatch();

	const handleSquareClick = (x, y) => {
		if (queen1Pos.x === null && queen1Pos.y === null) {
			dispatch({ type: SET_QUEEN_1, payload: { x, y } });
		} else {
			// Return if square is already occupied by queen1
			if (queen1Pos.x === x && queen1Pos.y === y) {
				return;
			}

			dispatch({ type: SET_QUEEN_2, payload: { x, y } });
		}
	};

	const isCapturePossible = () => {
		if (queen1Pos.x === queen2Pos.x || queen1Pos.y === queen2Pos.y) {
			// If both queens are in same row or column
			return true;
		} else if (
			(queen2Pos.y - queen1Pos.y) / (queen2Pos.x - queen1Pos.x) === 1 ||
			(queen2Pos.y - queen1Pos.y) / (queen2Pos.x - queen1Pos.x) === -1
		) {
			// If queens are diagnol then slope will be 1 or -1
			return true;
		}

		return false;
	};

	const getQueen2 = () => {
		if (isCapturePossible()) {
			// Remove cross icon after 2 seconds
			setTimeout(() => {
				dispatch({ type: SET_QUEEN_2, payload: { x: null, y: null } });
			}, 2000);

			return <Queen2Capture src={closeIcon}></Queen2Capture>;
		} else {
			return <Queen2Valid></Queen2Valid>;
		}
	};

	return (
		<SquareContainer bg={bg} onClick={() => handleSquareClick(x, y)}>
			{queen1Pos.x === x && queen1Pos.y === y && (
				<QueenContainer>
					<Queen1></Queen1>
				</QueenContainer>
			)}
			{queen2Pos.x === x && queen2Pos.y === y && <QueenContainer>{getQueen2()}</QueenContainer>}
		</SquareContainer>
	);
};

export default Square;

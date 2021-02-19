import React from 'react';
import { useSelector } from 'react-redux';
import Square from 'components/square/square';
import { BoardContainer, Row } from './board.styles';

const Board = (props) => {
	const board = useSelector((state) => state.board);

	const isEven = (num) => {
		return num % 2 === 0;
	};

	const getSquareBg = (row, col) => {
		if ((isEven(row) && isEven(col)) || (!isEven(row) && !isEven(col))) {
			return 'white';
		}

		return 'black';
	};

	return (
		<BoardContainer>
			{board.rows.map((row, index) => {
				return (
					<Row key={index}>
						{row.cols.map((col) => {
							return <Square key={col.x + col.y} x={col.x} y={col.y} bg={getSquareBg(col.x, col.y)}></Square>;
						})}
					</Row>
				);
			})}
		</BoardContainer>
	);
};

export default Board;

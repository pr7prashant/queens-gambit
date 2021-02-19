import initialState from 'json/init.json';
import { SET_QUEEN_1, SET_QUEEN_2, RESET_BOARD } from 'src/actions/actionTypes.json';

const boardReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case SET_QUEEN_1: {
			newState.queen1 = action.payload;
			return newState;
		}
		case SET_QUEEN_2: {
			newState.queen2 = action.payload;
			return newState;
		}
		case RESET_BOARD: {
			newState.queen1 = action.payload.queen1;
			newState.queen2 = action.payload.queen2;
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default boardReducer;

import { combineReducers } from 'redux';
import boardReducer from 'src/js/reducers/boardReducer';

const rootReducer = combineReducers({
	board: boardReducer,
});

export default rootReducer;

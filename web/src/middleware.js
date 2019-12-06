import $ from 'jquery';
import {letters, increment, resetLetter, resetKey} from './actions';


export const getLetters = () => {
	return function(dispatch){
		$.get('http://localhost:3000', (r) => dispatch(letters(r)));
	}
}


export const getScore = (word) => {
	return function(dispatch){
		dispatch(resetLetter());
        dispatch(resetKey());
		$.get('http://localhost:3000/get/'+ word, (r) => dispatch(increment(r["point"])));
	}
}
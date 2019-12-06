import $ from 'jquery';
import {letters} from './actions';


export const getLetters = () => {
	return function(dispatch){
		$.get('http://localhost:3000', (r) => dispatch(letters(r)));
	}
}
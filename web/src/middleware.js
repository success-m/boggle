import $ from 'jquery';
import {letters, increment, resetLetter, 
	resetKey, updateAlert, resetAlert, addWord} from './actions';


export const getLetters = () => {
	return function(dispatch){
		$.get('http://localhost:3000', (r) => dispatch(letters(r)));
	}
}


export const getScore = (word) => {
	return function(dispatch, getState){
		clearTimeout(window.alertTimeout);

		const { addedWordsReducer } = getState();
		dispatch(resetLetter());
        dispatch(resetKey());

        if(addedWordsReducer.includes(word)){
			dispatch(updateAlert({
				display: true,
				variant: "danger",
				message: "Oops, You can't submit "+word+" twice."
			}));

			window.alertTimeout = setTimeout(() => {
				dispatch(resetAlert({
			    	display: false,
			        variant: "",
			        message: ""
			    }));
			} , 1500);

			return false;
        }
        
        if(word.length > 2){
			$.get('http://localhost:3000/get/'+ word, (r) => {
				dispatch(increment(r["point"]));
				if(r["result"] === "no data found"){
					dispatch(updateAlert({
						display: true,
						variant: "danger",
						message: "Oops, "+word+" is not a word."
					}));				
				}else{
					dispatch(addWord([word]));
					dispatch(updateAlert({
						display: true,
						variant: "success",
						message: "Great. Adding " + r["point"] + " point(s)."
					}));
				}

				window.alertTimeout = setTimeout(() => {
					dispatch(resetAlert({
		              display: false,
		              variant: "",
		              message: ""
		            }));
				} , 1500);

			});
		} else {
					dispatch(updateAlert({
						display: true,
						variant: "danger",
						message: "Oops, a word must be of at least three letters."
					}));

					window.alertTimeout = setTimeout(() => {
						dispatch(resetAlert({
			              display: false,
			              variant: "",
			              message: ""
			            }));
					} , 1500);
		}
	}
}
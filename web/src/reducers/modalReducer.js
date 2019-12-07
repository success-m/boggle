const modalReducer = (state = {
	display: false,
	message: ""
}, action) => {
  switch(action.type){
    case 'SHOWMODAL':
      return action.payload;
    case 'RESETMODAL':
      return {
			display: false,
			message: ""
		};
    default:
    	return state;
  }
}

export default modalReducer;
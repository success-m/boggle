const alertReducer = (state = {
	display: false,
	variant: "",
	message: ""
}, action) => {
  switch(action.type){
    case 'UPDATEALERT':
      return action.payload;
    case 'RESETALERT':
      return {
			display: false,
			variant: "",
			message: ""
		};
    default:
    	return state;
  }
}

export default alertReducer;
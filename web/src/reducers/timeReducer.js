const timeReducer = (state = 0, action) => {
  switch(action.type){
    case 'ADDTIME':
      return state + 1;
    case 'RESETTIME':
      return 0;
    default:
    	return state;
  }
}

export default timeReducer;
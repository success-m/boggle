const lettersReducer = (state = [], action) => {
  switch(action.type){
    case 'LETTERS':
      return action.payload;
    default:
      return state;
  }
}

export default lettersReducer;
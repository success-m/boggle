const addedWordsReducer = (state = [], action) => {
  switch(action.type){
    case 'ADDWORD':
      return state.concat(action.payload);
    case 'RESETWORDS':
      return [];
    default:
      return state;
  }
}

export default addedWordsReducer;
const loadReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_FRIENDS':
      return state.push(action.payload);
    default:
      return state;
  }
}

export default loadReducer;
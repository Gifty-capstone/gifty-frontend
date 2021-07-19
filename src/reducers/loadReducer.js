const loadReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_FRIENDS':
      return state.concat(action.payload.friends);
    default:
      return state;
  }
}

export default loadReducer;
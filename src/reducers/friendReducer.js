export const friendReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FRIEND':
      return [...state, ...action.payload.friend];
    case 'REMOVE_FRIEND':
      return state.filter(friend => {
        if (friend.id !== action.payload.id) {
          return friend;
        }
      })
    default:
      return state;
  }
}
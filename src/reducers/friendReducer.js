export const friendReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FRIEND':
    return [...state, ...action.payload.friend]
  }
}
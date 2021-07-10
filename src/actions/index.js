//type is just the action's name
//payload is the property that holds the actual data we need to pass to the reducers 

export const addFriend = (friend) => {
  return {
    type: 'ADD_FRIEND',
    payload: {
      friend
    }
  }
}

export const removeFriend = (friend) => {
  return {
    type: 'REMOVE_FRIEND',
    payload: {
      friend
    }
  }
}
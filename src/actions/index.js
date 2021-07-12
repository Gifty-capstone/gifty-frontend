//type is just the action's name
//payload is the property that holds the actual data we need to pass to the reducers 

export const addFriend = (name, date) => {
  return {
    type: 'ADD_FRIEND',
    payload: {
      name,
      date
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
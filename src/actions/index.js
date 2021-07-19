const addFriend = (friend) => {
  return {
    type: 'ADD_FRIEND',
    payload: {
      friend
    }
  }
}

const removeFriend = (friend) => {
  return {
    type: 'REMOVE_FRIEND',
    payload: {
      friend
    }
  }
}

export {
  addFriend,
  removeFriend
}
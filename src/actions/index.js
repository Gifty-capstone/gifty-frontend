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

const loadFriends = (friends) => {
  return {
    type: 'LOAD_FRIENDS',
    payload: {
      friends
    }
  }
}

export {
  addFriend,
  removeFriend,
  loadFriends
}
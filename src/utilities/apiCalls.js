const getFriends = () => {
  return fetch("https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends")
    .then(response => checkForErrors(response))
};

const postFriend = (friend) => {
  return fetch('https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends', {
    method: 'POST',
    body: JSON.stringify({
      name: friend.name,
      birthday: friend.birthday,
      memo: friend.memo,
      need_gift: friend.need_gift
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => checkForErrors(response))
};

const getGifts = (userId, friendId) => {
  return fetch(`https://gifty-backend-rails.herokuapp.com/api/v1/users/${userId}/friends/${friendId}/gifts`)
    .then(response => checkForErrors(response))
}

const addGift = (userId, friendId, gift, description, status) => {
  return fetch(`https://gifty-backend-rails.herokuapp.com/api/v1/users/${userId}/friends/${friendId}/gifts`, {
    method: 'POST',
    body: JSON.stringify({
      name: gift,
      description: description,
      status: status
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => checkForErrors(response))
}

const markGiftPurchased = (userId, friendId, giftId) => {
  return fetch(`https://gifty-backend-rails.herokuapp.com/api/v1/users/${userId}/friends/${friendId}/gifts/${giftId}?status=purchased`, {
    method: 'PUT'
  })
    .then(response => checkForErrors(response))
}

const deleteGift = (userId, friendId, giftId) => {
  return fetch(`https://gifty-backend-rails.herokuapp.com/api/v1/users/${userId}/friends/${friendId}/gifts/${giftId}`, {
    method: 'DELETE'
  })
    .then(response => checkForErrors(response))
}

const deleteFriendRecord = (userId, friendId) => {
  return fetch(`https://gifty-backend-rails.herokuapp.com/api/v1/users/${userId}/friends/${friendId}`, {
    method: 'DELETE'
  })
    .then(response => checkForErrors(response))
}

const checkForErrors = (response) => {
  if (!response.ok) {
    throw new Error(response.status)
  } else {
    return response.json()
  }
}

export {
  getFriends,
  postFriend,
  getGifts,
  addGift,
  markGiftPurchased,
  deleteGift,
  deleteFriendRecord
}
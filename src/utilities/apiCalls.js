const getFriends = () => {
  return fetch("https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends")
    .then(response => response.json())
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
    .then(response => response.json())
};

const getGifts = (userId, friendId) => {
  return fetch(`https://gifty-backend-rails.herokuapp.com/api/v1/users/${userId}/friends/${friendId}/gifts`)
    .then(response => response.json())
}

const addGift = (userId, friendId, gift) => {
  return fetch(`https://gifty-backend-rails.herokuapp.com/api/v1/users/${userId}/friends/${friendId}/gifts`, {
    method: 'POST',
    body: JSON.stringify({
      name: gift,
      description: "None",
      status: "pending"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
}

export {
  getFriends,
  postFriend,
  getGifts,
  addGift
}
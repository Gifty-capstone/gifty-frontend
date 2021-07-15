const getFriends = () => {
  return fetch("https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends")
    .then(response => {
      // console.log(response.status)
      return response.json()
    })
}

const postFriend = (friend) => {
  fetch('https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends', {
    method: 'POST',
    body: JSON.stringify({
      id: '',
      birthday: friend.birthday,
      name: friend.name,
      memo: friend.memo,
      need_gift: ''
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    // .then(response => response.json())
    // .then(data => {

    // })
}


export {
  getFriends,
  postFriend
}
const getFriends = () => {
  return fetch("https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends")
    .then(res => {
      console.log(res.status)
      return res.json()
    })
}

export {
  getFriends
}
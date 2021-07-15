const getFriends = () => {
  return fetch("https://gifty-backend-rails.herokuapp.com/api/v1/users/1/friends")
    .then(response => {
      // console.log(response.status)
      return response.json()
    })
}


export {
  getFriends
}
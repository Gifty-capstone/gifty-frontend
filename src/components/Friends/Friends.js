import './Friends.css'
import React from 'react'

const Friends = () => {
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friends)

  const friendList = friends.map(friend => {
    return (
      <section className='friend' key={friend.id}>
        
      </section>

    )
  })
  return (
    <p>test</p>
  )
}

export default Friends;
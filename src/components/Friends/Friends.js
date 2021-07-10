import './Friends.css';
import { useSelector, useDispatch } from 'react-redux';
import { getIcon } from '../../utilities/avatars';
// import bear from '../../assets/bear.png';
// import cat from '../../assets/cat.png';
// import dog from '../../assets/dog.png';
// import fox from '../../assets/fox.png';
// import giraffe from '../../assets/giraffe.png';
// import lion from '../../assets/lion.png';
// import octopus from '../../assets/octopus.png';
// import panda from '../../assets/panda.png';
// import rabbit from '../../assets/rabbit.png';
// import rhinoceros from '../../assets/rhinoceros.png';


const Friends = () => {
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friends)

  const friendList = friends.map(friend => {
    return (
      <article className='friend' key={friend.id}>
        <img src={getIcon(friend.id)}></img>
        <h2>{friend.name}</h2>
      </article>
    )
  })
  
  return (
    <section>
    {friendList}
    </section>
  )
}

export default Friends;
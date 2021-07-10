import './Friends.css';
import { useSelector, useDispatch } from 'react-redux';
import bear from '../../assets/bear.png';
import cat from '../../assets/cat.png';
import dog from '../../assets/dog.png';
import fox from '../../assets/fox.png';
import giraffe from '../../assets/giraffe.png';
import lion from '../../assets/lion.png';
import octopus from '../../assets/octopus.png';
import panda from '../../assets/panda.png';
import rabbit from '../../assets/rabbit.png';
import rhinoceros from '../../assets/rhinoceros.png';


const Friends = () => {
  const dispatch = useDispatch()
  const friends = useSelector(state => state.friends)

  const friendList = friends.map(friend => {
    return (
      <section className='friend' key={friend.id}>
        <img src='../../assets/bear.png'></img>
      </section>

    )
  })
  return (
    <>
    <p>IMAGE TEST</p>
    <img src={bear}/>
    </>
  )
}

export default Friends;
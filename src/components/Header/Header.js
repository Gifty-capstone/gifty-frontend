import './Header.css';
import gift from '../../assets/gift.png';

const Header = ({ userName }) => {
  return (
    <header>
      <h1 className='title'><img className='gift' src={gift}></img>Gifty</h1>
      <h2 className='userName'>{user.name}'s Gift Planner</h2>
    </header>
  )
}

export default Header;

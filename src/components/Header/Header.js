import './Header.css';
import gift from '../../assets/gift.png';

const Header = ({ userName }) => {
  return (
    <header>
      <h1 className='title'><img className='gift' src={gift} alt='Present'></img>Gifty</h1>
      <h2 className='userName'>{userName}'s Gift Planner</h2>
    </header>
  )
}

export default Header;

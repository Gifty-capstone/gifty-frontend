import './Header.css';
import gift from '../../assets/gift.png';

const Header = ({ userName }) => {
  return (
    <header>
      <h1 className='title'><img src={gift}></img>Gifty</h1>
      <h2 className='userName'>Welcome {user.name}</h2>
    </header>
  )
}

export default Header;

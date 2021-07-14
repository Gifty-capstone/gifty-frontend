import './Header.css'

const Header = ({ userName }) => {
  return (
    <header>
      <h1 className='title'>Gifty</h1>
      <h2 className='userName'>Welcome {userName}</h2>
    </header>
  )
}

export default Header;

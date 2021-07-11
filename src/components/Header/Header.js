import './Header.css'

const Header = ({ user }) => {
  return (
    <header>
      <h1 className='title'>Gifty</h1>
      <h2 className='userName'>Welcome {user.name}</h2>
    </header>
  )
}

export default Header;

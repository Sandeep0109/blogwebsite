import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm' >React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg" alt="Header" />
    </div>
  )
}

export default Header
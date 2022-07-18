import "./sidebar.css"

const SideBar = () => {
  return (
    <div className='sideBar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                About Me
            </span>
            <img className="sideImg" src="https://image.shutterstock.com/image-photo/woman-creating-her-own-products-600w-1891054333.jpg" alt="profile" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corrupti quaerat, placeat inventore assumenda deleniti in iusto necessitatibus quod cum.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">
                Categories
            </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square" />
            <i className="sidebarIcon fa-brands fa-twitter-square" />
            <i className="sidebarIcon fa-brands fa-pinterest-square" />
            <i className="sidebarIcon fa-brands fa-instagram-square" />
            </div>
        </div>
    </div>
  )
}

export default SideBar
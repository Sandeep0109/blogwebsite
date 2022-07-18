import { Link } from 'react-router-dom';

import './topBar.css'
const TopBar = () => {
    const user = true;
  return (
    <div  className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook-square" />
            <i className="topIcon fa-brands fa-twitter-square" />
            <i className="topIcon fa-brands fa-pinterest-square" />
            <i className="topIcon fa-brands fa-instagram-square" />
        </div>
        <div className='topCenter'>
            <ul className="topList">
            <li className="topListItem">
                <Link className="link" to="/">Home</Link>
            </li>
                <li className='topListItem'><Link className="link" to="/">About</Link></li>
                <li className='topListItem'><Link className="link" to="/">Contact</Link></li>
                <li className='topListItem'><Link className="link" to="/write">Write</Link></li>
                <li className="topListItem">
                    {user && "Logout"}
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <img className='topImg' src="https://imnikku.github.io/friend/image/team/nitesh.jpg" alt="profile " />
                ) : (
                <ul>
                    <li className="topListItem">
                   <Link className="link" to="/login">LOGIN</Link>
                    </li>

                    <li className="topListItem">
                   <Link className="link" to="/register">REGISTER</Link>
                    </li>
                   </ul>
                )
            }
            {/* <img className='topImg' src="https://imnikku.github.io/friend/image/team/nitesh.jpg" alt="profile " /> */}
            <i className="topSearchIcon fa fa-search"></i>
        </div>
    </div>
  )
}

export default TopBar
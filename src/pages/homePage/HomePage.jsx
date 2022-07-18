import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/sidebar'
import './homePage.css'
const HomePage = () => {
  return (
    <>
        <Header />
        <div className="home">
            <Posts />
            <SideBar />
        </div>
        home page
    </>
  )
}

export default HomePage
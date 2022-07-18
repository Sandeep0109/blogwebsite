import SideBar from '../../components/sidebar/sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import './singlePage.css';


const SinglePage = () => {
  return (
    <div className='single'>
        <SinglePost />
        <SideBar />
    </div>
  )
}

export default SinglePage
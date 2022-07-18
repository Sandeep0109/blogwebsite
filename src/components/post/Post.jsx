import './post.css'

const Post = () => {
  return (
    <div className="post">
        <img src="https://cdn.pixabay.com/photo/2016/03/26/13/09/workspace-1280538__340.jpg" alt="post" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>

            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quia a exercitationem nihil natus quod fuga id aliquam voluptate tenetur. Rem saepe, assumenda expedita porro eos quo, vero beatae non hic pariatur quibusdam velit! Animi ex sapiente illo doloribus praesentium et a itaque iusto nulla vero. Laboriosam doloribus quo minima!</p>

    </div>
  )
}

export default Post
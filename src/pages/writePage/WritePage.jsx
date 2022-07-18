
// import SideBar from '../../components/sidebar/sidebar'
import './writePage.css'
const WritePage = () => {
  return (
    <div className="write">
      {/* <sidebar/> */}
      <img className='writeImg' src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt="" / >
    <form className="writeForm">
    <div className="writeFormGroup">

      <label htmlForm="fileInput">
        <i class="fas fa-plus"></i>
      </label>
        <input type="file" id="fileInput" style={{display:"none"}}/>
        <input type="text" placeholder="Title" className="writeInput" autoFpcus={true}/>
    </div>
     
    <div className='writeFormGroup'>
        <textarea placeholder="Tell your story"
        type="text" className="writeInput writeText"></textarea>

      </div>

      <button className="writeSubmit">Publish</button>
    </form>

    {/* <SideBar /> */}
    </div>
  )
}

export default WritePage
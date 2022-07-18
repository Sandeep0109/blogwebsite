import React from 'react'


import SideBar from "../../components/sidebar/sidebar"
import "./index.css"

const Setting = () => {
  return (
    <div className='setting'>
      
      <div className="settingwrapper">
      <div className="settingTitle">

        <span className="settingUpdateTitle">Update Your Account</span>
        <span className="settingDeleteTitle">Delete Your Account</span>

      </div>

      <form className="settingForm">
        <label>Profile Picture</label>
        <div className="settingPP">
        <img className="helloImg" src="https://cdn.pixabay.com/photo/2016/11/20/09/06/laptop-1842297_960_720.jpg" alt="" />
        <label htmlFor='fileInput'>
          <i className="settingPPIcon for fa-user-circle"></i>
        </label>
        <input type="file" id="fileInput" style={{display:"none"}} />
        </div>
        <label>Username</label>
        <input type="text" placeholder="safak" />
        <label>Email</label>
        <input type="text" placeholder="safak@gmail.com" />
        <label>Password</label>
        <input type="text" placeholder="safak" />
        <button className="settingSubmit">Update</button>
      </form>
      </div>
      <SideBar />
    </div>
  )
}
export default Setting;
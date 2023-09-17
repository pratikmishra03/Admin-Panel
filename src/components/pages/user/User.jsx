import React from 'react'
import "./user.css"
import {PermIdentity,CalendarToDay, PhoneAndroid, MailOutline, LocationSearching} from "@mui/icons-material"

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                 <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                <div className="UserShowTopTitle">
                <span className="userShowUsername">Anna Becker</span>    
                <span className="userShowUserTitle">SoftWare Engineer</span>    
                </div>
                </div>
                <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">annaback99</span>
                </div>
                <div className="userShowInfo">
                <CalendarToDay className='userShowIcon'/>
                <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <div className="userShowInfo">
                <PhoneAndroid className='userShowIcon'/>
                <span className="userShowInfoTitle">7541758520</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfoTitle">annaback99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className='userShowIcon'/>
                <span className="userShowInfoTitle">New York Usa</span>
                </div>
                </div>
            </div>
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}

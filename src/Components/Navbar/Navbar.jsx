import React from 'react'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icom from '../../assets/notification.png'
import profile from '../../assets/jack.png'

function Navbar({setSidebar}) {
  return (
    <nav>
        <div className='flex items-center'>
            <img className='w-[22px] mr-[25px]' src={menu_icon} onClick={() => setSidebar(prevValue => !prevValue)} alt="" />
            <img className='w-[130px]' src={logo} alt="" />
        </div>
        <div className='flex items-center'>
            <div className='flex border border-[#ccc] mr-[15px] py-[8px] px-[12px] rounded-[25px]'>
                <input className='w-[400px] outline-0 bg-transparent' type="text" placeholder='Search' />
                <img className='h-[20px] ' src={search_icon} alt="" />
            </div>
        </div>
        <div className='flex items-center'>
            <img className='w-[25px] mr-[25px]' src={upload_icon} alt="" />
            <img className='w-[25px] mr-[25px]' src={more_icon} alt="" />
            <img className='w-[25px] mr-[25px]' src={notification_icom} alt="" />
            <img className='w-[35px] mr-[25px] rounded-[50%]' src={profile} alt="" />
        </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


function Sidebar({sidebar}) {
  return (
    <div className={`bg-white h-screen fixed top-0 pl-[2%] pt-[80px] ${sidebar ? "w-[15%]": "small-sidebar"}`}>
        <div className="">
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={home} alt="" /><p>Home</p>
            </div>
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={sports} alt="" /><p>Sports</p>
            </div>
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={tech} alt="" /><p>Tech</p>
            </div>
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={music} alt="" /><p>Music</p>
            </div>
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={blogs} alt="" /><p>Blog</p>
            </div>
            <div className='side-link'>
                <img className='w-[20px] mr-[20px]' src={news} alt="" /><p>Home</p>
            </div>
            <hr className='w-[85%]  h-[1px] bg-white' />

        </div>
        <div className=''>
            <h3 className='text-[13px] my-[20px] text-[#5a5a5a] font-bold'>Subscribed</h3>
            <div className='side-link'>
                <img src={jack} alt="" className='w-[25px] rounded-[50%] mr-[20px]' /><p>PewDiePie</p>
            </div>
            <div className='side-link'>
                <img src={simon} alt="" className='w-[25px] rounded-[50%] mr-[20px]' /><p>MrBeast</p>
            </div>
            <div className='side-link'>
                <img src={tom} alt="" className='w-[25px] rounded-[50%] mr-[20px]' /><p>Justin Bieber</p>
            </div>
            <div className='side-link'>
                <img src={megan} alt="" className='w-[25px] rounded-[50%] mr-[20px]' /><p>5 minute craft</p>
            </div>
            <div className='side-link'>
                <img src={cameron} alt="" className='w-[25px] rounded-[50%] mr-[20px]' /><p>Nas Daily</p>
            </div>

        </div>
      
    </div>
  )
}

export default Sidebar

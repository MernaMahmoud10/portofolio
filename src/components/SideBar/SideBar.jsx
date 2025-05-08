import React from 'react'
import style from "./Sidebar.module.css"
import { NavLink } from 'react-router-dom'
export default function SideBar(props) {
  const { isNavOpened, setIsNavOpened } = props
  return (
    <>

      <nav className="nav navbar-dark flex-column text-center">
        <i className={`d-md-none fa-solid fa-xmark text-dark fs-3 ${isNavOpened ? `d-sm-block` : `d-none `} ${style?.closeIcon}`}
          onClick={() => setIsNavOpened(!isNavOpened)}></i>
        <li className='pt-5'>
          <div className={`${style?.profileImg}`}></div>
        </li>
        <li className="nav-item ">
          <h4 className={style?.userName}>Jackson Ford</h4>
          <p className={style?.description}>
            <span className={style?.title}>Ui/Ux designer</span>
            <span className='ps-1'>in Philippines</span>
          </p>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  onClick={()=>setIsNavOpened(false)} to="">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  onClick={()=>setIsNavOpened(false)} to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  onClick={()=>setIsNavOpened(false)} to="skills">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  onClick={()=>setIsNavOpened(false)} to="experience">Experience</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  onClick={()=>setIsNavOpened(false)} to="work">Work</NavLink>
        </li>
      </nav>
    </>


  )
}

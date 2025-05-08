import React, { useState } from 'react'
import SideBar from './components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    const [isNavOpened, setIsNavOpened] = useState(false)
    console.log(isNavOpened)
    return (
        <>
            <div className={`mb-3 navIcon container-fluid py-2 d-md-none ${isNavOpened ? `d-none` : `d-sm-block`}`}>
                <button className={`border bg-transparent border-3 sidebar-toggle rounded-3 `} onClick={() => setIsNavOpened(!isNavOpened)}>
                    <i className="fa-solid fa-bars text-dark fs-1 px-2 py-1"></i>
                </button>

            </div>
            <div className='w-100 row gx-0'>
                <div className={`navDiv position-fixed top-0 start-0 end-0 bg-light col-sm-12 col-md-2  vh-100 ${isNavOpened ? `d-sm-none d-md-block` : `d-none d-sm-block d-md-block`}`}>
                    <SideBar isNavOpened={isNavOpened} setIsNavOpened={setIsNavOpened} />
                </div>
                <div className={`position-absolute end-0 top-0 col-md-10 position-relative ${isNavOpened ? `vh-100` : ``}`}>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

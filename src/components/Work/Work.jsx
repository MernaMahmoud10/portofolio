import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Work() {
  const [tap, setTap] = useState("graphic");
  return (
    <div id='work' className='myContainer  py-5 mt-3 d-lg-flex d-block flex-column justify-content-center'>
      <p className="containerTitle">MY WORK</p>
      <h2 className="containerHeading">RECENT WORK</h2>
      <ul className='d-flex ps-0'>
        <Link className={`pe-3 nav-link ${tap == "graphic" ? "active" : ""}`} to="" onClick={() => setTap("graphic")}>Graphic Design</Link>
        <Link className={`pe-3 nav-link ${tap == "apps" ? "active" : ""}`} to="apps" onClick={() => setTap("apps")}>Apps</Link>
        <Link className={`pe-3 nav-link ${tap == "software" ? "active" : ""}`} to="software" onClick={() => setTap("software")}>Software</Link>

      </ul>
      <Outlet />
    </div>
  )
}

import React from 'react'
import style from "./skills.module.css"

export default function Skills() {
  return (
    <div id='skills' className='myContainer py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100'>
      <p className={style?.skillsTitle}>MY SPECIALTY</p>
      <h2 className={style?.skillsHeading}>MY SKILLS?</h2>
      <p className={style?.skillsText}>
        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
      </p>
      <div className='row'>
        <div className='col-md-6'>
          <h3 className={`mb-2 ${style?.progressTitle}`}>Photoshop</h3>
          <div className="progress">
            <div className="rounded progress-bar photoShopProgress" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className={`mb-2 ${style?.progressTitle}`}>jQuery</h3>
          <div className="progress">
            <div className="rounded progress-bar bg-danger jQueryProgress" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className={`mb-2 ${style?.progressTitle}`}>HTML5</h3>
          <div className="progress">
            <div className="rounded progress-bar bg-warning htmlprogress" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className={`mb-2 ${style?.progressTitle}`}>CSS3</h3>
          <div className="progress">
            <div className="rounded progress-bar cssProgress" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className={`mb-2 ${style?.progressTitle}`}>WordPress</h3>
          <div className="progress">
            <div className="rounded progress-bar WordPressProgress" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className='col-md-6'>
          <h3 className={`mb-2 ${style?.progressTitle}`}>SEO</h3>
          <div className="progress">
            <div className="rounded progress-bar SEOProgress" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

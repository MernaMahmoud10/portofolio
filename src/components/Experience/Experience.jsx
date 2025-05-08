import React from 'react'
import style from "./experience.module.css"

export default function Experience() {
  return (
    <div  className='myContainer  my-5 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100'>
      <p className="containerTitle">EXPERIENCE</p>
      <h2 className="containerHeading">WORK EXPERIENCE</h2>
      <ul className={style?.timeline}>
        <li>
          <div className={style?.timelineBadge}>
            <i className="fa-solid fa-pencil"></i>
          </div>
          <div className={style?.timelinePanel}>
            <h2>
              <a href="#">Full Stack Developer </a>
              <span> 2017-2018</span>
            </h2>
            <p className="mb-3">Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
          <div className='clr'></div>
        </li>
        <li>
          <div className={`${style?.timelineBadge} ${style?.danger}`}>
            <i className="fa-solid fa-pencil"></i>
          </div>
          <div className={style?.timelinePanel}>
            <h2>
              <a href="#">Front End Developer at Google Company </a>
              <span> 2017-2018</span>
            </h2>
            <p className="mb-3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div>
          <div className='clr'></div>
        </li>
        <li>
          <div className={`${style?.timelineBadge} ${style?.warning}`}>
            <i className="fa-solid fa-pencil"></i>
          </div>
          <div className={style?.timelinePanel}>
            <h2><a href="#">System Analyst </a>
              <span> 2017-2018</span>
            </h2>
            <p className="mb-3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div>
          <div className='clr'></div>

        </li>
        <li>
          <div className={style?.timelineEnd}>
          </div>
        </li>
      </ul>
    </div>
  )
}

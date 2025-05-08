import React from 'react'
import style from "./about.module.css"
export default function About() {
  return (
    <>
      <div className='myContainer py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100'>
        <p className="containerTitle">ABOUT US</p>
        <h2 className="containerHeading">WHO AM I?</h2>
        <p className="containerText">
          <strong>Hi Im Jackson Ford </strong>
          On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.
        </p>
        <p className="containerText">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <div className='row'>
          <div className='col-md-3'>
            <div className={`${style?.services} ${style?.services1}`}>
              <i className={`fa-regular fa-lightbulb ${style?.icon1}`}></i>
              <h3>Graphic Design</h3>
            </div>
          </div>
          <div className='col-md-3'>
            <div className={`${style?.services} ${style?.services2}`}>
              <i className={`fa-solid fa-earth-africa ${style?.icon2}`}></i>
              <h3>Web Design</h3>
            </div>
          </div>
          <div className='col-md-3'>
            <div className={`${style?.services} ${style?.services3}`}>
              <i className={`fa-solid fa-database ${style?.icon3}`}></i>
              <h3>Software</h3>
            </div>
          </div>
          <div className='col-md-3'>
            <div className={`${style?.services} ${style?.services4}`}>
              <i className={`fa-solid fa-mobile-screen-button ${style?.icon4}`}></i>
              <h3>Application</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

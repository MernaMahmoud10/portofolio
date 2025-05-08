import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import images from '../../helpers/images';
export default function Home() {
  return (
    <Carousel
      prevIcon=""
      nextIcon=""
      indicators={false}
      interval={2500}
      pause={false}
      fade
      data-bs-theme="dark">
      <Carousel.Item>
        <div className='w-100 vh-100 slider' style={{ backgroundImage: `url(${images?.slider?.slide1})` }}>
        </div>
        <Carousel.Caption>
          <h1 className='text-lg-start'>Hi!
            <br />
            Im Jackson
          </h1>
          <p className='text-lg-start'>100% html5 bootstrap templates Made
            <br />
            By <span>Colorlib.com</span></p>
          <button>Download CV <i class="fa-solid fa-download"></i></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='w-100 vh-100 slider' style={{ backgroundImage: `url(${images?.slider?.slide2})` }}>
        </div>

        <Carousel.Caption>
          <h1 className='text-lg-start'>I am <br /> a Designer</h1>
          <p className='text-lg-start'>100% html5 bootstrap templates Made
            <br />
            By <span>Colorlib.com</span></p>
          <button>View Portfolio <i class="fa-solid fa-briefcase"></i></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

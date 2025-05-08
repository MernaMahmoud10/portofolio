import React, { useState } from 'react'
import style from "./Graphic.module.css"
import images from '../../helpers/images'

export default function Graphic() {
    const [isAllPhotos, setIsAllPhotos] = useState(false);
    const worksArr = ["work1", "work2", "work3", "work4", "work5", "work6"]
    return (
        <>
            <div className='row'>
                {isAllPhotos ?
                    worksArr?.map((workNum) =>
                        <div className='col-md-6'>
                            <div className={style?.workPhoto} style={{ backgroundImage: `url(${images?.work?.[workNum]})` }}>
                                <div className={`pt-4 ${style?.imgInfo}`}>
                                    <div className={style?.content}>
                                        <h3>
                                            <a href="work.html">{workNum}</a>
                                        </h3>
                                        <span>Animation</span>
                                        <p className={style?.icon}>
                                            <span>
                                                <a href="#">
                                                    <i className="fa-solid fa-share-nodes"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i className="fa-regular fa-eye"></i>
                                                    100</a>
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i className="fa-regular fa-heart">
                                                    </i>
                                                    49
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                    :
                    worksArr?.slice(0, 4).map((workNum) =>
                        <div className='col-md-6'>
                            <div className={style?.workPhoto} style={{ backgroundImage: `url(${images?.work?.[workNum]})` }}>
                                <div className={`pt-4 ${style?.imgInfo}`}>
                                    <div className={style?.content}>
                                        <h3>
                                            <a href="work.html">{workNum}</a>
                                        </h3>
                                        <span>Animation</span>
                                        <p className={style?.icon}>
                                            <span>
                                                <a href="#">
                                                    <i className="fa-solid fa-share-nodes"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i className="fa-regular fa-eye"></i>
                                                    100</a>
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i className="fa-regular fa-heart">
                                                    </i>
                                                    49
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div >
            {isAllPhotos ? `` : <div className='d-flex justify-content-start'>
                <button className='showMoreButton btn btn-primary'
                    onClick={() => setIsAllPhotos(true)}>Show More</button>
            </div>}
        </>
    )
}

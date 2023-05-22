import React from 'react'
import { useRef } from 'react';
import reviwBG from '../assets/marriot-full-view.jpg'
import faceImg from '../assets/pictures/face.jpg'

const Reviews = () => {
    const carouselElem = useRef(null);
    const revieElem = useRef(null);
    const intervalRef = useRef(null);
    const animateScroll = (direction) => {
        const widthToStop = (87.9/100 * carouselElem.current.offsetWidth).toFixed();
        let maxWidth = carouselElem.current.offsetWidth;
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            scrollCarousel(direction);
        }, 1);
        const scrollCarousel = (direction) => {
            if (revieElem.current.scrollLeft == widthToStop) {
                clearInterval(intervalRef.current);
            }
            else {
                if (direction === 'right') {
                    revieElem.current.scrollLeft += 5;
                }
                else {
                    revieElem.current.scrollLeft -= 5;
                }
            }    
        }
    }
        
  return (
    <section className='container about pe-0 py-3 py-lg-5 border-bottom' style={{backgroundImage: `url(${reviwBG})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="customer-review" ref={carouselElem}>
            <p className='h4 p-3 text-white'>Customer Reviews</p>
            <div className="d-flex gap-3 overflow-scroll" ref={revieElem}>
                <div className="col-11 py-3 review">
                    <div className="container bg-white">
                        <div className="py-2 ">
                            <p>Star Rating</p>
                        </div>
                        <div className="py-2 profile-pic">
                            <img src={faceImg} alt='face' className='img-fluid' />
                        </div>
                        <div className="py-2 comment">
                            <h6 className="title">Comment Title</h6>
                            <p className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae perspiciatis perferendis.</p>
                        </div>
                    </div>
                </div>
                <div className="col-11 py-3 review">
                    <div className="container bg-white">
                        <div className="py-2 ">
                            <p>Star Rating</p>
                        </div>
                        <div className="py-2 profile-pic">
                            <img src={faceImg} alt='face' className='img-fluid' />
                        </div>
                        <div className="py-2 comment">
                            <h6 className="title">Comment Title</h6>
                            <p className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae perspiciatis perferendis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex slide-indicate gap-2 justify-content-center align-items-center text-white">
                <i className="bi bi-arrow-left-circle m-4 fs-2" onClick={() => animateScroll('left')}></i>
                <div className="indicate rounded bg-warning">&nbsp;</div>
                <div className="indicate rounded">&nbsp;</div>
                <div className="indicate rounded">&nbsp;</div>
                <div className="indicate rounded">&nbsp;</div>
                <i className="bi bi-arrow-right-circle m-4 fs-2" onClick={() => animateScroll('right')}></i>
            </div>
        </div>
    </section>
  )
}

export default Reviews
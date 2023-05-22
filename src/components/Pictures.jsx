import React from 'react';
import pool from '../assets/pictures/pool.avif';
import reception from '../assets/pictures/reception.avif';

const Pictures = () => {
    const images = [
        {
            id: 1,
            src: reception,
            css: 'col-12 col-lg-9',
        },
        {
            id: 2,
            src: pool,
            css: 'col-6 col-lg-3 pic-comp',
        },
        {
            id: 3,
            src: reception,
            css: 'col-6 col-lg-3 pic-comp',
        },
        {
            id: 4,
            src: pool,
            css: 'col-12 col-lg-9',
        },
    ]
  return (
    <section className='container-fluid about py-3 py-lg-5 border-bottom'>
        <h4 className='py-3'>Pictures</h4>
        <div className='container-fluid text-center overflow-hidden'>
            <div className='row flex-wrap gx-3 gy-4'>
                {images.map(index => {
                  return (
                    <div key={index.id} className={index.css}>
                        <img src={index.src} className='img-fluid rounded' alt='reception' />
                    </div>
                  )
                })}
                    
            </div>
        </div>
    </section>
  )
}

export default Pictures
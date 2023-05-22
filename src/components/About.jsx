import React from 'react';
import Assets from './Assets';
import mfv from '../assets/marriot-full-view.jpg';

const About = () => {
  return (
    <section className='container-fluid about pt-3 py-lg-5 border-bottom'>
        <div className='row flex-row-reverse'>
            <div className='col-12 col-lg-8 px-lg-5'>
                <div className='l'>
                    <h1 className='h3 py-2'>About Us</h1>
                    <p className='lh-lg'>Feel the comfort with Deluxe Features in all our Guest Rooms, After a busy day in the business center of Victoria Island, return to your comfortable hotel rooms’ luxurious ambiance, all air conditioned with individual control, large windows, extra deep bathtub, delicious room service options and hotel services like concierge and laundry. </p>
                </div>
                <Assets display='d-none d-lg-block' border='col' col='col-4' />
            </div>
            <div className='col-12 col-lg-4 position-relative'>
                <img src={mfv} className='img-fluid' alt='Marriot Full View' style={{height: '100%', objectFit: 'cover'}}/>
                <i className="bi bi-play-circle position-absolute top-50 start-50 text-white h2 translate-middle"></i>
            </div>
            <Assets display='d-lg-none' border='border-bottom' col='col-6' />
        </div>
    </section>
  )
}

export default About
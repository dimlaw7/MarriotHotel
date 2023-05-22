import React from 'react'
import gym from '../assets/icons/gym.svg'
import yoga from '../assets/icons/yoga.svg'
import spa from '../assets/icons/spa.svg'
import restaurant from '../assets/icons/restaurant.svg'
import pool from '../assets/icons/pool.svg'
import conference from '../assets/icons/conference.svg'

export const Services = () => {
  return (
    <section className='container-fluid about py-3 py-lg-5 border-bottom'>
        <h4 className='py-3'>Services</h4>
        <div className="container-fluid text-center overflow-hidden">
            <div className="row flex-wrap gx-2 gy-4 services">
                <div className="d-none d-lg-block text-end" style={{flexBasis: '100%'}}>
                    <i className="bi bi-arrow-left-circle h4 px-2 text-warning"></i>
                    <i className="bi bi-arrow-right-circle h4 px-2"></i>
                </div>
                <div className='col-4 col-lg-2'>
                    <img src={gym} alt='icon' className='px-4 py-2' />
                    <h6 className='text-warning py-2'>Gym Hall</h6>
                </div>
                <div className='col-4 col-lg-2'>
                    <img src={yoga} alt='icon' className='px-4 py-2' />
                    <h6 className='text-warning py-2'>Yoga</h6>
                </div>
                <div className='col-4 col-lg-2'>
                    <img src={spa} alt='icon' className='px-4 py-2' style={{height: '53.3px'}} />
                    <h6 className='text-warning py-2'>Spa</h6>
                </div>
                <div className='col-4 col-lg-2'>
                    <img src={restaurant} alt='icon' className='px-4 py-2' />
                    <h6 className='text-warning py-2'>Restaurant</h6>
                </div>
                <div className='col-4 col-lg-2'>
                    <img src={pool} alt='icon' className='px-4 py-2' />
                    <h6 className='text-warning py-2'>Pool</h6>
                </div>
                <div className='col-4 col-lg-2'>
                    <img src={conference} alt='icon' className='px-4 py-2' />
                    <h6 className='text-warning py-2'>Conference</h6>
                </div>
            </div>
        </div>
    </section>
  )
}
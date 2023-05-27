import React from 'react';
import budgetRoom from '../assets/rooms/budget-suite.jpg';
import comfyRoom from '../assets/rooms/comfy-room.jpg';
import execRoom from '../assets/rooms/executive-room.jpg';
import presRoom from '../assets/rooms/presidential-bedroom.jpg';
import pressRoom2 from '../assets/rooms/presidential-bedroom-3.jpg';
import standSuite from '../assets/rooms/stand-suite.jpg';
import guestIcon from '../assets/icons/guests.svg';

const Rooms = () => {
    const arr = [
        {
            id: 1,
            image: budgetRoom,
            title: 'Budget Rooms',
            price: 100,
        },
        {
            id: 2,
            image: comfyRoom,
            title: 'Comfort Rooms',
            price: 185,
        },
        {
            id: 3,
            image: execRoom,
            title: 'Executive Rooms',
            price: 255,
        },
        {
            id: 4,
            image: presRoom,
            title: 'Presidential Rooms',
            price: 295,
        },
        {
            id: 5,
            image: pressRoom2,
            title: 'Deluxe Rooms',
            price: 300,
        },
        {
            id: 6,
            image: standSuite,
            title: 'Standard Suite',
            price: 400,
        },];
    const bStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${comfyRoom}) no-repeat`,
        height: '300px',
        backgroundSize: 'cover',
    }
  return (
    <section className='container-fluid about py-3 py-lg-5 border-bottom'>
        <h4 className='py-3'>Rooms</h4>
        <div className="container-fluid text-center overflow-hidden">
            <div className="row row-cols-1 row-cols-lg-3 flex-wrap gx-3 gy-4 services">
                {arr.map(index => {
                return (
                    <ul key={index.id} className='list-rooms'>
                        <li className='col position-relative' style={{...bStyle, background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${index.image}) no-repeat`}}>
                            <div className='position-absolute ps-2' style={{bottom: '1%'}}>
                                <h6 className='text-white py-1'>{index.title}</h6>
                                <div className='d-flex align-items-baseline'>
                                    <h6 className='mr-2 text-white'>${index.price}</h6>
                                    <img src={guestIcon} className='mx-2' style={{height: '20px'}} alt='rooms' />
                                    <p className='mx-2 text-white'>night</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                )
                })}
            </div>
        </div>
    </section>
  )
}

export default Rooms
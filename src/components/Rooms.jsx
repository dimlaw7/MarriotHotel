import React from 'react';
import comfyRoom from '../assets/rooms/comfy-room.jpg';
// import presRoom from '../assets/rooms/presidential-bedroom.jpg';
// import standSuite from '../assets/rooms/stand-suite.jpg';
// import pressRoom2 from '../assets/rooms/presidential-bedroom-3.jpg';
import guestIcon from '../assets/icons/guests.svg';

const Rooms = () => {
    const arr = [1,2,3,4,5,6];
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
                    <ul key={index} className='list-rooms'>
                        <li className='col position-relative' style={bStyle}>
                            <div className='position-absolute ps-2' style={{bottom: '1%'}}>
                                <h6 className='text-white py-1'>Comfort Rooms</h6>
                                <div className='d-flex align-items-baseline'>
                                    <h6 className='mr-2 text-white'>$100</h6>
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
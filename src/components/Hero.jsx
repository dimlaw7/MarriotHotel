import React from 'react'
import Select from 'react-select';
import Navbar from './Navbar';

const Hero = () =>{
  const rooms = [
    { value: 'standard', label: 'Standard Room' },
    { value: 'suite', label: 'Presidential Suite' },
  ];
  const guests = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];
  const customStyles = { //Styles for <Select /> hook
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? '#212529' : '#fff',
      backgroundColor: state.isSelected ? '#a0a0a0' : '#212529',
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#fff' }),
    indicatorSeparator: () => ({ display: 'none' }),
  };
  return (
    <>
    <section className='position-relative hero text-center'>
        <div className='overlay' >
            <Navbar />
            <div className='position-absolute top-50 start-50 translate-middle w-75 text-white mt-5 mt-lg-0'>
              <h1 className='hero-h1 animate__animated animate__bounceInDown'>STAY TWICE AND EARN A FREE NIGHT!</h1>
              <p className='small animate__animated animate__bounceInUp'>Marriott hotel operating in our capital can be called on of the best places that meets all the wishes of guests with refined state</p>
              <button type='button' className='d-block d-md-none btn btn-warning text-white mx-auto mt-5 animate__animated animate__bounceInUp'>Book Now</button>
              <form className='d-none d-md-block container marriot-booking rounded mt-5'>
                <div className='d-inline-block px-3 my-3'>
                  <Select options={rooms} onChange='' styles={customStyles} placeholder='Rooms / Suite'/>
                </div>
                <label htmlFor='date' className='d-inline-block px-3 my-3 border-start'>
                  <input type='date' name='date' id='date' />
                </label>
                <div className='d-inline-block px-3 my-3 border-start'>
                  <Select options={guests} onChange='' styles={customStyles} placeholder='Guests'/>
                </div>
                <button type='button' className='btn btn-warning text-white'>Search</button>
              </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero;
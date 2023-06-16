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
            <div className='position-absolute start-50 translate-middle w-75 text-white mt-5 mt-lg-0 hero-text'>
              <h1 className='hero-h1 animate__animated animate__bounceInDown'>STAY TWICE AND EARN A FREE NIGHT!</h1>
              <p className='small animate__animated animate__bounceInUp'>Marriott hotel operating in our capital can be called on of the best places that meets all the wishes of guests with refined state</p>
              <button type='button' className='d-block d-md-none btn btn-warning btn-sm bkn text-white mx-auto mt-5 animate__animated animate__bounceInUp'>Book Your Stay</button>
              <form className='d-none d-md-block container marriot-booking rounded mt-5 py-2'>
                <div className='d-inline-block px-3'>
                  <Select options={rooms} onChange='' styles={customStyles} placeholder='Rooms / Suite'/>
                </div>
                <label htmlFor='date' className='position-relative d-inline-block px-3 border-start'>
                  <input type='date' name='date' id='date' />
                  <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </label>
                <div className='d-inline-block px-3 border-start'>
                  <Select options={guests} onChange='' styles={customStyles} placeholder='Guests'/>
                </div>
                <button type='button' className='btn btn-warning btn-sm text-white'>Search</button>
              </form>
            </div>
            <div class="css-1xc3v61-indicatorContainer ic-jump justify-content-center position-absolute start-50 translate-middle" aria-hidden="true">
              <svg height="30" width="30" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-tj5bde-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero;
import React from 'react';

const Assets = ({display, border, col}) => {
  return (
        <div className={'col-12 '+ display +' bg-light'}>
            <div className='row'>
            <div className={border}>
                <div className='row d-flex align-items-center mt-3 py-2'>
                    <div className={col}>
                        <h1 className='text-warning'>553+</h1>
                    </div>
                    <div className={col + ' d-lg-none'}>
                        <h6>Standard Rooms</h6>
                    </div>
                </div>
                </div>
                <div className={border}>
                    <div className='row d-flex align-items-center mt-3 py-2'>
                        <div className={col}>
                            <h1 className='text-warning'>120+</h1>
                        </div>
                        <div className={col + ' d-lg-none'}>
                            <h6>Comfy Suites</h6>
                        </div>
                    </div>
                </div>
                <div className={border}>
                    <div className='row d-flex align-items-center mt-3 py-2'>
                        <div className={col}>
                            <h1 className='text-warning'>60+</h1>
                        </div>
                        <div className={col + ' d-lg-none'}>
                            <h6>Gym tools</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assets
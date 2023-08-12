import React from 'react';
import CountUp from 'react-countup';
import './NumberCounter.css';
import {AiOutlinePlus} from 'react-icons/ai'
const NumberCounter = () => {
  return (
    <section className='number-counter-container-wrapper'>
      <div className='number-counter-container'>
      <div className='counter-item'>
        <div>
        <CountUp end={200} duration={10}  className='range'/><AiOutlinePlus/>
        </div>
        <p>Wedding</p>
      </div>
      <div className='counter-item'>
        <div>
        <CountUp end={119} duration={10}  className='range'/><AiOutlinePlus/>

        </div>
        <p>Pre Wedding Shoot</p>
      </div>
      <div className='counter-item'>
        <div>

        <CountUp end={45} duration={10}  className='range' /><AiOutlinePlus/>
        </div>
        <p>Birthday Shoot</p>
      </div>

      </div>
    </section>
  );
};

export default NumberCounter;

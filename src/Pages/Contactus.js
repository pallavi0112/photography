import React from 'react'
import './Contactus.css'
import img2 from '../Images/Header/img2.jpg'
import Form from '../Component/Form/WeddingForm'
const Contactus = () => {
    return (
        <section className='contact-us-section'>
            <div>
            <div className='contact-us-left'>
                <img src={img2} alt='contact_us' />
            </div>
            <div className='contact-us-right'>
            <span className='section-header'>Capture Your Perfect Moments with Us!</span>
            <p className='section-header-content'>Don't miss the chance to cherish your wedding memories forever. 
            Contact us today to discuss your dream photo shoot and secure your 
            spot on our calendar. We can't wait to be a part of your extraordinary 
            day and create a treasure trove of beautiful memories together!</p>
                <Form />

            </div>
            </div>
        </section>
    )
}

export default Contactus
import React, { useState } from 'react'
import { data } from './FAQData'
import './Faq.css'
import AccordionItem from './AccordionItem';
import faq1 from '../../Images/Header/img9.jpg'
import faq2 from '../../Images/Header/img10.jpg'
import faq3 from '../../Images/Header/img11.jpg'

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleToggle = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className='accordion-container'>
            <div className='accordion-container-left'>
                <span className='section-header'>Frequently Asked Questions</span>
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.que}
                        answer={item.ans}
                        isExpanded={index === expandedIndex}
                        handleToggle={() => handleToggle(index)}
                    />
                ))}

            </div>
            <div className='accordion-container-right'>
                <div className='imgBx'>
                    <img src={faq2} alt='faq 2' />
                    <img src={faq1} alt='faq 1' />
                    <img src={faq3} alt='faq 3' />
                </div>
            </div>
        </div>
    );

}

export default Faq
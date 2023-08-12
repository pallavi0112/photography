import React from 'react'
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'

const AccordionItem = ({ question, answer, isExpanded, handleToggle }) => {
    return (
      <div className='accordion-item'>
        <div className='accordion-header' onClick={handleToggle}>
          <h3>{question}</h3>
          <span>{isExpanded ? <AiOutlineMinus className='accordion-icon'/> : <AiOutlinePlus className='accordion-icon'/>}</span>
        </div>
        {isExpanded && <div className={isExpanded ?'accordion-content active' : 'accordion-content'}>{answer}</div>}
      </div>
    );
  };

export default AccordionItem
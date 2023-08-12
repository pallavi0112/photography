import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDoubleRight} from 'react-icons/ai'
const CategoryItem = ({title , path , img}) => {
  return (
    <div className='category-item'>
         <div>
             <span>{title}</span>
             <button>

             <Link to={path}>view More <AiOutlineDoubleRight/></Link>
             </button>
         </div>
         <div>
              <img src={img} alt='category'/>
         </div>
    </div>
  )
}

export default CategoryItem
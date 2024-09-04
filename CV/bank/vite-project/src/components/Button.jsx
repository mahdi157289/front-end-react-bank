import React from 'react'

const Button = ({styles}) => (
  
    <button type="button" className={` py-4 px-6 bg-blue-gradient 
         font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] rounded-[10px] ${styles}`}>
      get started 
    </button>
  
);

export default Button

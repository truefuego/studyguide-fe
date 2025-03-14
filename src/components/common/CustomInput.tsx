import React from 'react'
import { ICustomInputProps } from './type';

const CustomInput:React.FC<ICustomInputProps> = ({ userInput, setUserInput }) => {  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };
    
  return (
    <div>      
        <input value={userInput} onChange={handleChange} className='bg-graph-bg border-3 rounded-xl border-graph-border text-lg text-secondary-text py-2 px-4'/>
    </div>
  )
}

export default CustomInput
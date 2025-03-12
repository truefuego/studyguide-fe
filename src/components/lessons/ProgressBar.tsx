import React from 'react'
import { IProgrssBarProps } from './type'

const ProgressBar:React.FC<IProgrssBarProps> = ({ value, max }) => {
    const progress = Math.min(100, Math.max(0, (value / max) * 100));
  
    return (
      <div className={`w-[70vw] min-w-[250px] md:w-[50vw] h-3 bg-card-bg rounded-full overflow-hidden`}>
        <div
          className={`h-full bg-accent-green transition-all duration-300 ease-in-out rounded-full`}
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
  )
}

export default ProgressBar;

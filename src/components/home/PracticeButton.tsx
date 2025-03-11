import React from 'react'
import { IPracticeButtonProps } from './type'
import Text from '../common/Text'
import { useNavigate } from 'react-router-dom'

const PracticeButton:React.FC<IPracticeButtonProps> = ({text, link}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link);
    }

  return (
    <div className='px-16 py-2 bg-accent-blue border-accent-blue-border border-2 w-fit rounded-xl cursor-pointer' onClick={handleClick}>
        <Text text={text} color='primary-bg'/>
    </div>
  )
}

export default PracticeButton
import React from 'react'
import { ArrowIcon } from '../../assets/icons/icons'
import Text from '../common/Text'
import { ILessonsButtonProps } from './type'
import { useNavigate } from 'react-router-dom'

const LessonsButton:React.FC<ILessonsButtonProps> = ({ tag, complete, total }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(tag.replace(' ', '-').toLowerCase());
    }
  return (
    <div className='flex justify-between p-3 pl-5 pr-3 min-w-[300px] w-[25vw] h-fit border-2 border-secondary-text rounded-xl cursor-pointer' onClick={handleClick}>
        <div className='flex flex-col gap-1'>
            <Text text={tag} className='text-xl'/>
            <Text text={`${complete}/${total} Lessons`} className='text-tertiary-text'/>
        </div>
        <div className='text-secondary-text'>
            <ArrowIcon />
        </div>
    </div>
  )
}

export default LessonsButton
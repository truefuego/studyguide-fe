import React from 'react'
import Text from '../../common/Text'
import { useLocation, useNavigate } from 'react-router-dom';
import { ISidePanelButtonProps } from '../type';

const SidePanelButton:React.FC<ISidePanelButtonProps> = ({ text, Icon }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActiveTab = (pathname.split('/').pop() || 'profile') === text.toLowerCase();

    const handleClick = () => {
        if(!isActiveTab) navigate(text === 'Profile' ? '/' : text.toLowerCase());
    }

  return (
    <div onClick={handleClick} className={`flex ${isActiveTab ? 'cursor-default' : 'cursor-pointer'} items-center justify-between`}>
        <div className={`${isActiveTab ? 'text-primary-text' : 'text-tertiary-text'} flex items-center gap-3 ml-2 transition-colors duration-300`}>
            <Icon />
            <Text text={text} className={`text-xl ${isActiveTab ? 'text-primary-text' : 'text-tertiary-text'} transition-colors duration-300`}/>
        </div>
        <div className={`rounded-full bg-primary-text ${isActiveTab ? 'h-2 w-2' : 'h-0 w-0'} transition-all duration-300`}/>
    </div>
  )
}

export default SidePanelButton;

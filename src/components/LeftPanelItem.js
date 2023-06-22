import React, { useContext,useState } from 'react'
import {Context} from '../context/contextApi';
import { useEffect } from 'react';

const LeftPanelItem = ({text, icon, action, className}) => {
  const {open} = useContext(Context);
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
setIsClicked(false);
  },[isClicked]);

  const handleClick = () => {
    setIsClicked(true);
    action(); // Perform the original action
  };
  return (
    <div className={`text-white  text-sm cursor-pointer h-10 flex items-center justify-start px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${
      isClicked ? 'border-r-4 border-white' : ''
    }`+ className}
    onClick={handleClick}>
      <span className='text-xl mr-5'>{icon}</span>
    <span className={`${!open && 'hidden'}`}>{text}</span>
    </div>
  );
}

export default LeftPanelItem
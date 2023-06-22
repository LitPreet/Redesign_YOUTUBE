import React from 'react'
import LeftPanelItem from './LeftPanelItem';
import { BsArrowLeftShort } from 'react-icons/bs';
import { categories } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/contextApi';


const LeftPanel = () => {
    const {
        selectedCategory,
        setSelectedCategory,
        open,
        setOpen,
      } = useContext(Context);
      const navigate = useNavigate();

     
    
      const ClickItemHandler = (name,type) => {
        switch (type) {
          case "category":
            return setSelectedCategory(name);
          case "home":
            return setSelectedCategory(name);
          case "menu":
            return navigate('/liked-videos');
            case "subs":
              return navigate('/subscribe-channel');
          default:
            break;
        }
      };
    
  return (
    <div
    className={`bg-[#222222] z-10 rounded-s-none  rounded-xl  h-[500px] md:h-[500px] md:translate-x-0  pt-8  ${
      open ? "w-60" : "w-12" 
    } duration-300 fixed`}
  >
    <BsArrowLeftShort
      className={`bg-white text-black text-3xl border border-black rounded-full cursor-pointer absolute -right-5 top-9 ${
        !open && "rotate-180"
      }`}
      onClick={() => setOpen(!open)}
    />

    {categories.map((item) => {
      return (
        <React.Fragment key={item?.name}>
          <LeftPanelItem
            text={item.type === "home" ? "Home" : item.name}
            icon={item.icon}
            action={() => {
              ClickItemHandler(item.name, item.type);
              {item.type === 'menu' ? navigate('/liked-videos') :   navigate("/")}
              if(item.type === 'subs') navigate('/subscribe-channel');
            
            
            }}
            className={`${
              selectedCategory === item.name ? "text-[#ad0000]" : ""
            }`}
          />
          {item.divider && <hr className="border-white/[0.2]" />}
        </React.Fragment>
      );
    })}
  </div>
  )
}

export default LeftPanel
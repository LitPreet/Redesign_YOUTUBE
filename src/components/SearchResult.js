import React, { useContext, useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api';
import { Context } from '../context/contextApi';
import SearchResultVideoCard from './searchResultVideoCard';
import LeftPanel from './LeftPanel';

const SearchResult = () => {


const [result, setResult] = useState();
const { searchQuery } = useParams();
const {  setLoading } = useContext(Context);

useEffect(() =>{
  document.getElementById('root').classList.remove('custom-h');
  fetchSearchResult();
},[searchQuery]);

const fetchSearchResult = () =>{
  setLoading(true);
  fetchDataFromApi(`search/?q=${searchQuery}`).then((res) =>{
    setResult(res?.contents);
    setLoading(false);
  });
}

  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
    <LeftPanel />
    <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black ml-[48px]'>
      <div className='grid grid-cols-1 gap-2 p-5'>
        {result && result.map((item) => {
          if(item?.type !== 'video') return false;
          let video = item?.video;
          return (
            <SearchResultVideoCard key={video?.videoId} video={video} />
          )
        })}

      </div>
    </div>
  </div>
  )
}

export default SearchResult
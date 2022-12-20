import React from 'react';
import './player.scss';
import {BiSkipNext,BiSkipPrevious,BiShuffle} from 'react-icons/bi';
import{BsPlayCircleFill,BsPauseCircleFill} from 'react-icons/bs'
const Player = ({audioElem, isPlaying, setisPlaying, currentStation, setCurrentStation, station})=> {

  

  const PlayPause = ()=>
  {
    setisPlaying(!isPlaying);

  }

  const prevStation = ()=>
  {
    const index = station.findIndex(x=>x.title === currentStation.title);
    if (index === 0)
    {
      setCurrentStation(station[station.length - 1])
    }
    else
    {
      setCurrentStation(station[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  const nextStation = ()=>
  {
    const index = station.findIndex(x=>x.title === currentStation.title);

    if (index === station.length-1)
    {
      setCurrentStation(station[0])
    }
    else
    {
      setCurrentStation(station[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }

  const shuffleStation=()=>{
    const index = station.findIndex(x=>x.title === currentStation.title);
    for(let i=0;i<index.length;i++){
      
    }

    }
  

  return (
    <div className='player_container'>
      <center>Radio 2000</center>
      <div className="title">
        
        <p>{currentStation.image}</p>
        
        <center>{currentStation.title}</center>
        
      </div>
      
      <div className="controls">
      <BiSkipPrevious className='btn_action' onClick={prevStation}/>
        {isPlaying ? <BsPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
        <BiSkipNext className='btn_action' onClick={nextStation}/>      
      </div>
      <div className="controls">
      <BiShuffle className='btn_action' onClick={shuffleStation}/>
      </div>
    </div>
  
  )
}

export default Player
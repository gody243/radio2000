import './App.css';
import Player from './Player/Player';
import { stationdata } from './Player/audios';
import { useRef, useState, useEffect } from 'react';

const App = () => {
  const [station, setStation] = useState(stationdata);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState(stationdata[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isPlaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentStation({ ...currentStation, "progress": ct / duration * 100, "length": duration })

  }


  return (
    <div className="App">
      
      <audio src={currentStation.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player station={station} setStation={setStation} isPlaying={isPlaying} setisPlaying={setisPlaying} audioElem={audioElem} currentStation={currentStation} setCurrentStation={setCurrentStation} />
    </div>
  );
}

export default App;

import React, { useState, Fragment, useEffect } from 'react';


const INITIAL_LOCATION = {
  latitude: null,
  longitude: null,
  speed: null
}
function App() {
  let [counter, setCounter] = useState(0);
  let [isOn, setIsOn] = useState(false);
  let [networkConnection, setNetworkConnection] = useState(navigator.onLine);
  let [mousePosition, setMousePosition] = useState({x:null, y: null});
  let [geoLocation, setLocation] = useState(INITIAL_LOCATION);
let mounted = true;
  const incrementCount=()=>{
    return setCounter(prevCount=> ++prevCount);
  }

  const toogleLIight=()=>{
    return setIsOn(prevCount=> !prevCount);
  }

  const handleOffline=(event)=>{
    
    return setNetworkConnection(prevNetworkStatus=> !prevNetworkStatus);
  }

  const handleOnline=(event)=>{
    
    return setNetworkConnection(prevNetworkStatus=> !prevNetworkStatus);
  }

  const handleMouseMoves=(event)=>{
    
    return setMousePosition( {x:event.pageX, y:event.pageY});
  }

  const handleCurrentLocation =(event)=>{
    if(mounted){return setLocation({
      latitude: event.coords.latitude, 
      longitude: event.coords.longitude, 
      speed: event.coords.speed
    });}
  }

  useEffect(()=>{
    document.title = `You have clicked ${counter} times`; 
  },[counter]);

  useEffect(()=>{
    document.title = window.addEventListener('mousemove', handleMouseMoves); 
    document.title = window.addEventListener('online', handleOnline); 
    document.title = window.addEventListener('offline', handleOffline); 
    navigator.geolocation.getCurrentPosition(handleCurrentLocation);
    const watchID =navigator.geolocation.watchPosition(handleCurrentLocation);

    return ()=>{
      document.title = window.removeEventListener('online', handleMouseMoves);
      document.title = window.removeEventListener('offline', handleMouseMoves);
      document.title = window.removeEventListener('mousemove', handleMouseMoves);
      navigator.geolocation.clearWatch(watchID);
      mounted = false;
    }
  },[]);



  return (
    <Fragment style={{display: 'flex', flexDirection: "column"}}>
    <h2>COUNTER</h2>
    <div>{counter}</div>
     <button onClick={()=>incrementCount()}>add</button>
     <h2>TOOGLE LIGHT</h2>
     <button onClick={()=>toogleLIight()}> TOOGLE LIGHT</button>
     <img 
     src={isOn? 'https://icon.now.sh/highlight/fd0': 'https://icon.now.sh/highlight/aaa'}
     alt='flashlight'
     style={{
       height: '50px',
       width: "50px",
     }}/>

     <h2>Mouse Moves</h2>
     <p>{`x value: ${mousePosition.x}`}</p>
     <p>{`y value: ${mousePosition.y}`}</p>

     <h2>Network Status</h2>
     <p>You are <strong style={{color: networkConnection? 'green': 'red'}}>

     {networkConnection? "online": "offline"}
     </strong>
     </p>

     <h2>geolocation</h2>
     <p>{`longitude : ${geoLocation.longitude}`}</p>
     <p>{`latitude : ${geoLocation.latitude}`}</p>
     <p>{`speed : ${geoLocation.speed? geoLocation.speed: 0 }`}</p>
     
    </Fragment>
  );
}

export default App;

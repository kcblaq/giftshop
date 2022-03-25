import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [mobile, setMobile] = useState(true)
  
 
  
  useEffect(() => {
      function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
        
        window.addEventListener('resize', handleResize);
        windowDimensions.width < 700 ? setMobile(true) : setMobile(false);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobile,windowDimensions]);
  return windowDimensions;
}


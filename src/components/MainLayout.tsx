import { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import Body from './Body';

const MainLayout = () => {
  // Define a breakpoint value that determines when the screen is considered mobile
  const mobileBreakpoint = 768; // You can adjust this value based on your design and requirements

  // Get the current window width
  const getWindowWidth = () => window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  // Check if the window width is below the mobile breakpoint to determine if it's a mobile screen
  const isMobile = windowWidth < mobileBreakpoint;

  useEffect(() => {
    // Function to update window width state when the window is resized
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    // Add event listener to window resize event
    window.addEventListener('resize', handleResize);
    console.log('isMobile:', isMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <>
      {isMobile ? <MobileHeader isOpen={false} /> : <DesktopHeader />}
      {/* Rest of your layout content... */}
      <Body />
    </>
  );
};

export default MainLayout;

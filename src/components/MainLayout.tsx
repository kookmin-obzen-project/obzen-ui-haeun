import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const MainLayout = () => {
    // Define a breakpoint value that determines when the screen is considered mobile
    const mobileBreakpoint = 768; // You can adjust this value based on your design and requirements
  
    // Get the current window width
    const windowWidth = window.innerWidth;
  
    // Check if the window width is below the mobile breakpoint to determine if it's a mobile screen
    const isMobile = windowWidth < mobileBreakpoint;
    
  return (
    <>
      {isMobile ? <MobileHeader isOpen={false} /> : <DesktopHeader />}
      {/* Rest of your layout content... */}
    </>
  );
};

export default MainLayout;

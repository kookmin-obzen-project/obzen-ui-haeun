import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import Body from './Body';

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

      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold">Main Layout Content</h1>
        <p className="mt-4 text-lg text-gray-600">This is the content of MainLayout.</p>
      </div>
      <Body /> {/* Body 컴포넌트를 렌더링합니다. */}
    </>
  );
};

export default MainLayout;

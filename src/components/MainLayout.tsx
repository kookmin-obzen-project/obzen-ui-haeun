import { useState, useEffect } from 'react';
import DesktopHeader from './Header';
import Body from './Body';

const MainLayout = () => {
  return (
    <>
      <DesktopHeader />
      {/* Rest of your layout content... */}
      <Body />
    </>
  );
};

export default MainLayout;

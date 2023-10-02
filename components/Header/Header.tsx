import { useResponsive } from '@root/hooks/useResponsive';
import React from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  const isMobile = useResponsive();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;

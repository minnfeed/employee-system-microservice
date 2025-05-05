import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
function MainLayout({ children }) {
  return (
    <div>
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;

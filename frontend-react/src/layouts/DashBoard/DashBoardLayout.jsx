import React from 'react';
import './DashBoard.css';
import { Outlet } from 'react-router-dom';
import Toolbar from '../../components/Toolbar/Toolbar';

function DashBoardLayout({ children }) {
  return (
    <div>
      <Toolbar />
      <div className="dashboard-container mt-5">
        <Outlet />
      </div>
    </div>
  );
}
export default DashBoardLayout;

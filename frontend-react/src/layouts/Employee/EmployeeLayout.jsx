import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import './Employee.css';
import { Outlet } from 'react-router-dom';
export default function Employee() {
  return (
    <div>
      <Toolbar />
      <div className="employee-container mt-5">
        <Outlet />
      </div>
    </div>
  );
}

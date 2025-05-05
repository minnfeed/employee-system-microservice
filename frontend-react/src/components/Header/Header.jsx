import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isLoggedIn = true; // hoặc false tuỳ trạng thái
  const isHome = location.pathname === '/';
  return (
    <motion.div
      className={`position-fixed ${isHome ? 'top-0 start-50 translate-middle-x' : ''} mt-3 z-3`}
      style={{ width: '80%', maxWidth: '1200px' }}
      initial={false}
      animate={{
        width: isHome ? '100%' : 200,
        height: isHome ? 60 : '97%',
        borderRadius: isHome ? '0%' : '0%',
        left: isHome ? '50%' : 20,
        top: isHome ? 0 : '48%',
        x: isHome ? '-50%' : 0,
        y: isHome ? 0 : '-50%',
      }}
      transition={{
        duration: 1.2,
        ease: 'easeInOut',
      }}
    >
      <nav
        className={`${
          isHome
            ? 'navbar navbar-expand-lg navbar-dark shadow px-4 py-2 border rounded-4'
            : 'sidebar navbar navbar-expand-lg navbar-dark shadow px-4 py-3 border flex-column rounded-4'
        }`}
        style={{
          height: isHome ? 60 : '100%',
          backgroundColor: isHome ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <Link
          className={`navbar-brand fw-bold text-white ${
            !isHome
              ? 'd-flex justify-content-center align-items-center w-100 me-0 border-bottom'
              : ''
          }`}
          to="/"
          style={!isHome ? { height: '20%' } : {}}
        >
          WorkForce360
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-between`}
          id="navbarNavDropdown"
        >
          <ul
            className={`navbar-nav ${isHome ? ' align-items-center' : 'flex-column h-100 w-100'}`}
            style={
              !isHome
                ? { height: '100vh', marginTop: '40px' }
                : { height: '100%' }
            }
          >
            <li className={`nav-item ${isHome ? '' : 'mb-5 mt-5'}`}>
              <Link className="nav-link text-white" to="/DashBoard">
                Dashboard
              </Link>
            </li>
            <li className={`nav-item ${isHome ? '' : 'mb-5'}`}>
              <Link className="nav-link text-white" to="Employee">
                Nhân viên
              </Link>
            </li>
            <li className={`nav-item ${isHome ? '' : 'mb-5'}`}>
              <Link className="nav-link text-white" to="#">
                Phòng ban
              </Link>
            </li>
            <li className={`nav-item ${isHome ? '' : 'mb-5'}`}>
              <Link className="nav-link text-white" to="#">
                Báo cáo
              </Link>
            </li>
            <li
              className={`nav-item mt-auto ${isHome ? 'align-items-center' : 'mb-5'}`}
            >
              {isLoggedIn ? (
                <Link className="nav-link text-white" to="/logout">
                  Đăng xuất
                </Link>
              ) : (
                <Link className="nav-link text-white" to="/login">
                  Đăng nhập
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default Header;

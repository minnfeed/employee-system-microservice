import React from 'react';
import 'animate.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <ParallaxProvider>
        <div className="bg-dark text-white position-relative">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            className="img-fluid w-100"
            alt="Hero Banner"
            style={{
              maxHeight: '110vh',
              objectFit: 'cover',
              filter: 'brightness(60%)',
            }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <Parallax speed={-25}>
              <h1 className="display-4 fw-bold animate__animated animate__fadeIn">
                Chào mừng đến với hệ thống
              </h1>
              <p className="lead animate__animated animate__fadeIn">
                Quản lý nhân viên dễ dàng và chuyên nghiệp
              </p>
              <Link
                to="/start"
                className="btn btn-primary px-4 py-2 mt-3 animate__animated animate__fadeIn"
              >
                Bắt đầu ngay
              </Link>
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>
      {/* Nội dung tiếp theo (nếu cần) */}
      <div className="container my-5">
        <h2 className="mb-4 text-center">Tính năng nổi bật</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="fa fa-users fa-3x mb-3" aria-hidden="true"></i>
            <h5>Quản lý nhân viên</h5>
            <p>Theo dõi thông tin nhân viên chi tiết.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="fa fa-sitemap fa-3x mb-3" aria-hidden="true"></i>
            <h5>Phân chia phòng ban</h5>
            <p>Tổ chức nhân sự hiệu quả theo bộ phận.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="fa fa-bar-chart fa-3x mb-3" aria-hidden="true"></i>
            <h5>Báo cáo thông minh</h5>
            <p>Thống kê nhanh chóng, dễ hiểu.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

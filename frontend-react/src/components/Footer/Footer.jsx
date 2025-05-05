import React from 'react';
import { useLocation } from 'react-router-dom';
const Footer = () => {
  const location = useLocation(); // Lấy thông tin vị trí hiện tại của URL

  // Kiểm tra nếu URL là trang chủ ('/')
  if (location.pathname !== '/') {
    return null; // Nếu không phải trang chủ, Footer sẽ không hiển thị
  }
  return (
    <footer className="bg-light text-center text-lg-start mt-auto shadow-sm">
      <div className="container p-4">
        <div className="row">
          {/* Cột 1 */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quản Lý Nhân Viên</h5>
            <p>Hệ thống quản lý nhân sự chuyên nghiệp dành cho doanh nghiệp.</p>
          </div>

          {/* Cột 2 */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Liên kết</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Nhân viên
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Phòng ban
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Báo cáo
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Liên hệ</h5>
            <ul className="list-unstyled mb-0">
              <li>Email: support@qlnv.vn</li>
              <li>Phone: 0123 456 789</li>
              <li>Địa chỉ: TP. Hồ Chí Minh</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} Quản Lý Nhân Viên.
      </div>
    </footer>
  );
};

export default Footer;

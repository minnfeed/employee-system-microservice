import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegBell } from 'react-icons/fa';
import Card from '../components/Card/Card';
import { MdOutlineConnectedTv } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
const Dashboard = () => {
  return (
    <div className="container">
      <h3 className="mb-4 text-primary">Dash Board</h3>
      <div className="row">
        <div className="col-md-3">
          <Card
            icon={<GoPeople />}
            text="Tổng nhân viên"
            iconBackgroundColor="#409AEE"
          />
        </div>
        <div className="col-md-3">
          <Card
            icon={<HiOutlineBuildingOffice />}
            text="Số phòng ban"
            iconBackgroundColor="#5EB562"
          />
        </div>
        <div className="col-md-3">
          <Card
            icon={<MdOutlineConnectedTv />}
            text="Truy cập"
            iconBackgroundColor="#f0ad4e"
          />
        </div>
        <div className="col-md-3">
          <Card
            icon={<FaRegBell />}
            text="Thông báo"
            iconBackgroundColor="#ff5733"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Badge } from 'react-bootstrap';

const employees = [
  {
    employee_id: 1,
    first_name: 'Nguyễn',
    last_name: 'Văn A',
    date_of_birth: '1995-04-20',
    gender: 'M',
    email: 'vana@example.com',
    phone: '0901234567',
    address: 'Hà Nội',
    hire_date: '2020-01-01',
    status: 'Active',
  },
  {
    employee_id: 2,
    first_name: 'Trần',
    last_name: 'Thị B',
    date_of_birth: '1992-10-15',
    gender: 'F',
    email: 'thib@example.com',
    phone: '0934567890',
    address: 'TP.HCM',
    hire_date: '2018-06-15',
    status: 'On Leave',
  },
  {
    employee_id: 3,
    first_name: 'Lê',
    last_name: 'C',
    date_of_birth: '1990-01-01',
    gender: 'Other',
    email: 'lec@example.com',
    phone: '0987654321',
    address: 'Đà Nẵng',
    hire_date: '2019-12-01',
    status: 'Inactive',
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Active':
      return <Badge bg="success">Đang làm</Badge>;
    case 'On Leave':
      return (
        <Badge bg="warning" text="dark">
          Đang nghỉ phép
        </Badge>
      );
    case 'Inactive':
      return <Badge bg="secondary">Ngưng hoạt động</Badge>;
    default:
      return <Badge bg="light">Không rõ</Badge>;
  }
};

export default function Employee() {
  return (
    <div className="container mt-5" style={{}}>
      <h3 className="mb-4 text-primary">Quản lý nhân viên</h3>
      <Table striped bordered hover responsive className="shadow-sm rounded">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Giới tính</th>
            <th>Email</th>
            <th>SĐT</th>
            <th>Ngày vào làm</th>
            <th>Trạng thái</th>
            <th className="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.employee_id}>
              <td>{index + 1}</td>
              <td>
                {emp.first_name} {emp.last_name}
              </td>
              <td>
                {emp.gender === 'M'
                  ? 'Nam'
                  : emp.gender === 'F'
                    ? 'Nữ'
                    : 'Khác'}
              </td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.hire_date}</td>
              <td>{getStatusBadge(emp.status)}</td>
              <td className="text-center">
                <Button variant="info" size="sm" className="me-2">
                  Xem
                </Button>
                <Button variant="warning" size="sm" className="me-2">
                  Sửa
                </Button>
                <Button variant="danger" size="sm">
                  Xoá
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

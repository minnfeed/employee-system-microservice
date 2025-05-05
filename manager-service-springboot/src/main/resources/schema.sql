-- Bảng phòng ban
CREATE TABLE departments (
                             department_id INT PRIMARY KEY AUTO_INCREMENT,
                             department_name VARCHAR(100) NOT NULL,
                             location VARCHAR(100)
);

-- Bảng chức vụ
CREATE TABLE positions (
                           position_id INT PRIMARY KEY AUTO_INCREMENT,
                           position_name VARCHAR(100) NOT NULL,
                           base_salary DECIMAL(10,2) NOT NULL
);

-- Bảng nhân viên
CREATE TABLE employees (
                           employee_id INT PRIMARY KEY AUTO_INCREMENT,
                           first_name VARCHAR(50) NOT NULL,
                           last_name VARCHAR(50) NOT NULL,
                           date_of_birth DATE,
                           gender ENUM('M', 'F', 'Other'),
                           email VARCHAR(100) UNIQUE NOT NULL,
                           phone VARCHAR(20),
                           address VARCHAR(200),
                           hire_date DATE NOT NULL,
                           department_id INT,
                           position_id INT,
                           status ENUM('Active', 'Inactive', 'On Leave') DEFAULT 'Active',
                           FOREIGN KEY (department_id) REFERENCES departments(department_id),
                           FOREIGN KEY (position_id) REFERENCES positions(position_id)
);

-- Bảng lịch sử lương
CREATE TABLE salary_history (
                                salary_id INT PRIMARY KEY AUTO_INCREMENT,
                                employee_id INT,
                                salary_amount DECIMAL(10,2) NOT NULL,
                                effective_date DATE NOT NULL,
                                note TEXT,
                                FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);

-- Bảng chấm công
CREATE TABLE attendance (
                            attendance_id INT PRIMARY KEY AUTO_INCREMENT,
                            employee_id INT,
                            check_in DATETIME NOT NULL,
                            check_out DATETIME,
                            status ENUM('Present', 'Absent', 'Late', 'Leave') DEFAULT 'Present',
                            FOREIGN KEY (employee_id) REFERENCES employees(employee_id)
);
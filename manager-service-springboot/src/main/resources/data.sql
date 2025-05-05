INSERT INTO departments (department_name, location) VALUES
                                                        ('Human Resources', 'Building A'),
                                                        ('IT', 'Building B'),
                                                        ('Finance', 'Building A'),
                                                        ('Marketing', 'Building C'),
                                                        ('Operations', 'Building D'),
                                                        ('Sales', 'Building A'),
                                                        ('Research & Development', 'Building B');

INSERT INTO positions (position_name, base_salary) VALUES
                                                       ('Manager', 5000.00),
                                                       ('Developer', 3000.00),
                                                       ('Accountant', 2800.00),
                                                       ('Marketing Specialist', 2700.00),
                                                       ('Operations Coordinator', 2600.00),
                                                       ('Sales Representative', 2500.00),
                                                       ('Research Analyst', 3200.00),
                                                       ('Senior Developer', 4000.00),
                                                       ('HR Specialist', 2700.00);

INSERT INTO employees (first_name, last_name, date_of_birth, gender, email, phone, address, hire_date, department_id, position_id) VALUES
                                                                                                                                       ('John', 'Doe', '1990-05-15', 'M', 'john.doe@email.com', '1234567890', '123 Main St', '2023-01-01', 1, 1),
                                                                                                                                       ('Jane', 'Smith', '1995-08-20', 'F', 'jane.smith@email.com', '0987654321', '456 Oak St', '2023-02-01', 2, 2),
                                                                                                                                       ('Michael', 'Nguyen', '1988-03-10', 'M', 'michael.nguyen@email.com', '1122334455', '789 Pine St', '2022-11-15', 3, 3),
                                                                                                                                       ('Emily', 'Tran', '1993-07-22', 'F', 'emily.tran@email.com', '6677889900', '101 Maple St', '2023-03-01', 4, 4),
                                                                                                                                       ('David', 'Le', '1991-12-05', 'M', 'david.le@email.com', '2233445566', '202 Cedar St', '2023-04-01', 5, 5),
                                                                                                                                       ('Sarah', 'Pham', '1994-09-18', 'F', 'sarah.pham@email.com', '3344556677', '303 Birch St', '2023-05-01', 6, 6),
                                                                                                                                       ('James', 'Ho', '1987-06-30', 'M', 'james.ho@email.com', '4455667788', '404 Elm St', '2022-12-01', 7, 7),
                                                                                                                                       ('Lisa', 'Vo', '1992-01-25', 'F', 'lisa.vo@email.com', '5566778899', '505 Walnut St', '2023-06-01', 2, 8),
                                                                                                                                       ('Thomas', 'Bui', '1989-11-11', 'M', 'thomas.bui@email.com', '6677889900', '606 Spruce St', '2023-07-01', 1, 9),
                                                                                                                                       ('Anna', 'Dang', '1996-04-14', 'F', 'anna.dang@email.com', '7788990011', '707 Chestnut St', '2023-08-01', 3, 3);

INSERT INTO salary_history (employee_id, salary_amount, effective_date, note) VALUES
                                                                                  (1, 5000.00, '2023-01-01', 'Initial salary'),
                                                                                  (2, 3000.00, '2023-02-01', 'Initial salary'),
                                                                                  (3, 2800.00, '2022-11-15', 'Initial salary'),
                                                                                  (4, 2700.00, '2023-03-01', 'Initial salary'),
                                                                                  (5, 2600.00, '2023-04-01', 'Initial salary'),
                                                                                  (6, 2500.00, '2023-05-01', 'Initial salary'),
                                                                                  (7, 3200.00, '2022-12-01', 'Initial salary'),
                                                                                  (8, 4000.00, '2023-06-01', 'Initial salary'),
                                                                                  (9, 2700.00, '2023-07-01', 'Initial salary'),
                                                                                  (10, 2800.00, '2023-08-01', 'Initial salary'),
                                                                                  (1, 5200.00, '2024-01-01', 'Annual raise'),
                                                                                  (2, 3200.00, '2024-02-01', 'Promotion raise'),
                                                                                  (3, 2900.00, '2023-11-15', 'Performance bonus');

INSERT INTO attendance (employee_id, check_in, check_out, status) VALUES
                                                                      (1, '2025-04-01 08:00:00', '2025-04-01 17:00:00', 'Present'),
                                                                      (2, '2025-04-01 08:15:00', '2025-04-01 17:30:00', 'Present'),
                                                                      (3, '2025-04-01 09:00:00', NULL, 'Late'),
                                                                      (4, '2025-04-01 08:00:00', '2025-04-01 16:00:00', 'Present'),
                                                                      (5, '2025-04-01 08:30:00', '2025-04-01 17:00:00', 'Present'),
                                                                      (6, '2025-04-02 08:00:00', '2025-04-02 17:00:00', 'Present'),
                                                                      (7, '2025-04-02 08:00:00', '2025-04-02 17:00:00', 'Present'),
                                                                      (8, '2025-04-02 08:45:00', '2025-04-02 17:15:00', 'Late'),
                                                                      (9, '2025-04-02 08:00:00', NULL, 'Leave'),
                                                                      (10, '2025-04-02 08:00:00', '2025-04-02 16:30:00', 'Present');
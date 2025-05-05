package com.example.employeemanager.Model.DTO;

import com.example.employeemanager.Model.Entity.Department;
import com.example.employeemanager.Model.Entity.Employee;
import com.example.employeemanager.Model.Entity.Position;
import com.example.employeemanager.Model.Enum.EmployeeStatus;
import com.example.employeemanager.Model.Enum.Gender;

import java.time.LocalDate;

public class EmployeeDTO {
    private Integer id;
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    private Gender gender;
    private String email;
    private String phone;
    private String address;
    private LocalDate hireDate;
    private Integer departmentId;
    private Integer positionId;
    private EmployeeStatus status;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getHireDate() {
        return hireDate;
    }

    public void setHireDate(LocalDate hireDate) {
        this.hireDate = hireDate;
    }

    public Integer getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
    }

    public Integer getPositionId() {
        return positionId;
    }

    public void setPositionId(Integer positionId) {
        this.positionId = positionId;
    }

    public EmployeeStatus getStatus() {
        return status;
    }

    public void setStatus(EmployeeStatus status) {
        this.status = status;
    }

    // toEntity method
    public Employee toEntity() {
        Employee employee = new Employee();
        employee.setId(this.id);
        employee.setFirstName(this.firstName);
        employee.setLastName(this.lastName);
        employee.setDateOfBirth(this.dateOfBirth);
        employee.setGender(this.gender);
        employee.setEmail(this.email);
        employee.setPhone(this.phone);
        employee.setAddress(this.address);
        employee.setHireDate(this.hireDate);

        if (this.departmentId != null) {
            Department department = new Department();
            department.setId(this.departmentId);
            employee.setDepartment(department);
        }

        if (this.positionId != null) {
            Position position = new Position();
            position.setId(this.positionId);
            employee.setPosition(position);
        }

        employee.setStatus(this.status);
        return employee;
    }
}
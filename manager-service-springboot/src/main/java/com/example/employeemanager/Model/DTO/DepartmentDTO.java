package com.example.employeemanager.Model.DTO;

import com.example.employeemanager.Model.Entity.Department;

public class DepartmentDTO {
    private Integer id;
    private String departmentName;
    private String location;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    // toEntity method
    public Department toEntity() {
        Department department = new Department();
        department.setId(this.id);
        department.setDepartmentName(this.departmentName);
        department.setLocation(this.location);
        return department;
    }
}

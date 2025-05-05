package com.example.employeemanager.Respository;

import com.example.employeemanager.Model.Entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Integer> {
}
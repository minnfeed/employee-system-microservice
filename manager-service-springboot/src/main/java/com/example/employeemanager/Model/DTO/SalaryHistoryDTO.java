package com.example.employeemanager.Model.DTO;


import com.example.employeemanager.Model.Entity.Employee;
import com.example.employeemanager.Model.Entity.SalaryHistory;

import java.math.BigDecimal;
import java.time.LocalDate;

public class SalaryHistoryDTO {
    private Integer id;
    private Integer employeeId;
    private BigDecimal salaryAmount;
    private LocalDate effectiveDate;
    private String note;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }

    public BigDecimal getSalaryAmount() {
        return salaryAmount;
    }

    public void setSalaryAmount(BigDecimal salaryAmount) {
        this.salaryAmount = salaryAmount;
    }

    public LocalDate getEffectiveDate() {
        return effectiveDate;
    }

    public void setEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    // toEntity method
    public SalaryHistory toEntity() {
        SalaryHistory salaryHistory = new SalaryHistory();
        salaryHistory.setId(this.id);

        if (this.employeeId != null) {
            Employee employee = new Employee();
            employee.setId(this.employeeId);
            salaryHistory.setEmployee(employee);
        }

        salaryHistory.setSalaryAmount(this.salaryAmount);
        salaryHistory.setEffectiveDate(this.effectiveDate);
        salaryHistory.setNote(this.note);
        return salaryHistory;
    }
}
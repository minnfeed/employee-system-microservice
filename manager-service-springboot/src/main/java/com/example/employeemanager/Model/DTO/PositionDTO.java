package com.example.employeemanager.Model.DTO;

import com.example.employeemanager.Model.Entity.Position;

import java.math.BigDecimal;

public class PositionDTO {
    private Integer id;
    private String positionName;
    private BigDecimal baseSalary;

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    public BigDecimal getBaseSalary() {
        return baseSalary;
    }

    public void setBaseSalary(BigDecimal baseSalary) {
        this.baseSalary = baseSalary;
    }

    // toEntity method
    public Position toEntity() {
        Position position = new Position();
        position.setId(this.id);
        position.setPositionName(this.positionName);
        position.setBaseSalary(this.baseSalary);
        return position;
    }
}
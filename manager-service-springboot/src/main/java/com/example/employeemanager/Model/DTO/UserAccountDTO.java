package com.example.employeemanager.Model.DTO;

import com.example.employeemanager.Model.Entity.Employee;
import com.example.employeemanager.Model.Entity.UserAccount;
import com.example.employeemanager.Model.Enum.Role;

import java.time.Instant;

public class UserAccountDTO {
    private Integer id;
    private Integer employeeId;
    private String username;
    private String passwordHash;
    private Role role;
    private Instant lastLogin;
    private Instant createdAt;

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Instant getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Instant lastLogin) {
        this.lastLogin = lastLogin;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    // toEntity method
    public UserAccount toEntity() {
        UserAccount userAccount = new UserAccount();
        userAccount.setId(this.id);

        if (this.employeeId != null) {
            Employee employee = new Employee();
            employee.setId(this.employeeId);
            userAccount.setEmployee(employee);
        }

        userAccount.setUsername(this.username);
        userAccount.setPasswordHash(this.passwordHash);
        userAccount.setRole(this.role);
        userAccount.setLastLogin(this.lastLogin);
        userAccount.setCreatedAt(this.createdAt);
        return userAccount;
    }
}
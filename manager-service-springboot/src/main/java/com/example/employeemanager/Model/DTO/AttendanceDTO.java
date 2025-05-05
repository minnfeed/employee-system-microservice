package com.example.employeemanager.Model.DTO;

import com.example.employeemanager.Model.Entity.Attendance;
import com.example.employeemanager.Model.Entity.Employee;
import com.example.employeemanager.Model.Enum.AttendanceStatus;

import java.time.Instant;

public class AttendanceDTO {
    private Integer id;
    private Integer employeeId;
    private Instant checkIn;
    private Instant checkOut;
    private AttendanceStatus status;

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

    public Instant getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(Instant checkIn) {
        this.checkIn = checkIn;
    }

    public Instant getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(Instant checkOut) {
        this.checkOut = checkOut;
    }

    public AttendanceStatus getStatus() {
        return status;
    }

    public void setStatus(AttendanceStatus status) {
        this.status = status;
    }

    // toEntity method
    public Attendance toEntity() {
        Attendance attendance = new Attendance();
        attendance.setId(this.id);

        if (this.employeeId != null) {
            Employee employee = new Employee();
            employee.setId(this.employeeId);
            attendance.setEmployee(employee);
        }

        attendance.setCheckIn(this.checkIn);
        attendance.setCheckOut(this.checkOut);
        attendance.setStatus(this.status);
        return attendance;
    }
}
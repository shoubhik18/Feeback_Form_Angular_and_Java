package com.DigitalLync.HRM.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class LoginResponse {
    private Long id;
    private String username;
    private String email;
    private String role;

    @Builder(builderMethodName = "loginResponseBuilder") // Use a custom builder method name
    public LoginResponse(Long id, String username, String email, String role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}

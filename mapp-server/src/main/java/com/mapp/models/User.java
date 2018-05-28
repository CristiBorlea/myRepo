package com.mapp.models;

public class User {

	private int id;
	private String firstName;
	private String lastName;
	private String address;
	private String email;
	private String phone;
	private String userName;
	private String password;
	private String role;
	private int deviceId;

	public User(int id, String firstName, String lastName, String address,
			String email, String phone, String userName, String password,
			String role, int deviceId) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.email = email;
		this.phone = phone;
		this.userName = userName;
		this.password = password;
		this.role = role;
		this.deviceId = deviceId;
	}

	public User(int id, String firstName, String lastName, String email)
	{
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email=  email;
	}

	public int getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getAddress() {
		return address;
	}

	public String getEmail() {
		return email;
	}

	public String getPhone() {
		return phone;
	}

	public String getUserName() {
		return userName;
	}

	public String getPassword() {
		return password;
	}

	public String getRole() {
		return role;
	}
	
	public int getDeviceId() {
		return deviceId;
	}
}
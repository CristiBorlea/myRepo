package com.mapp.models;

public class Device {
    private int id;
    private String macAddress;
    private int locationId;
    private int userId;

    public Device(int id, String macAddress, int locationId, int userId) {
        this.id = id;
        this.macAddress = macAddress;
        this.locationId = locationId;
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMacAddress() {
        return macAddress;
    }

    public void setMacAddress(String macAddress) {
        this.macAddress = macAddress;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}

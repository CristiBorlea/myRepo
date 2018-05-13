package com.mapp.models;

public class Alarm {
    private int id;
    private String type;
    private float minValue;
    private float maxValue;
    private String active;
    private int userId;
    private int locationId;

    public Alarm(int id, String type, float minValue, float maxValue, String active, int userId, int locationId) {
        this.id = id;
        this.type = type;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.active = active;
        this.userId = userId;
        this.locationId = locationId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public float getMinValue() {
        return minValue;
    }

    public void setMinValue(float minValue) {
        this.minValue = minValue;
    }

    public float getMaxValue() {
        return maxValue;
    }

    public void setMaxValue(float maxValue) {
        this.maxValue = maxValue;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getLocationId() {
        return locationId;
    }

    public void setLocationId(int locationId) {
        this.locationId = locationId;
    }
}

package com.mapp.models;

public class Alarm {

    private int id;
    private String type;
    private float minValue;
    private float maxValue;
    private boolean active;
    private int userId;
    private int locationId;
    private String locationName;

    public Alarm(){}

    public Alarm(int id){
        this.id = id;
    }

    public Alarm(int id, boolean active){
        this.id = id;
        this.active = active;
    }

    public Alarm(int id, String type, float minValue, float maxValue, boolean active, int userId, int locationId) {
        this.id = id;
        this.type = type;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.active = active;
        this.userId = userId;
        this.locationId = locationId;
    }

    public Alarm(int id, String type, float minValue, float maxValue, boolean active, int userId,int locationId, String
          locationName) {
        this(id, type, minValue, maxValue, active, userId, locationId);
        this.locationName = locationName;
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

    public boolean getActive() {
        return active;
    }

    public void setActive(boolean active) {
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

    public String getLocationName()
    {
        return locationName;
    }

    public void setLocationName(String locationName)
    {
        this.locationName = locationName;
    }
}

package com.mapp.models;

import java.util.Date;


public class Data
{
	private Date dateTime;
	private double temperature;
	private double humidity;
	private int deviceId;

	public Data(Date dateTime, double temperature, double humidity, int deviceId)
	{
		this.dateTime = dateTime;
		this.temperature = temperature;
		this.humidity = humidity;
		this.deviceId = deviceId;
	}

	public Date getDateTime()
	{
		return dateTime;
	}

	public double getTemperature()
	{
		return temperature;
	}

	public double getHumidity()
	{
		return humidity;
	}

	public int getDeviceId()
	{
		return deviceId;
	}
}

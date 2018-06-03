package com.mapp.models;

import java.text.SimpleDateFormat;
import java.util.Date;


public class Data
{
	private static final SimpleDateFormat SDF_DATE = new SimpleDateFormat("dd MMM YYY");

	private Date date;
	private Date time;
	private double temperature;
	private double humidity;
	private int deviceId;
	private String dateFormatted;
	private String timeFormatted;

	public Data(Date date, Date time, double temperature, double humidity, int deviceId)
	{
		this.date = date;
		this.time = time;
		this.temperature = temperature;
		this.humidity = humidity;
		this.deviceId = deviceId;
	}

	public Date getDate()
	{
		return date;
	}

	public void setDate(Date date)
	{
		this.date = date;
	}

	public Date getTime()
	{
		return time;
	}

	public void setTime(Date time)
	{
		this.time = time;
	}

	public double getTemperature()
	{
		return temperature;
	}

	public void setTemperature(double temperature)
	{
		this.temperature = temperature;
	}

	public double getHumidity()
	{
		return humidity;
	}

	public void setHumidity(double humidity)
	{
		this.humidity = humidity;
	}

	public int getDeviceId()
	{
		return deviceId;
	}

	public void setDeviceId(int deviceId)
	{
		this.deviceId = deviceId;
	}

	public String getDateFormatted()
	{
		return SDF_DATE.format(date);
	}

	public void setDateFormatted(String dateFormatted)
	{
		this.dateFormatted = dateFormatted;
	}

	public String getTimeFormatted()
	{
		return time.toString();
	}

	public void setTimeFormatted(String timeFormatted)
	{
		this.timeFormatted = timeFormatted;
	}

}

package com.mapp.models;

public class Alert
{
	int id;
	private String type;
	private String message;

	public Alert(int id, String type, String message)
	{
		this.id = id;
		this.type = type;
		this.message = message;
	}

	public Alert(int id, String message)
	{
		this(id,"danger", message);
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getMessage()
	{
		return message;
	}

	public void setMessage(String message)
	{
		this.message = message;
	}
}

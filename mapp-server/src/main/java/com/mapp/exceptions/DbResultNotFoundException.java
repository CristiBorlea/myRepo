package com.mapp.exceptions;

public class DbResultNotFoundException extends Exception
{
	public DbResultNotFoundException(String message)
	{
		super("No result found: "+ message);
	}
}

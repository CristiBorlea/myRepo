package com.mapp.services;

import java.sql.Connection;

import com.mapp.db.DbConnection;


public class AbstractService
{
	protected Connection connection;

	public AbstractService()
	{
		this.connection = DbConnection.getInstance().getConnection();
	}
}

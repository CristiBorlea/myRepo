package com.mapp.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


public class DbConnection {

	private static final Log LOG = LogFactory.getLog(DbConnection.class);

	private static final String USER = "sa";
	private static final String PASSWORD = "admin123";
	private static final String URL = "jdbc:sqlserver://localhost;instance=sqlexpress;databaseName=monitoring";

	private static Connection connection;
	private static DbConnection instance = null;

	public static DbConnection getInstance()
	{
		if (instance == null){
			instance = new DbConnection();
		}
		return instance;
	}
	
	private DbConnection() {
		connectDB();
	}

	private void connectDB() {
		try {
			// loading database driver
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

			// get the sql server database connection
			connection = DriverManager.getConnection(URL, USER, PASSWORD);

			LOG.info("Succesfully connected to database.");
		} catch (Exception e) {
		    LOG.error(e);
		}
	}

	public void closeConnection()
	{
		try {
			if (connection != null)
			{
				connection.close();
				LOG.info("Connection closed.");
			}
			else {
				LOG.warn("No connection.");
			}
		} catch (SQLException e) {
			LOG.error(e);
		}
	}

	public Connection getConnection()
	{
		return connection;
	}

	/*public static void main(String[] args)
	{
		DbConnection instance = DbConnection.getInstance();
		instance.closeConnection();
	}*/
}

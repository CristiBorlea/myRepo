package com.mapp.db;

import java.sql.PreparedStatement;
import java.sql.SQLException;


public class StatementManager
{
	public static void close(PreparedStatement stmt){
		if (stmt != null)
		{
			try
			{
				stmt.close();
			}
			catch (SQLException e)
			{
				System.err.println(e);
			}
		}
	}
}

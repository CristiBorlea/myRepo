package com.mapp.services;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.mapp.db.StatementManager;
import com.mapp.exceptions.DbResultNotFoundException;
import com.mapp.models.User;


public class UserService extends AbstractService
{
	private static final Log LOG = LogFactory.getLog(UserService.class);

	//TODO set all fields
	public User getUserByEmail(String email) throws DbResultNotFoundException
	{
		PreparedStatement stmt = null;
		try
		{
			stmt = connection.prepareStatement("SELECT * from Users where email=?");
			stmt.setString(1, email.trim());
			ResultSet resultSet = stmt.executeQuery();
			while (resultSet.next())
			{
				int id = resultSet.getInt("id");
				String firstName = resultSet.getString("first_name");
				String lastName = resultSet.getString("last_name").trim();
				String emailDb = resultSet.getString("email").trim();

				return new User(id, firstName, lastName, emailDb);
			}
		}
		catch (SQLException e)
		{
			LOG.error(e);
		}
		finally
		{
			StatementManager.close(stmt);
		}

		throw new DbResultNotFoundException("user for email " + email);
	}

	public String getPasswordForUser(String email) throws DbResultNotFoundException
	{
		PreparedStatement stmt = null;
		try
		{
			stmt = connection.prepareStatement("SELECT password from Users where email=?");
			stmt.setString(1, email.trim());
			ResultSet resultSet = stmt.executeQuery();
			while (resultSet.next())
			{
				return resultSet.getString("password").trim();
			}
		}
		catch (SQLException e)
		{
			LOG.error(e);
		}
		finally
		{
			StatementManager.close(stmt);
		}
		throw new DbResultNotFoundException("password for email " + email);
	}


}

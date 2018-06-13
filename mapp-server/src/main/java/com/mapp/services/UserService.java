package com.mapp.services;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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
				String firstName = resultSet.getString("first_name").trim();
				String lastName = resultSet.getString("last_name").trim();
				String emailDb = resultSet.getString("email").trim();
				String address = resultSet.getString("address").trim();
				String phone = resultSet.getString("phone").trim();
				String password = resultSet.getString("password").trim();
				String role = resultSet.getString("role").trim();

				System.out.println("Name: " + firstName);
				return new User(id, firstName, lastName, emailDb, address, phone, password, role);
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

	public List<User> getAllUsers()
	{
		List<User> usersList = new ArrayList<>();
		PreparedStatement statement = null;

		try
		{
			statement = connection.prepareStatement("Select * from users");
			ResultSet resultSet = statement.executeQuery();
			while (resultSet.next())
			{
				int id = resultSet.getInt("id");
				String firstName = resultSet.getString("first_name").trim();
				String lastName = resultSet.getString("last_name").trim();
				String emailDb = resultSet.getString("email").trim();
				String address = resultSet.getString("address").trim();
				String phone = resultSet.getString("phone").trim();
				String password = resultSet.getString("password").trim();
				String role = resultSet.getString("role").trim();
				User user = new User(id, firstName, lastName, emailDb, address, phone, password, role);

				usersList.add(user);
				LOG.info("User phone " + phone);
			}
		}
		catch (SQLException e)
		{
			LOG.error(e);
		}
		finally
		{
			StatementManager.close(statement);
		}
		return usersList;
	}


	public boolean create(User user)
	{
		PreparedStatement statement = null;
		try
		{
			statement = connection.prepareStatement("Insert into users(first_name, last_name, email, address, phone, password, "
					+ "role) VALUES(?,?,?,?,?,?,?)");
			statement.setString(1, user.getFirstName());
			statement.setString(2, user.getLastName());
			statement.setString(3, user.getEmail());
			statement.setString(4, user.getAddress());
			statement.setString(5, user.getPhone());
			statement.setString(6, user.getPassword());
			statement.setString(7, "user");
			statement.execute();
			return true;
		}
		catch (SQLException e)
		{
			LOG.error(e);
			return false;
		}
		finally
		{
			StatementManager.close(statement);
		}
	}

	public boolean update(User user)
	{
		PreparedStatement statement = null;
		try
		{
			statement = connection.prepareStatement("Update users set first_name=?, last_name=?, email=?, address=?, phone=?, password=? where id =?");
			statement.setString(1, user.getFirstName());
			statement.setString(2, user.getLastName());
			statement.setString(3, user.getEmail());
			statement.setString(4, user.getAddress());
			statement.setString(5, user.getPhone());
			statement.setString(6, user.getPassword());
			statement.setInt(7, user.getId());
			statement.execute();
			return true;
		}
		catch (SQLException e)
		{
			LOG.error(e);
			return false;
		}
		finally
		{
			StatementManager.close(statement);
		}
	}
}

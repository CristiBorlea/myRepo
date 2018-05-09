package com.mapp.services;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.mapp.db.StatementManager;
import com.mapp.models.Location;


public class LocationService extends AbstractService
{
	private static final Log LOG = LogFactory.getLog(LocationService.class);

	public List<Location> getAllLocations(){
		List<Location> locationsList = new ArrayList<>();
		PreparedStatement statement = null;
		try
		{
			statement = connection.prepareStatement("Select * from Location");
			ResultSet resultSet = statement.executeQuery();
			while (resultSet.next()){
				int id = resultSet.getInt("id");
				String name = resultSet.getString("name");

				Location location = new Location(id, name);
				locationsList.add(location);
				LOG.info("Location name " + name);
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
		return locationsList;
	}
}

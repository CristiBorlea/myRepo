package com.mapp.services;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.mapp.db.StatementManager;
import com.mapp.models.Data;


public class DataService extends AbstractService
{
	private static final Log LOG = LogFactory.getLog(DataService.class);

	public List<Data> getAllData(){
		List<Data> dataList = new ArrayList<>();
		PreparedStatement stmt = null;
		try
		{
			 stmt = connection.prepareStatement("Select * from Data Order by date_time DESC");
			ResultSet resultSet = stmt.executeQuery();
			while (resultSet.next()){
				Data data = getDataFromResultSet(resultSet);
				dataList.add(data);
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
		return dataList;
	}


	public List<Data> getDataForDevice(int deviceId)
	{
		List<Data> dataList = new ArrayList<>();
		PreparedStatement stmt = null;
		try
		{
			stmt = connection.prepareStatement("Select * from Data WHERE device_id=? Order by date_time DESC");
			stmt.setInt(1, deviceId);
			ResultSet resultSet = stmt.executeQuery();
			while (resultSet.next()){
				Data data = getDataFromResultSet(resultSet);
				dataList.add(data);
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
		return dataList;
	}

	private Data getDataFromResultSet(ResultSet resultSet) throws SQLException
	{
		Date dateTime = resultSet.getTime("date_time");
		double temperature = resultSet.getInt("temperature_value");
		double humidity = resultSet.getInt("humidity_value");
		int deviceId = resultSet.getInt("device_id");

		return new Data(dateTime, temperature, humidity, deviceId);
	}
}
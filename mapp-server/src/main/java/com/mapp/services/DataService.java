package com.mapp.services;

import com.mapp.db.StatementManager;
import com.mapp.exceptions.DbResultNotFoundException;
import com.mapp.models.Data;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public class DataService extends AbstractService
{
	private static final Log LOG = LogFactory.getLog(DataService.class);

	public List<Data> getAllData(Integer userId, Integer locationId){
		List<Data> dataList = new ArrayList<>();
		PreparedStatement stmt = null;
		try
		{
			 stmt = connection.prepareStatement("Select * from Data as dt join devices as dv on dt.device_id=dv.id "
					 + "where dv.user_id=? and dv.location_id=? Order by dt.date_time ASC");
			stmt.setInt(1, userId);
			stmt.setInt(2, locationId);
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
		Date date = resultSet.getDate(	"date_time");
		Date time = resultSet.getTime(	"date_time");
		double temperature = formatDouble(resultSet.getDouble("temperature_value"));
		double humidity = formatDouble(resultSet.getDouble("humidity_value"));
		int deviceId = resultSet.getInt("device_id");

		return new Data(date, time, temperature, humidity, deviceId);
	}

	public Data getLastDataForUserAndLocation(int userId, int locationId) throws DbResultNotFoundException {
		List<Data> dataList = new ArrayList<>();
		PreparedStatement stmt = null;
		try
		{
			stmt = connection.prepareStatement("Select TOP 1 * from devices as dv join data as dt on dt.device_id=dv.id "
					+ "where dv.user_id=? and dv.location_id=? Order by dt.date_time DESC");
			stmt.setInt(1, userId);
			stmt.setInt(2, locationId);
			ResultSet resultSet = stmt.executeQuery();
			while (resultSet.next()){
				return getDataFromResultSet(resultSet);
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
		throw new DbResultNotFoundException("No data found for UserId="+userId + "and locationID="+ locationId);
	}

	public List<Data> getAllDataForInterval(Integer userId, Integer locationId, String startDate, String endDate){
		List<Data> dataList = new ArrayList<>();
		PreparedStatement stmt = null;
		if (startDate== null){
			startDate="";
		}
		if (endDate==null){
			endDate="9999-12-12";
		}
		try
		{
			stmt = connection.prepareStatement("SELECT * FROM data as dt join devices as dv on dt.device_id=dv.id WHERE " +
							"dv.user_id=? and dv.location_id=? and date_time >= ? AND date_time <= ? order by date_time asc");
			stmt.setInt(1, userId);
			stmt.setInt(2, locationId);
			stmt.setString(3, startDate);
			stmt.setString(4, endDate);
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

	public boolean insertData(Data data)
	{
		PreparedStatement statement = null;
		try
		{
			double temp = formatDouble(data.getTemperature());
			double humid = formatDouble(data.getHumidity());

			statement = connection.prepareStatement("Insert into data(date_time, temperature_value, humidity_value, device_id) VALUES(?,?,?,?)");
			statement.setTimestamp(1, new Timestamp(data.getDate().getTime()));
			statement.setFloat(2, (float) temp);
			statement.setFloat(3, (float) humid);
			statement.setInt(4, data.getDeviceId());
			statement.execute();
			System.out.println("Data inserted.");
			return true;
		}
		catch (SQLException e)
		{
			System.out.println("Data not inserted.");
			LOG.error(e);
			return false;
		}
		finally
		{
			StatementManager.close(statement);
		}
	}

	private double formatDouble(double value) {
		return BigDecimal.valueOf(value)
				.setScale(2, RoundingMode.HALF_UP)
				.doubleValue();
	}
}

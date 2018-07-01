package com.mapp.services;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.RequestParam;

import com.mapp.db.StatementManager;
import com.mapp.exceptions.DbResultNotFoundException;
import com.mapp.models.Alarm;
import com.mapp.models.Alert;
import com.mapp.models.Data;


public class AlarmService extends AbstractService
{
    private static final Log LOG = LogFactory.getLog(AlarmService.class);

    public List<Alarm> getAllAlarms(){
        List<Alarm> alarmsList = new ArrayList<>();
        PreparedStatement statement = null;
        try
        {
            statement = connection.prepareStatement("Select * from Alarms a JOIN Location l on l.id=a.location_id");
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()){
                int id = resultSet.getInt("id");
                String type = resultSet.getString("type").trim();
                float minValue =resultSet.getFloat("min_value");
                float maxValue =resultSet.getFloat("max_value");
                String active = resultSet.getString("active").trim();
                int userId = resultSet.getInt("user_id");
                int locationId = resultSet.getInt("location_id");
                String locationName = resultSet.getString("name").trim();

                boolean isActive = Boolean.valueOf(active);
                Alarm alarm = new Alarm(id, type,minValue,maxValue, isActive,userId,locationId,locationName);
                alarmsList.add(alarm);
                LOG.info("Alarm type " + type + "max value" + maxValue);
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
        return alarmsList;
    }

    public boolean updateActive(int id, boolean active)
    {
        PreparedStatement statement = null;
        try
        {
            statement = connection.prepareStatement("Update alarms set active=? where id =?");
            statement.setString(1, String.valueOf(active));
            statement.setInt(2, id);
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

    public boolean removeAlarm(int alarmId)
    {
        PreparedStatement statement = null;
        try
        {
            statement = connection.prepareStatement("delete from alarms where id =?");
            statement.setInt(1, alarmId);
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

    public boolean createAlarm(Alarm alarm)
    {
        PreparedStatement statement = null;
        try
        {
            statement = connection.prepareStatement("Insert into alarms(type, min_value, max_value, active, user_id, location_id)"
                  + " VALUES(?,?,?,?,?,?)");
            statement.setString(1, alarm.getType());
            statement.setFloat(2, alarm.getMinValue());
            statement.setFloat(3, alarm.getMaxValue());
            statement.setString(4, String.valueOf(alarm.getActive()));
            statement.setInt(5, alarm.getUserId());
            statement.setInt(6, alarm.getLocationId());
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

    private List<Alarm> getActiveAlarms(Integer userId)
    {
        List<Alarm> alarmsList = new ArrayList<>();
        PreparedStatement statement = null;
        try
        {
            statement = connection.prepareStatement("Select * from Alarms a JOIN Location l on l.id=a.location_id"
                  + " WHERE a.user_id=? and a.active='true'");
            statement.setInt(1, userId);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()){
                int id = resultSet.getInt("id");
                String type = resultSet.getString("type").trim();
                float minValue =resultSet.getFloat("min_value");
                float maxValue =resultSet.getFloat("max_value");
                String active = resultSet.getString("active").trim();
                int userIdDb = resultSet.getInt("user_id");
                int locationId = resultSet.getInt("location_id");
                String locationName = resultSet.getString("name").trim();

                boolean isActive = Boolean.valueOf(active);
                Alarm alarm = new Alarm(id, type,minValue,maxValue, isActive,userIdDb,locationId,locationName);
                alarmsList.add(alarm);
                LOG.info("Alarm type " + type + "max value" + maxValue);
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
        return alarmsList;
    }

    public List<Alert> getAlerts(Integer userId)
    {
        List<Alert> alerts = new ArrayList<>();
        DataService dataService = new DataService();
        List<Alarm> activeAlarms = getActiveAlarms(userId);
        int index=0;
        for (Alarm alarm : activeAlarms)
        {
            try
            {
                Data data = dataService.getLastDataForUserAndLocation(userId, alarm.getLocationId());
                switch (alarm.getType())
                {
                    case "humidity":
                        checkAlarm(index++, alerts, alarm, data.getHumidity(), "Humidity", "%");
                        break;
                    case "temperature":
                        checkAlarm(index++, alerts, alarm, data.getTemperature(), "Temperature", "°C");
                        break;
                }
            }
            catch (DbResultNotFoundException e)
            {
                System.out.println(e);
            }

        }
        return alerts;
    }


    private void checkAlarm(int id, List<Alert> alerts, Alarm alarm, double value,  String type, String unit)
    {
        if (value < alarm.getMinValue())
		  {
				alerts.add(new Alert(id, type + " in " + alarm.getLocationName() + " is lower than " +
						alarm.getMinValue() + unit));
		  }
        if (value > alarm.getMaxValue())
		  {
				alerts.add(new Alert(id,  type + " in " + alarm.getLocationName() + " is higher than " +
						alarm.getMaxValue()+unit));
		  }
    }
}

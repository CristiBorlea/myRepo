package com.mapp.services;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.mapp.db.StatementManager;
import com.mapp.models.Alarm;

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

}

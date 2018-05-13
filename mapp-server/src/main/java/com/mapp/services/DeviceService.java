package com.mapp.services;

import com.mapp.db.StatementManager;
import com.mapp.models.Device;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DeviceService extends AbstractService
{
    private static final Log LOG = LogFactory.getLog(LocationService.class);

    public List<Device> getAllDevices(){
    List<Device> devicesList = new ArrayList<>();
    PreparedStatement statement = null;

        try
        {
            statement = connection.prepareStatement("Select * from Devices");
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()){
                int id = resultSet.getInt("id");
                String macId = resultSet.getString("mac_address").trim();
                int locationId = resultSet.getInt("location_id");
                int userId = resultSet.getInt("user_id");
                Device device = new Device(id, macId,locationId,userId);
                devicesList.add(device);
                LOG.info("Device macID " + macId);
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
        return devicesList;
    }

}

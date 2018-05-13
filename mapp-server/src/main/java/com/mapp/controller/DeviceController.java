package com.mapp.controller;


import com.mapp.models.Device;
import com.mapp.services.DeviceService;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@EnableAutoConfiguration
@RequestMapping("/device")
public class DeviceController {
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Device>> getAllLocations()
    {
        DeviceService deviceService = new DeviceService();
        List<Device> allDevices = deviceService.getAllDevices();
        if (allDevices.isEmpty())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            return new ResponseEntity<>(allDevices, HttpStatus.OK);
        }
    }

}

package com.mapp.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mapp.models.Alarm;
import com.mapp.services.AlarmService;


@RestController
@EnableAutoConfiguration
@RequestMapping("/alarm")

public class AlarmController {

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<Alarm>> getAllAlarms()
    {
        AlarmService locationService = new AlarmService();
        List<Alarm> allAlarms = locationService.getAllAlarms();
        if (allAlarms.isEmpty())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            return new ResponseEntity<>(allAlarms, HttpStatus.OK);
        }
    }
}

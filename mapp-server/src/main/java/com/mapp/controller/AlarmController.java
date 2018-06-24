package com.mapp.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
        AlarmService alarmService = new AlarmService();
        List<Alarm> allAlarms = alarmService.getAllAlarms();
        if (allAlarms.isEmpty())
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else
        {
            return new ResponseEntity<>(allAlarms, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/active", method = RequestMethod.POST)
    public ResponseEntity<Object> setActive(@RequestBody Alarm alarm)
    {
        AlarmService alarmService = new AlarmService();
        boolean updated = alarmService.updateActive(alarm.getId(), alarm.getActive());
        if (updated)
        {
            return new ResponseEntity<>( HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/remove", method = RequestMethod.DELETE)
    public ResponseEntity<Object> remove(@RequestParam int alarmId)
    {
        AlarmService alarmService = new AlarmService();
        boolean removed = alarmService.removeAlarm(alarmId);
        if (removed)
        {
            return new ResponseEntity<>( HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}

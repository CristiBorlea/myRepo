package com.mapp.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mapp.exceptions.DbResultNotFoundException;
import com.mapp.models.Data;
import com.mapp.services.DataService;


@RestController
@EnableAutoConfiguration
@RequestMapping("/data")
public class DataController
{

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Data>> getAllData(@RequestParam Integer userId, @RequestParam Integer locationId)
	{
		DataService dataService = new DataService();
		List<Data> allData = dataService.getAllData(userId, locationId);
		return new ResponseEntity(allData, HttpStatus.OK);
	}

	@RequestMapping(value = "/last", method = RequestMethod.GET)
	public ResponseEntity<Data> getLastDataForUserAndLocation(@RequestParam Integer userId, @RequestParam Integer locationId)
	{
		DataService dataService = new DataService();
		try
		{
			Data data = dataService.getLastDataForUserAndLocation(userId, locationId);
			return new ResponseEntity(data, HttpStatus.OK);
		}
		catch (DbResultNotFoundException e)
		{
			return new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
}

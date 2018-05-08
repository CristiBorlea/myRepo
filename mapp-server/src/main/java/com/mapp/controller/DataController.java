package com.mapp.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mapp.models.Data;
import com.mapp.services.DataService;


@RestController
@EnableAutoConfiguration
@RequestMapping("/data")
public class DataController
{

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Data>> getAllData()
	{
		DataService dataService = new DataService();
		List<Data> allData = dataService.getAllData();
		return new ResponseEntity(allData, HttpStatus.OK);
	}


	@RequestMapping(value = "/device/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Data>> getDataForDevice(@RequestParam Integer id)
	{
		DataService dataService = new DataService();
		List<Data> allData = dataService.getDataForDevice(id);
		return new ResponseEntity(allData, HttpStatus.OK);
	}
}

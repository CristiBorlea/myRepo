package com.mapp.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mapp.models.Location;
import com.mapp.services.LocationService;


@RestController
@EnableAutoConfiguration
@RequestMapping("/location")
public class LocationController
{

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public ResponseEntity<List<Location>> getAllLocations()
	{
		LocationService locationService = new LocationService();
		List<Location> allLocations = locationService.getAllLocations();
		if (allLocations.isEmpty())
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		else
		{
			return new ResponseEntity<>(allLocations, HttpStatus.OK);
		}
	}
}

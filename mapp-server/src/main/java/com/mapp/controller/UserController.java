package com.mapp.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mapp.exceptions.DbResultNotFoundException;
import com.mapp.models.User;
import com.mapp.services.UserService;


@RestController
@EnableAutoConfiguration
@RequestMapping("/user")
public class UserController
{

	@RequestMapping(value = "/{email}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@RequestParam String email)
	{
		UserService userService = new UserService();
		try
		{
			User user = userService.getUserByEmail(email);
			return new ResponseEntity(user, HttpStatus.OK);
		}
		catch (DbResultNotFoundException e)
		{
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/password/{email}", method = RequestMethod.GET)
	public ResponseEntity<String> getPassword(@RequestParam String email)
	{
		UserService userService = new UserService();
		try
		{
			String password = userService.getPasswordForUser(email);
			return new ResponseEntity(password, HttpStatus.OK);
		}
		catch (DbResultNotFoundException e)
		{
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
	}

}

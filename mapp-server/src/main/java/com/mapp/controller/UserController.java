package com.mapp.controller;

import java.util.List;

import com.mapp.models.Login;

import org.json.JSONObject;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
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
public class UserController {

    @RequestMapping(value = "", method = RequestMethod.GET)
    public ResponseEntity<User> getUser(@RequestParam String email) {
        UserService userService = new UserService();
        try {
            User user = userService.getUserByEmail(email);
            return new ResponseEntity(user, HttpStatus.OK);
        } catch (DbResultNotFoundException e) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers() {
        UserService userService = new UserService();
        List<User> allUsers = userService.getAllUsers();
        if (allUsers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(allUsers, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Object> createUser(@RequestBody User user) {
        UserService userService = new UserService();
        boolean isUserCreated = userService.create(user);
        if (isUserCreated) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResponseEntity<Object> updateUser(@RequestBody User user) {
        UserService userService = new UserService();
        boolean isUpdated = userService.update(user);
        if (isUpdated) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}

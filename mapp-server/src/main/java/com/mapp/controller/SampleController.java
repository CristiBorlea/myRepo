package com.mapp.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@EnableAutoConfiguration
public class SampleController
{
	@RequestMapping("/sample2")
	@ResponseBody
	public String sample()
	{
		return "Hello World!";
	}
}

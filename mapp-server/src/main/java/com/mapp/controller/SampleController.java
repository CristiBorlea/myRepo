package com.mapp.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@EnableAutoConfiguration
public class SampleController
{

	@RequestMapping("/test")
	public User sample()
	{
		return new User("vvv", 15);
	}

	class User{
		private String name;
		private int age;

		public User(String name, int age)
		{
			this.name = name;
			this.age = age;
		}

		public String getName()
		{
			return name;
		}

		public void setName(String name)
		{
			this.name = name;
		}

		public int getAge()
		{
			return age;
		}

		public void setAge(int age)
		{
			this.age = age;
		}
	}
}

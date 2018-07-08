package com.mapp.arduino;

public class DataHandler
{
	public static void main(String[] args) throws Exception
	{
		SerialMonitor serialMonitor = new SerialMonitor();
		serialMonitor.initialize();
		Thread t = new Thread()
		{
			public void run()
			{
				//the following line will keep this app alive for 1000    seconds,
				//waiting for events to occur and responding to them    (printing incoming messages to conso
				/*try
				{
					Thread.sleep(1000000);
				}
				catch (InterruptedException ie)
				{
				}*/
			}
		};
		t.start();
		System.out.println("Started");
	}
}

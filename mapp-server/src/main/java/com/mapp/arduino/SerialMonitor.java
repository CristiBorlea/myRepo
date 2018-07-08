package com.mapp.arduino;

import com.mapp.models.Data;
import com.mapp.services.DataService;
import gnu.io.CommPortIdentifier;
import gnu.io.SerialPort;
import gnu.io.SerialPortEvent;
import gnu.io.SerialPortEventListener;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.Date;
import java.util.Enumeration;


public class SerialMonitor implements SerialPortEventListener
{
	private static final int DEVICE_ID = 1;
	private static final String PORT_NAMES[] = { "/dev/ttyUSB0", // Linux
			"COM11", // Windows
	};
	private SerialPort serialPort;
	private BufferedReader input;
	private OutputStream output;
	private static final int TIME_OUT = 2000;
	private static final int DATA_RATE = 9600;

	private DataService dataService;

	public SerialMonitor(){
	    this.dataService = new DataService();
    }

	public void initialize()
	{
		CommPortIdentifier portId = null;
		Enumeration portEnum = CommPortIdentifier.getPortIdentifiers();

		//First, find an instance of serial port as set in PORT_NAMES.
		while (portEnum.hasMoreElements())
		{
			CommPortIdentifier currPortId = (CommPortIdentifier) portEnum.nextElement();
			for (String portName : PORT_NAMES)
			{
				if (currPortId.getName().equals(portName))
				{
					portId = currPortId;
					break;
				}
			}
		}
		if (portId == null)
		{
			System.out.println("Could not find COM port.");
			return;
		}

		try
		{
			serialPort = (SerialPort) portId.open(this.getClass().getName(),
					TIME_OUT);
			serialPort.setSerialPortParams(DATA_RATE,
					SerialPort.DATABITS_8,
					SerialPort.STOPBITS_1,
					SerialPort.PARITY_NONE);

			// open the streams
			input = new BufferedReader(new InputStreamReader(serialPort.getInputStream()));
			output = serialPort.getOutputStream();

			serialPort.addEventListener(this);
			serialPort.notifyOnDataAvailable(true);
		}
		catch (Exception e)
		{
			System.err.println("init error: " + e.toString());
		}
	}

	public synchronized void close()
	{
		if (serialPort != null)
		{
			serialPort.removeEventListener();
			serialPort.close();
		}
	}

	public synchronized void serialEvent(SerialPortEvent oEvent)
	{
		if (oEvent.getEventType() == SerialPortEvent.DATA_AVAILABLE)
		{
			try
			{
				String inputLine = null;
				if (input.ready())
				{
					inputLine = input.readLine();
					saveDataInDb(inputLine);
				}

			}
			catch (Exception e)
			{
				System.err.println(new Date() + e.toString());
			}
		}
		// Ignore all the other eventTypes, but you should consider the other ones.
	}

	private void saveDataInDb(String inputLine) {
		System.out.println(new Date() + ": " + inputLine);
		if (inputLine.isEmpty()){
			System.out.println("Empty line retrieved.");
			return;
		}

		int tempIndex = inputLine.indexOf("t=");
		int humidIndex = inputLine.indexOf("h=");

		if (tempIndex >=0 && humidIndex >= 0){
			String tempString = inputLine.substring(tempIndex+2, tempIndex+7);
			String humidString = inputLine.substring(humidIndex+2, inputLine.length());
			System.out.println("temp=" + tempString);
			System.out.println("hum=" + humidString);

			double temp=Double.valueOf(tempString);
			double hum=Double.valueOf(humidString);

			Data data = new Data(new Date(), new Date(), temp, hum, DEVICE_ID);
			dataService.insertData(data);
		}
	}

	public static void main(String[] args) throws Exception
	{
		SerialMonitor main = new SerialMonitor();
		main.initialize();
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

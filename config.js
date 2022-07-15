/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
	/*
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},*/
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					},
					{
						symbol: "Calendar",
						url: "https://calendar.google.com/calendar/ical/wsui6464%40gmail.com/public/basic.ics"
					}
				]
			}    
		},
		
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Foster City",
				locationID: "5350159", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "419ea2718d95b5b3f9f262b1706172b4"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Foster City",
				locationID: "5350159", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "419ea2718d95b5b3f9f262b1706172b4"
			}
		},
		/*{
    module: "MMM-quote-of-the-day",
    position: "lower_third",
    config: {
        language: "en",
        updateInterval: "1d"
	}
}*/
/*{
    module: 'MMM-WaterReminder',
    position: 'top_center',
    config: {
        foo: "Did you have enough water today?",
        phrases: ["Did you have enough water today?", "Hey buddy, you should have some water!","Drink water, bro.","'Better to have stones in the way than in the Kidneys: Drink water!'",
        "It's been such a long time since your last glass of water...","Water! Water! Water!"],
        startTime: "00:00",
        endTime: "23:59",
        messageDuration: 1 * 60 * 1000, // 1 min showing on the screen
        animationSpeed: 4 * 1000, // 4 seconds for fading
        reminderFrequency: 60 * 60 * 1000, // hourly reminder
        classes: "bright medium light",
        color: "#fff",
        idleMessage: "<br/>",
        logo: true,
        days: [0,1,2,3,4,5,6], // all week
        alarm: {
            status: false, 
            daysWithAudibleReminder: [1,2,3,4,5],
            src: "done-for-you.mp3",
            startTime: "09:00",
            endTime: "17:00",
        }
    }
}*/
		{
  module: "MMM-NowPlayingOnSpotify",
  position: "top_left",

  config: {
    clientID: "e262b302e9b34897875e4de6e5594498",
    clientSecret: "3a4750bec6474eef92f882e0fd0d9717",
    accessToken: "BQCJEiw9CN9XrvYe5ysDOuhEDwISEPO6cUPC6ncTYMTSVX5qYuC04U6czHHO9rDz7RSd4EnCczaF2qSPmwV5ohJJiE3gBhLD3XDIADaDtT3batfBtFxXSec_66xfFdKHlg9dxtOc0BtfzXragQqNUFLnjRLU1ThjAJqRR1lusdqE93ZL1qRym-4JbEiG4CKm6j9nQAAjk1kp7Q",
    refreshToken: "AQDdE4EBEgvG0Ba2Od12vv69Vi4wmPNzYrc99-pAmiuDQHnQz_5ecgJVTSyclIC5pdMRWxlkipz0IX6eaII8S4KF7fNhzYvmG-4_rMrNdlVGJJO3gC2zDNEdDZY_NE7rJZg"
  }
},

						{
							module: "newsfeed",
							position: "bottom_bar",
							config: {
								feeds: [
									{
										title: "New York Times",
										url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
									}
								],
								showSourceTitle: true,
								showPublishDate: true,
								broadcastNewsFeeds: true,
								broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

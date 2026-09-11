"use strict";
var isBot = require("isbot");
var userAgentLib = require("useragent");



const parseBotAgent = userAgent =>
{
	if (userAgent != null)
	{
		const userAgentFamily = userAgentLib.parse(userAgent).family.toLowerCase();

		if (userAgentFamily!=="other" && isBot(userAgent))
		{
			return userAgentFamily;
		}
	}

	return "robots";
};



module.exports = parseBotAgent;

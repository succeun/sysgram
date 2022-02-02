function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		saas: {
			alerting: {
				Newrelic: "newrelic.png",
				Opsgenie: "opsgenie.png",
				Pushover: "pushover.png",
			},
			analytics: {
				Snowflake: "snowflake.png",
				Stitch: "stitch.png",
			},
			cdn: {
				Akamai: "akamai.png",
				Cloudflare: "cloudflare.png",
			},
			chat: {
				Discord: "discord.png",
				Mattermost: "mattermost.png",
				RocketChat: "rocket-chat.png",
				Slack: "slack.png",
				Teams: "teams.png",
				Telegram: "telegram.png",
			},
			filesharing: {
				Nextcloud: "nextcloud.png",
			},
			identity: {
				Auth0: "auth0.png",
				Okta: "okta.png",
			},
			logging: {
				Datadog: "datadog.png",
				Newrelic: "newrelic.png",
				Papertrail: "papertrail.png",
			},
			media: {
				Cloudinary: "cloudinary.png",
			},
			recommendation: {
				Recombee: "recombee.png",
			},
			social: {
				Facebook: "facebook.png",
				Twitter: "twitter.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		saas: {
			logging: {
				Datadog: "DataDog",
				Newrelic: "NewRelic"
			}
		},
	}
	
	///////////////////////////////////////////////////////////////////////////
	
	function merge(src, node) {
		for (var x in node) {
			var aliase = node[x];
			if (aliase) {
				if (typeof aliase == "string") {
					var obj = src[x];
					if (obj) {
						src[aliase] = obj;
					}
				} else {
					if (src[x]) {
						merge(src[x], node[x]);
					} else {
						src[x] = node[x];
					}
				}
			}
		}
	}
	
	merge(resources, ALIASES);
	
	return resources;
}

export default getResources();



import util from './util';

function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		saas: {
			alerting: {
				Newrelic: "newrelic.png",
				Opsgenie: "opsgenie.png",
				Pushover: "pushover.png",
				Xmatters: " xmatters.png",
			},
			analytics: {
				Snowflake: "snowflake.png",
				Stitch: "stitch.png",
			},
			cdn: {
				Akamai: "akamai.png",
				Cloudflare: "cloudflare.png",
				Fastly: "fastly.png",
			},
			chat: {
				Discord: "discord.png",
				Line: "line.png",
				Mattermost: "mattermost.png",
				Messenger: "messenger.png",
				RocketChat: "rocket-chat.png",
				Slack: "slack.png",
				Teams: "teams.png",
				Telegram: "telegram.png",
			},
			communication: {
				Twilio: "twilio.png",
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
	
	util.merge(resources, ALIASES);
	
	return resources;
}

export default getResources();



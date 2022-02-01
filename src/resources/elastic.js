function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		elastic: {
			elasticsearch: {
				Alerting: "alerting.png",
				Beats: "beats.png",
				Elasticsearch: "elasticsearch.png",
				Kibana: "kibana.png",
				Logstash: "logstash.png",
				MachineLearning: "machine-learning.png",
				Maps: "maps.png",
				Monitoring: "monitoring.png",
				SecuritySettings: "security-settings.png",
				Sql: "sql.png",
			},
			enterprisesearch: {
				AppSearch: "app-search.png",
				EnterpriseSearch: "enterprise-search.png",
				SiteSearch: "site-search.png",
				WorkplaceSearch: "workplace-search.png",
			},
			observability: {
				APM: "apm.png",
				Logs: "logs.png",
				Metrics: "metrics.png",
				Observability: "observability.png",
				Uptime: "uptime.png",
			},
			orchestration: {
				ECE: "ece.png",
				ECK: "eck.png",
			},
			saas: {
				Cloud: "cloud.png",
				Elastic: "elastic.png",
			},
			security: {
				Endpoint: "endpoint.png",
				Security: "security.png",
				SIEM: "siem.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		"elastic": {
			"elasticsearch": {
				"Logstash": "LogStash",
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



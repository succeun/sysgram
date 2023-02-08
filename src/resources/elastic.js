import util from './util';

function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		elastic: {
			agent: {
				Agent: "agent.png",
				Endpoint: "endpoint.png",
				Fleet: "fleet.png",
				Integrations: "integrations.png",
			},
			beats: {
				APM: "apm.png",
				Auditbeat: "auditbeat.png",
				Filebeat: "filebeat.png",
				Functionbeat: "functionbeat.png",
				Heartbeat: "heartbeat.png",
				Metricbeat: "metricbeat.png",
				Packetbeat: "packetbeat.png",
				Winlogbeat: "winlogbeat.png",
			},
			elasticsearch: {
				Alerting: "alerting.png",
				Beats: "beats.png",
				Elasticsearch: "elasticsearch.png",
				Kibana: "kibana.png",
				LogstashPipeline: "logstash-pipeline.png",
				Logstash: "logstash.png",
				MachineLearning: "machine-learning.png",
				MapServices: "map-services.png",
				Maps: "maps.png",
				Monitoring: "monitoring.png",
				SearchableSnapshots: "searchable-snapshots.png",
				SecuritySettings: "security-settings.png",
				Sql: "sql.png",
				Stack: "stack.png",
			},
			enterprisesearch: {
				AppSearch: "app-search.png",
				Crawler: "crawler.png",
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
				Xdr: "xdr.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		elastic: {
			elasticsearch: {
				Logstash: "LogStash",
			}
		},
	}
	
	///////////////////////////////////////////////////////////////////////////
	
	util.merge(resources, ALIASES);
	
	return resources;
}

export default getResources();



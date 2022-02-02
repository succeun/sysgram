function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		onprem: {
			aggregator: {
				Fluentd: "fluentd.png",
				Vector: "vector.png",
			},
			analytics: {
				Beam: "beam.png",
				Databricks: "databricks.png",
				Dbt: "dbt.png",
				Dremio: "dremio.png",
				Flink: "flink.png",
				Hadoop: "hadoop.png",
				Hive: "hive.png",
				Metabase: "metabase.png",
				Norikra: "norikra.png",
				Powerbi: "powerbi.png",
				Presto: "presto.png",
				Singer: "singer.png",
				Spark: "spark.png",
				Storm: "storm.png",
				Superset: "superset.png",
				Tableau: "tableau.png",
			},
			auth: {
				Boundary: "boundary.png",
				BuzzfeedSso: "buzzfeed-sso.png",
				Oauth2Proxy: "oauth2-proxy.png",
			},
			cd: {
				Spinnaker: "spinnaker.png",
				TektonCli: "tekton-cli.png",
				Tekton: "tekton.png",
			},
			certificates: {
				CertManager: "cert-manager.png",
				LetsEncrypt: "lets-encrypt.png",
			},
			ci: {
				Circleci: "circleci.png",
				Concourseci: "concourseci.png",
				Droneci: "droneci.png",
				GithubActions: "github-actions.png",
				Gitlabci: "gitlabci.png",
				Jenkins: "jenkins.png",
				Teamcity: "teamcity.png",
				Travisci: "travisci.png",
				Zuulci: "zuulci.png",
			},
			client: {
				Client: "client.png",
				User: "user.png",
				Users: "users.png",
			},
			compute: {
				Nomad: "nomad.png",
				Server: "server.png",
			},
			container: {
				Containerd: "containerd.png",
				Crio: "crio.png",
				Docker: "docker.png",
				Firecracker: "firecracker.png",
				Gvisor: "gvisor.png",
				Lxc: "lxc.png",
				Rkt: "rkt.png",
			},
			database: {
				Cassandra: "cassandra.png",
				Clickhouse: "clickhouse.png",
				Cockroachdb: "cockroachdb.png",
				Couchbase: "couchbase.png",
				Couchdb: "couchdb.png",
				Dgraph: "dgraph.png",
				Druid: "druid.png",
				Hbase: "hbase.png",
				Influxdb: "influxdb.png",
				Janusgraph: "janusgraph.png",
				Mariadb: "mariadb.png",
				Mongodb: "mongodb.png",
				Mssql: "mssql.png",
				Mysql: "mysql.png",
				Neo4J: "neo4j.png",
				Oracle: "oracle.png",
				Postgresql: "postgresql.png",
				Scylla: "scylla.png",
			},
			dns: {
				Coredns: "coredns.png",
				Powerdns: "powerdns.png",
			},
			etl: {
				Embulk: "embulk.png",
			},
			gitops: {
				Argocd: "argocd.png",
				Flagger: "flagger.png",
				Flux: "flux.png",
			},
			groupware: {
				Nextcloud: "nextcloud.png",
			},
			iac: {
				Ansible: "ansible.png",
				Atlantis: "atlantis.png",
				Awx: "awx.png",
				Puppet: "puppet.png",
				Terraform: "terraform.png",
			},
			identity: {
				Dex: "dex.png",
			},
			inmemory: {
				Aerospike: "aerospike.png",
				Hazelcast: "hazelcast.png",
				Memcached: "memcached.png",
				Redis: "redis.png",
			},
			logging: {
				Fluentbit: "fluentbit.png",
				Graylog: "graylog.png",
				Loki: "loki.png",
				Rsyslog: "rsyslog.png",
				SyslogNg: "syslog-ng.png",
			},
			mlops: {
				Polyaxon: "polyaxon.png",
			},
			monitoring: {
				Cortex: "cortex.png",
				Datadog: "datadog.png",
				Dynatrace: "dynatrace.png",
				Grafana: "grafana.png",
				Humio: "humio.png",
				Nagios: "nagios.png",
				Newrelic: "newrelic.png",
				PrometheusOperator: "prometheus-operator.png",
				Prometheus: "prometheus.png",
				Sentry: "sentry.png",
				Splunk: "splunk.png",
				Thanos: "thanos.png",
				Zabbix: "zabbix.png",
			},
			network: {
				Ambassador: "ambassador.png",
				Apache: "apache.png",
				Bind9: "bind-9.png",
				Caddy: "caddy.png",
				Consul: "consul.png",
				Envoy: "envoy.png",
				Etcd: "etcd.png",
				Glassfish: "glassfish.png",
				Gunicorn: "gunicorn.png",
				Haproxy: "haproxy.png",
				Internet: "internet.png",
				Istio: "istio.png",
				Jbossas: "jbossas.png",
				Jetty: "jetty.png",
				Kong: "kong.png",
				Linkerd: "linkerd.png",
				Nginx: "nginx.png",
				Ocelot: "ocelot.png",
				OpenServiceMesh: "open-service-mesh.png",
				Opnsense: "opnsense.png",
				Pfsense: "pfsense.png",
				Pomerium: "pomerium.png",
				Powerdns: "powerdns.png",
				Tomcat: "tomcat.png",
				Traefik: "traefik.png",
				Tyk: "tyk.png",
				Vyos: "vyos.png",
				Wildfly: "wildfly.png",
				Zookeeper: "zookeeper.png",
			},
			proxmox: {
				Pve: "pve.png",
			},
			queue: {
				Activemq: "activemq.png",
				Celery: "celery.png",
				Kafka: "kafka.png",
				Nats: "nats.png",
				Rabbitmq: "rabbitmq.png",
				Zeromq: "zeromq.png",
			},
			search: {
				Solr: "solr.png",
			},
			security: {
				Bitwarden: "bitwarden.png",
				Trivy: "trivy.png",
				Vault: "vault.png",
			},
			storage: {
				CephOsd: "ceph-osd.png",
				Ceph: "ceph.png",
				Glusterfs: "glusterfs.png",
			},
			tracing: {
				Jaeger: "jaeger.png",
			},
			vcs: {
				Git: "git.png",
				Gitea: "gitea.png",
				Github: "github.png",
				Gitlab: "gitlab.png",
				Svn: "svn.png",
			},
			workflow: {
				Airflow: "airflow.png",
				Digdag: "digdag.png",
				Kubeflow: "kubeflow.png",
				Nifi: "nifi.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		onprem: {
			analytics: {
				Powerbi: "PowerBI"
			},
			ci: {
				Circleci: "CircleCI",
				Concourseci: "ConcourseCI",
				Droneci: "DroneCI",
				Gitlabci: "GitlabCI",
				Travisci: "TravisCI",
				Teamcity: "TC",
				Zuulci: "ZuulCI",
			},
			container: {
				Lxc: "LXC",
				Rkt: "RKT",
			},
			database: {
				Clickhouse: "ClickHouse",
				Cockroachdb: "CockroachDB",
				Couchdb: "CouchDB",
				Hbase: "HBase",
				Influxdb: "InfluxDB",
				Janusgraph: "JanusGraph",
				Mariadb: "MariaDB",
				Mongodb: "MongoDB",
				Mssql: "MSSQL",
				Mysql: "MySQL",
				Postgresql: "PostgreSQL",
			},
			gitops: {
				Argocd: "ArgoCD",
			},
			logging: {
				Fluentbit: "FluentBit",
				Rsyslog: "RSyslog",
			},
			network: {
				Etcd: "ETCD",
				Haproxy: "HAProxy",
				OpenServiceMesh: "OSM",
				Opnsense: "OPNSense",
				Pfsense: "PFSense",
				Vyos: "VyOS"
			},
			proxmox: {
				Pve: "ProxmoxVE",
			},
			queue: {
				Activemq: "ActiveMQ",
				Rabbitmq: "RabbitMQ",
				Zeromq: "ZeroMQ",
			},
			storage: {
				Ceph: "CEPH",
				CephOsd: "CEPH_OSD",
			},
			workflow: {
				Kubeflow: "KubeFlow",
				Nifi: "NiFi",
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



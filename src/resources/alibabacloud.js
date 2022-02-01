function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		alibabacloud: {
			analytics: {
				AnalyticDb: "analytic-db.png",
				ClickHouse: "click-house.png",
				DataLakeAnalytics: "data-lake-analytics.png",
				ElaticMapReduce: "elatic-map-reduce.png",
				OpenSearch: "open-search.png",
			},
			application: {
				ApiGateway: "api-gateway.png",
				BeeBot: "bee-bot.png",
				BlockchainAsAService: "blockchain-as-a-service.png",
				CloudCallCenter: "cloud-call-center.png",
				CodePipeline: "code-pipeline.png",
				DirectMail: "direct-mail.png",
				LogService: "log-service.png",
				MessageNotificationService: "message-notification-service.png",
				NodeJsPerformancePlatform: "node-js-performance-platform.png",
				OpenSearch: "open-search.png",
				PerformanceTestingService: "performance-testing-service.png",
				RdCloud: "rd-cloud.png",
				SmartConversationAnalysis: "smart-conversation-analysis.png",
				Yida: "yida.png",
			},
			communication: {
				DirectMail: "direct-mail.png",
				MobilePush: "mobile-push.png",
			},
			compute: {
				AutoScaling: "auto-scaling.png",
				BatchCompute: "batch-compute.png",
				ContainerRegistry: "container-registry.png",
				ContainerService: "container-service.png",
				ElasticComputeService: "elastic-compute-service.png",
				ElasticContainerInstance: "elastic-container-instance.png",
				ElasticHighPerformanceComputing: "elastic-high-performance-computing.png",
				ElasticSearch: "elastic-search.png",
				FunctionCompute: "function-compute.png",
				OperationOrchestrationService: "operation-orchestration-service.png",
				ResourceOrchestrationService: "resource-orchestration-service.png",
				ServerLoadBalancer: "server-load-balancer.png",
				ServerlessAppEngine: "serverless-app-engine.png",
				SimpleApplicationServer: "simple-application-server.png",
				WebAppService: "web-app-service.png",
			},
			database: {
				ApsaradbCassandra: "apsaradb-cassandra.png",
				ApsaradbHbase: "apsaradb-hbase.png",
				ApsaradbMemcache: "apsaradb-memcache.png",
				ApsaradbMongodb: "apsaradb-mongodb.png",
				ApsaradbOceanbase: "apsaradb-oceanbase.png",
				ApsaradbPolardb: "apsaradb-polardb.png",
				ApsaradbPostgresql: "apsaradb-postgresql.png",
				ApsaradbPpas: "apsaradb-ppas.png",
				ApsaradbRedis: "apsaradb-redis.png",
				ApsaradbSqlserver: "apsaradb-sqlserver.png",
				DataManagementService: "data-management-service.png",
				DataTransmissionService: "data-transmission-service.png",
				DatabaseBackupService: "database-backup-service.png",
				DisributeRelationalDatabaseService: "disribute-relational-database-service.png",
				GraphDatabaseService: "graph-database-service.png",
				HybriddbForMysql: "hybriddb-for-mysql.png",
				RelationalDatabaseService: "relational-database-service.png",
			},
			iot: {
				IotInternetDeviceId: "iot-internet-device-id.png",
				IotLinkWan: "iot-link-wan.png",
				IotMobileConnectionPackage: "iot-mobile-connection-package.png",
				IotPlatform: "iot-platform.png",
			},
			network: {
				Cdn: "cdn.png",
				CloudEnterpriseNetwork: "cloud-enterprise-network.png",
				ElasticIpAddress: "elastic-ip-address.png",
				ExpressConnect: "express-connect.png",
				NatGateway: "nat-gateway.png",
				ServerLoadBalancer: "server-load-balancer.png",
				SmartAccessGateway: "smart-access-gateway.png",
				VirtualPrivateCloud: "virtual-private-cloud.png",
				VpnGateway: "vpn-gateway.png",
			},
			security: {
				AntiBotService: "anti-bot-service.png",
				AntiDdosBasic: "anti-ddos-basic.png",
				AntiDdosPro: "anti-ddos-pro.png",
				AntifraudService: "antifraud-service.png",
				BastionHost: "bastion-host.png",
				CloudFirewall: "cloud-firewall.png",
				CloudSecurityScanner: "cloud-security-scanner.png",
				ContentModeration: "content-moderation.png",
				CrowdsourcedSecurityTesting: "crowdsourced-security-testing.png",
				DataEncryptionService: "data-encryption-service.png",
				DbAudit: "db-audit.png",
				GameShield: "game-shield.png",
				IdVerification: "id-verification.png",
				ManagedSecurityService: "managed-security-service.png",
				SecurityCenter: "security-center.png",
				ServerGuard: "server-guard.png",
				SslCertificates: "ssl-certificates.png",
				WebApplicationFirewall: "web-application-firewall.png",
			},
			storage: {
				CloudStorageGateway: "cloud-storage-gateway.png",
				FileStorageHdfs: "file-storage-hdfs.png",
				FileStorageNas: "file-storage-nas.png",
				HybridBackupRecovery: "hybrid-backup-recovery.png",
				HybridCloudDisasterRecovery: "hybrid-cloud-disaster-recovery.png",
				Imm: "imm.png",
				ObjectStorageService: "object-storage-service.png",
				ObjectTableStore: "object-table-store.png",
			},
			web: {
				Dns: "dns.png",
				Domain: "domain.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		"alibabacloud": {
			"application": {
				"LogService": "SLS",
				"MessageNotificationService": "MNS",
				"PerformanceTestingService": "PTS",
				"SmartConversationAnalysis": "SCA",
			},
			"compute": {
				"AutoScaling": "ESS",
				"ElasticComputeService": "ECS",
				"ElasticContainerInstance": "ECI",
				"ElasticHighPerformanceComputing": "EHPC",
				"FunctionCompute": "FC",
				"OperationOrchestrationService": "OOS",
				"ResourceOrchestrationService": "ROS",
				"ServerLoadBalancer": "SLB",
				"ServerlessAppEngine": "SAE",
				"SimpleApplicationServer": "SAS",
				"WebAppService": "WAS",
			},
			"database": {
				"DataManagementService": "DMS",
				"DataTransmissionService": "DTS",
				"DatabaseBackupService": "DBS",
				"DisributeRelationalDatabaseService": "DRDS",
				"GraphDatabaseService": "GDS",
				"RelationalDatabaseService": "RDS",
			},
			"network": {
				"CloudEnterpriseNetwork": "CEN",
				"ElasticIpAddress": "EIP",
				"ServerLoadBalancer": "SLB",
				"VirtualPrivateCloud": "VPC",
			},
			"security": {
				"AntiBotService": "ABS",
				"AntifraudService": "AS",
				"CloudFirewall": "CFW",
				"ContentModeration": "CM",
				"DataEncryptionService": "DES",
				"WebApplicationFirewall": "WAF",
			},
			"storage": {
				"FileStorageHdfs": "HDFS",
				"FileStorageNas": "NAS",
				"HybridBackupRecovery": "HBR",
				"HybridCloudDisasterRecovery": "HDR",
				"ObjectStorageService": "OSS",
				"ObjectTableStore": "OTS",
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



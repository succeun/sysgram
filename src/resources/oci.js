function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		oci: {
			compute: {
				AutoscaleWhite: "autoscale-white.png",
				Autoscale: "autoscale.png",
				BMWhite: "bm-white.png",
				BM: "bm.png",
				ContainerWhite: "container-white.png",
				Container: "container.png",
				FunctionsWhite: "functions-white.png",
				Functions: "functions.png",
				InstancePoolsWhite: "instance-pools-white.png",
				InstancePools: "instance-pools.png",
				OCIRWhite: "ocir-white.png",
				OCIR: "ocir.png",
				OKEWhite: "oke-white.png",
				OKE: "oke.png",
				VMWhite: "vm-white.png",
				VM: "vm.png",
			},
			connectivity: {
				BackboneWhite: "backbone-white.png",
				Backbone: "backbone.png",
				CDNWhite: "cdn-white.png",
				CDN: "cdn.png",
				CustomerDatacenter: "customer-datacenter.png",
				CustomerDatacntrWhite: "customer-datacntr-white.png",
				CustomerPremiseWhite: "customer-premise-white.png",
				CustomerPremise: "customer-premise.png",
				DisconnectedRegionsWhite: "disconnected-regions-white.png",
				DisconnectedRegions: "disconnected-regions.png",
				DNSWhite: "dns-white.png",
				DNS: "dns.png",
				FastConnectWhite: "fast-connect-white.png",
				FastConnect: "fast-connect.png",
				NATGatewayWhite: "nat-gateway-white.png",
				NATGateway: "nat-gateway.png",
				VPNWhite: "vpn-white.png",
				VPN: "vpn.png",
			},
			database: {
				AutonomousWhite: "autonomous-white.png",
				Autonomous: "autonomous.png",
				BigdataServiceWhite: "bigdata-service-white.png",
				BigdataService: "bigdata-service.png",
				DatabaseServiceWhite: "database-service-white.png",
				DatabaseService: "database-service.png",
				DataflowApacheWhite: "dataflow-apache-white.png",
				DataflowApache: "dataflow-apache.png",
				DcatWhite: "dcat-white.png",
				Dcat: "dcat.png",
				DisWhite: "dis-white.png",
				Dis: "dis.png",
				DMSWhite: "dms-white.png",
				DMS: "dms.png",
				ScienceWhite: "science-white.png",
				Science: "science.png",
				StreamWhite: "stream-white.png",
				Stream: "stream.png",
			},
			devops: {
				APIGatewayWhite: "api-gateway-white.png",
				APIGateway: "api-gateway.png",
				APIServiceWhite: "api-service-white.png",
				APIService: "api-service.png",
				ResourceMgmtWhite: "resource-mgmt-white.png",
				ResourceMgmt: "resource-mgmt.png",
			},
			governance: {
				AuditWhite: "audit-white.png",
				Audit: "audit.png",
				CompartmentsWhite: "compartments-white.png",
				Compartments: "compartments.png",
				GroupsWhite: "groups-white.png",
				Groups: "groups.png",
				LoggingWhite: "logging-white.png",
				Logging: "logging.png",
				OCIDWhite: "ocid-white.png",
				OCID: "ocid.png",
				PoliciesWhite: "policies-white.png",
				Policies: "policies.png",
				TaggingWhite: "tagging-white.png",
				Tagging: "tagging.png",
			},
			monitoring: {
				AlarmWhite: "alarm-white.png",
				Alarm: "alarm.png",
				EmailWhite: "email-white.png",
				Email: "email.png",
				EventsWhite: "events-white.png",
				Events: "events.png",
				HealthCheckWhite: "health-check-white.png",
				HealthCheck: "health-check.png",
				NotificationsWhite: "notifications-white.png",
				Notifications: "notifications.png",
				QueueWhite: "queue-white.png",
				Queue: "queue.png",
				SearchWhite: "search-white.png",
				Search: "search.png",
				TelemetryWhite: "telemetry-white.png",
				Telemetry: "telemetry.png",
				WorkflowWhite: "workflow-white.png",
				Workflow: "workflow.png",
			},
			network: {
				DrgWhite: "drg-white.png",
				Drg: "drg.png",
				FirewallWhite: "firewall-white.png",
				Firewall: "firewall.png",
				InternetGatewayWhite: "internet-gateway-white.png",
				InternetGateway: "internet-gateway.png",
				LoadBalancerWhite: "load-balancer-white.png",
				LoadBalancer: "load-balancer.png",
				RouteTableWhite: "route-table-white.png",
				RouteTable: "route-table.png",
				SecurityListsWhite: "security-lists-white.png",
				SecurityLists: "security-lists.png",
				ServiceGatewayWhite: "service-gateway-white.png",
				ServiceGateway: "service-gateway.png",
				VcnWhite: "vcn-white.png",
				Vcn: "vcn.png",
			},
			security: {
				CloudGuardWhite: "cloud-guard-white.png",
				CloudGuard: "cloud-guard.png",
				DDOSWhite: "ddos-white.png",
				DDOS: "ddos.png",
				EncryptionWhite: "encryption-white.png",
				Encryption: "encryption.png",
				IDAccessWhite: "id-access-white.png",
				IDAccess: "id-access.png",
				KeyManagementWhite: "key-management-white.png",
				KeyManagement: "key-management.png",
				MaxSecurityZoneWhite: "max-security-zone-white.png",
				MaxSecurityZone: "max-security-zone.png",
				VaultWhite: "vault-white.png",
				Vault: "vault.png",
				WAFWhite: "waf-white.png",
				WAF: "waf.png",
			},
			storage: {
				BackupRestoreWhite: "backup-restore-white.png",
				BackupRestore: "backup-restore.png",
				BlockStorageCloneWhite: "block-storage-clone-white.png",
				BlockStorageClone: "block-storage-clone.png",
				BlockStorageWhite: "block-storage-white.png",
				BlockStorage: "block-storage.png",
				BucketsWhite: "buckets-white.png",
				Buckets: "buckets.png",
				DataTransferWhite: "data-transfer-white.png",
				DataTransfer: "data-transfer.png",
				ElasticPerformanceWhite: "elastic-performance-white.png",
				ElasticPerformance: "elastic-performance.png",
				FileStorageWhite: "file-storage-white.png",
				FileStorage: "file-storage.png",
				ObjectStorageWhite: "object-storage-white.png",
				ObjectStorage: "object-storage.png",
				StorageGatewayWhite: "storage-gateway-white.png",
				StorageGateway: "storage-gateway.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		"oci": {
			"compute": {
				"VM": "VirtualMachine",
				"VMWhite": "VirtualMachineWhite",
				"BM": "BareMetal",
				"BMWhite": "BareMetalWhite",
				"OCIR": "OCIRegistry",
				"OCIRWhite": "OCIRegistryWhite",
				"OKE": "ContainerEngine",
				"OKEWhite": "ContainerEngineWhite",
			},
			"database": {
				"Autonomous": "ADB",
				"AutonomousWhite": "ADBWhite",
				"DatabaseService": "DBService",
				"DatabaseServiceWhite": "DBServiceWhite",
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



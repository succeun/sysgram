function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		"ibm": {
			"analytics": {
				Analytics: "analytics.png",
				DataIntegration: "data-integration.png",
				DataRepositories: "data-repositories.png",
				DeviceAnalytics: "device-analytics.png",
				StreamingComputing: "streaming-computing.png",
			},
			"applications": {
				ActionableInsight: "actionable-insight.png",
				Annotate: "annotate.png",
				ApiDeveloperPortal: "api-developer-portal.png",
				ApiPolyglotRuntimes: "api-polyglot-runtimes.png",
				AppServer: "app-server.png",
				ApplicationLogic: "application-logic.png",
				EnterpriseApplications: "enterprise-applications.png",
				Index: "index.png",
				IotApplication: "iot-application.png",
				Microservice: "microservice.png",
				MobileApp: "mobile-app.png",
				Ontology: "ontology.png",
				OpenSourceTools: "open-source-tools.png",
				RuntimeServices: "runtime-services.png",
				SaasApplications: "saas-applications.png",
				ServiceBroker: "service-broker.png",
				SpeechToText: "speech-to-text.png",
				VisualRecognition: "visual-recognition.png",
				Visualization: "visualization.png",
			},
			"blockchain": {
				BlockchainDeveloper: "blockchain-developer.png",
				Blockchain: "blockchain.png",
				CertificateAuthority: "certificate-authority.png",
				ClientApplication: "client-application.png",
				Communication: "communication.png",
				Consensus: "consensus.png",
				EventListener: "event-listener.png",
				Event: "event.png",
				ExistingEnterpriseSystems: "existing-enterprise-systems.png",
				HyperledgerFabric: "hyperledger-fabric.png",
				KeyManagement: "key-management.png",
				Ledger: "ledger.png",
				MembershipServicesProviderApi: "membership-services-provider-api.png",
				Membership: "membership.png",
				MessageBus: "message-bus.png",
				Node: "node.png",
				Services: "services.png",
				SmartContract: "smart-contract.png",
				TransactionManager: "transaction-manager.png",
				Wallet: "wallet.png",
			},
			"compute": {
				BareMetalServer: "bare-metal-server.png",
				ImageService: "image-service.png",
				Instance: "instance.png",
				Key: "key.png",
				PowerInstance: "power-instance.png",
			},
			"data": {
				Caches: "caches.png",
				Cloud: "cloud.png",
				ConversationTrainedDeployed: "conversation-trained-deployed.png",
				DataServices: "data-services.png",
				DataSources: "data-sources.png",
				DeviceIdentityService: "device-identity-service.png",
				DeviceRegistry: "device-registry.png",
				EnterpriseData: "enterprise-data.png",
				EnterpriseUserDirectory: "enterprise-user-directory.png",
				FileRepository: "file-repository.png",
				GroundTruth: "ground-truth.png",
				Model: "model.png",
				TmsDataInterface: "tms-data-interface.png",
			},
			"devops": {
				ArtifactManagement: "artifact-management.png",
				BuildTest: "build-test.png",
				CodeEditor: "code-editor.png",
				CollaborativeDevelopment: "collaborative-development.png",
				ConfigurationManagement: "configuration-management.png",
				ContinuousDeploy: "continuous-deploy.png",
				ContinuousTesting: "continuous-testing.png",
				Devops: "devops.png",
				Provision: "provision.png",
				ReleaseManagement: "release-management.png",
			},
			"general": {
				CloudMessaging: "cloud-messaging.png",
				CloudServices: "cloud-services.png",
				Cloudant: "cloudant.png",
				CognitiveServices: "cognitive-services.png",
				DataSecurity: "data-security.png",
				Enterprise: "enterprise.png",
				GovernanceRiskCompliance: "governance-risk-compliance.png",
				IBMContainers: "ibm-containers.png",
				IBMPublicCloud: "ibm-public-cloud.png",
				IdentityAccessManagement: "identity-access-management.png",
				IdentityProvider: "identity-provider.png",
				InfrastructureSecurity: "infrastructure-security.png",
				Internet: "internet.png",
				IotCloud: "iot-cloud.png",
				MicroservicesApplication: "microservices-application.png",
				MicroservicesMesh: "microservices-mesh.png",
				MonitoringLogging: "monitoring-logging.png",
				Monitoring: "monitoring.png",
				ObjectStorage: "object-storage.png",
				OfflineCapabilities: "offline-capabilities.png",
				Openwhisk: "openwhisk.png",
				PeerCloud: "peer-cloud.png",
				RetrieveRank: "retrieve-rank.png",
				Scalable: "scalable.png",
				ServiceDiscoveryConfiguration: "service-discovery-configuration.png",
				TextToSpeech: "text-to-speech.png",
				TransformationConnectivity: "transformation-connectivity.png",
			},
			"infrastructure": {
				Channels: "channels.png",
				CloudMessaging: "cloud-messaging.png",
				Dashboard: "dashboard.png",
				Diagnostics: "diagnostics.png",
				EdgeServices: "edge-services.png",
				EnterpriseMessaging: "enterprise-messaging.png",
				EventFeed: "event-feed.png",
				InfrastructureServices: "infrastructure-services.png",
				InterserviceCommunication: "interservice-communication.png",
				LoadBalancingRouting: "load-balancing-routing.png",
				MicroservicesMesh: "microservices-mesh.png",
				MobileBackend: "mobile-backend.png",
				MobileProviderNetwork: "mobile-provider-network.png",
				MonitoringLogging: "monitoring-logging.png",
				Monitoring: "monitoring.png",
				PeerServices: "peer-services.png",
				ServiceDiscoveryConfiguration: "service-discovery-configuration.png",
				TransformationConnectivity: "transformation-connectivity.png",
			},
			"management": {
				AlertNotification: "alert-notification.png",
				ApiManagement: "api-management.png",
				CloudManagement: "cloud-management.png",
				ClusterManagement: "cluster-management.png",
				ContentManagement: "content-management.png",
				DataServices: "data-services.png",
				DeviceManagement: "device-management.png",
				InformationGovernance: "information-governance.png",
				ItServiceManagement: "it-service-management.png",
				Management: "management.png",
				MonitoringMetrics: "monitoring-metrics.png",
				ProcessManagement: "process-management.png",
				ProviderCloudPortalService: "provider-cloud-portal-service.png",
				PushNotifications: "push-notifications.png",
				ServiceManagementTools: "service-management-tools.png",
			},
			"network": {
				Bridge: "bridge.png",
				DirectLink: "direct-link.png",
				Enterprise: "rnterprise.png",
				Firewall: "firewall.png",
				FloatingIp: "floating-ip.png",
				Gateway: "gateway.png",
				InternetServices: "internet-services.png",
				LoadBalancerListener: "load-balancer-listener.png",
				LoadBalancerPool: "load-balancer-pool.png",
				LoadBalancer: "load-balancer.png",
				LoadBalancingRouting: "load-balancing-routing.png",
				PublicGateway: "public-gateway.png",
				Region: "region.png",
				Router: "router.png",
				Rules: "rules.png",
				Subnet: "subnet.png",
				TransitGateway: "transit-gateway.png",
				Vpc: "vpc.png",
				VpnConnection: "vpn-connection.png",
				VpnGateway: "vpn-gateway.png",
				VpnPolicy: "vpn-policy.png",
			},
			"security": {
				ApiSecurity: "api-security.png",
				BlockchainSecurityService: "blockchain-security-service.png",
				DataSecurity: "data-security.png",
				Firewall: "firewall.png",
				Gateway: "gateway.png",
				GovernanceRiskCompliance: "governance-risk-compliance.png",
				IdentityAccessManagement: "identity-access-management.png",
				IdentityProvider: "identity-provider.png",
				InfrastructureSecurity: "infrastructure-security.png",
				PhysicalSecurity: "physical-security.png",
				SecurityMonitoringIntelligence: "security-monitoring-intelligence.png",
				SecurityServices: "security-services.png",
				TrustendComputing: "trustend-computing.png",
				Vpn: "vpn.png",
			},
			"social": {
				Communities: "communities.png",
				FileSync: "file-sync.png",
				LiveCollaboration: "live-collaboration.png",
				Messaging: "messaging.png",
				Networking: "networking.png",
			},
			"storage": {
				BlockStorage: "block-storage.png",
				ObjectStorage: "object-storage.png",
			},
			"user": {
				Browser: "browser.png",
				Device: "device.png",
				IntegratedDigitalExperiences: "integrated-digital-experiences.png",
				PhysicalEntity: "physical-entity.png",
				Sensor: "sensor.png",
				User: "user.png",
			},
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		"ibm": {
			"network": {
				"ACL": "Rules",
				"CIS": "InternetServices",
				"DL": "DirectLink",
				"FIP": "FloatingIp",
				"FloatingIP": "FloatingIp",
				"FW": "Firewall",
				"LB": "LoadBalancer",
				"NLB": "LoadBalancer",
				"PublicGateway": "Gateway",
				"SecurityGroupRules": "Rules",
				"TG": "TransitGateway",
				"VPC": "Vpc",
				"VPNGateway": "VpnGateway",
				"VPNConnection": "VpnConnection",
				"VPNPolicy": "VpnPolicy",
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



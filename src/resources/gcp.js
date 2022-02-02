function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		gcp: {
			analytics: {
				Bigquery: "bigquery.png",
				Composer: "composer.png",
				DataCatalog: "data-catalog.png",
				DataFusion: "data-fusion.png",
				Dataflow: "dataflow.png",
				Datalab: "datalab.png",
				Dataprep: "dataprep.png",
				Dataproc: "dataproc.png",
				Genomics: "genomics.png",
				Pubsub: "pubsub.png",
			},
			api: {
				APIGateway: "api-gateway.png",
				Endpoints: "endpoints.png",
			},
			compute: {
				AppEngine: "app-engine.png",
				ComputeEngine: "compute-engine.png",
				ContainerOptimizedOS: "container-optimized-os.png",
				Functions: "functions.png",
				GKEOnPrem: "gke-on-prem.png",
				GPU: "gpu.png",
				KubernetesEngine: "kubernetes-engine.png",
				Run: "run.png",
			},
			database: {
				Bigtable: "bigtable.png",
				Datastore: "datastore.png",
				Firestore: "firestore.png",
				Memorystore: "memorystore.png",
				Spanner: "spanner.png",
				SQL: "sql.png",
			},
			devtools: {
				Build: "build.png",
				CodeForIntellij: "code-for-intellij.png",
				Code: "code.png",
				ContainerRegistry: "container-registry.png",
				GradleAppEnginePlugin: "gradle-app-engine-plugin.png",
				IdePlugins: "ide-plugins.png",
				MavenAppEnginePlugin: "maven-app-engine-plugin.png",
				Scheduler: "scheduler.png",
				SDK: "sdk.png",
				SourceRepositories: "source-repositories.png",
				Tasks: "tasks.png",
				TestLab: "test-lab.png",
				ToolsForEclipse: "tools-for-eclipse.png",
				ToolsForPowershell: "tools-for-powershell.png",
				ToolsForVisualStudio: "tools-for-visual-studio.png",
			},
			iot: {
				IotCore: "iot-core.png",
			},
			migration: {
				TransferAppliance: "transfer-appliance.png",
			},
			ml: {
				AdvancedSolutionsLab: "advanced-solutions-lab.png",
				AIHub: "ai-hub.png",
				AIPlatformDataLabelingService: "ai-platform-data-labeling-service.png",
				AIPlatform: "ai-platform.png",
				AutomlNaturalLanguage: "automl-natural-language.png",
				AutomlTables: "automl-tables.png",
				AutomlTranslation: "automl-translation.png",
				AutomlVideoIntelligence: "automl-video-intelligence.png",
				AutomlVision: "automl-vision.png",
				Automl: "automl.png",
				DialogFlowEnterpriseEdition: "dialog-flow-enterprise-edition.png",
				InferenceAPI: "inference-api.png",
				JobsAPI: "jobs-api.png",
				NaturalLanguageAPI: "natural-language-api.png",
				RecommendationsAI: "recommendations-ai.png",
				SpeechToText: "speech-to-text.png",
				TextToSpeech: "text-to-speech.png",
				TPU: "tpu.png",
				TranslationAPI: "translation-api.png",
				VideoIntelligenceAPI: "video-intelligence-api.png",
				VisionAPI: "vision-api.png",
			},
			network: {
				Armor: "armor.png",
				CDN: "cdn.png",
				DedicatedInterconnect: "dedicated-interconnect.png",
				DNS: "dns.png",
				ExternalIpAddresses: "external-ip-addresses.png",
				FirewallRules: "firewall-rules.png",
				LoadBalancing: "load-balancing.png",
				NAT: "nat.png",
				Network: "network.png",
				PartnerInterconnect: "partner-interconnect.png",
				PremiumNetworkTier: "premium-network-tier.png",
				Router: "router.png",
				Routes: "routes.png",
				StandardNetworkTier: "standard-network-tier.png",
				TrafficDirector: "traffic-director.png",
				VirtualPrivateCloud: "virtual-private-cloud.png",
				VPN: "vpn.png",
			},
			operations: {
				Monitoring: "monitoring.png",
			},
			security: {
				Iam: "iam.png",
				IAP: "iap.png",
				KeyManagementService: "key-management-service.png",
				ResourceManager: "resource-manager.png",
				SecurityCommandCenter: "security-command-center.png",
				SecurityScanner: "security-scanner.png",
			},
			storage: {
				Filestore: "filestore.png",
				PersistentDisk: "persistent-disk.png",
				Storage: "storage.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		"gcp": {
			"analytics": {
				"Bigquery": "BigQuery",
				"Pubsub": "PubSub",
			},
			"compute": {
				"AppEngine": "GAE",
				"Functions": "GCF",
				"ComputeEngine": "GCE",
				"KubernetesEngine": "GKE",
			},
			"database": {
				"Bigtable": "BigTable",
			},
			"devtools": {
				"ContainerRegistry": "GCR",
			},
			"ml": {
				"Automl": "AutoML",
				"NaturalLanguageAPI": "NLAPI",
				"SpeechToText": "STT",
				"TextToSpeech": "TTS",
			},
			"network": {
				"VirtualPrivateCloud": "VPC"
			},
			"security": {
				"KeyManagementService": "KMS",
				"SecurityCommandCenter": "SCC",
			},
			"storage": {
				"Storage": "GCS",
			},
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



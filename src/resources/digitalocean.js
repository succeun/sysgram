function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		digitalocean: {
			compute: {
				Containers: "containers.png",
				Docker: "docker.png",
				DropletConnect: "droplet-connect.png",
				DropletSnapshot: "droplet-snapshot.png",
				Droplet: "droplet.png",
				K8SCluster: "k8s-cluster.png",
				K8SNodePool: "k8s-node-pool.png",
				K8SNode: "k8s-node.png",
			},
			database: {
				DbaasPrimaryStandbyMore: "dbaas-primary-standby-more.png",
				DbaasPrimary: "dbaas-primary.png",
				DbaasReadOnly: "dbaas-read-only.png",
				DbaasStandby: "dbaas-standby.png",
			},
			network: {
				Certificate: "certificate.png",
				DomainRegistration: "domain-registration.png",
				Domain: "domain.png",
				Firewall: "firewall.png",
				FloatingIp: "floating-ip.png",
				InternetGateway: "internet-gateway.png",
				LoadBalancer: "load-balancer.png",
				ManagedVpn: "managed-vpn.png",
				Vpc: "vpc.png",
			},
			storage: {
				Folder: "folder.png",
				Space: "space.png",
				VolumeSnapshot: "volume-snapshot.png",
				Volume: "volume.png",
			},
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		
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



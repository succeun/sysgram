function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		outscale: {
			compute: {
				Compute: "compute.png",
				DirectConnect: "direct-connect.png",
			},
			network: {
				ClientVpn: "client-vpn.png",
				InternetService: "internet-service.png",
				LoadBalancer: "load-balancer.png",
				NatService: "nat-service.png",
				Net: "net.png",
				SiteToSiteVpng: "site-to-site-vpng.png",
			},
			security: {
				Firewall: "firewall.png",
				IdentityAndAccessManagement: "identity-and-access-management.png",
			},
			storage: {
				SimpleStorageService: "simple-storage-service.png",
				Storage: "storage.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		outscale: {
			Osc: "OSC",
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



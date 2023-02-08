import util from './util';

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
	
	util.merge(resources, ALIASES);
	
	return resources;
}

export default getResources();



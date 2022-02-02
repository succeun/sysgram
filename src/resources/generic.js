function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		generic: {
			blank: {
				Blank: "blank.png",
			},
			compute: {
				Rack: "rack.png",
			},
			database: {
				SQL: "sql.png",
			},
			device: {
				Mobile: "mobile.png",
				Tablet: "tablet.png",
			},
			network: {
				Firewall: "firewall.png",
				Router: "router.png",
				Subnet: "subnet.png",
				Switch: "switch.png",
				VPN: "vpn.png",
			},
			os: {
				Android: "android.png",
				Centos: "centos.png",
				IOS: "ios.png",
				LinuxGeneral: "linux-general.png",
				Suse: "suse.png",
				Ubuntu: "ubuntu.png",
				Windows: "windows.png",
			},
			place: {
				Datacenter: "datacenter.png",
			},
			storage: {
				Storage: "storage.png",
			},
			virtualization: {
				Virtualbox: "virtualbox.png",
				Vmware: "vmware.png",
				XEN: "xen.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		generic: {},
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



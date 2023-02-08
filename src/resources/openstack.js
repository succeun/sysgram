import util from './util';

function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		openstack: {
			apiproxies: {
				EC2API: "ec2api.png",
			},
			applicationlifecycle: {
				Freezer: "freezer.png",
				Masakari: "masakari.png",
				Murano: "murano.png",
				Solum: "solum.png",
			},
			baremetal: {
				Cyborg: "cyborg.png",
				Ironic: "ironic.png",
			},
			billing: {
				Cloudkitty: "cloudkitty.png",
			},
			compute: {
				Nova: "nova.png",
				Qinling: "qinling.png",
				Zun: "zun.png",
			},
			containerservices: {
				Kuryr: "kuryr.png",
			},
			deployment: {
				Ansible: "ansible.png",
				Charms: "charms.png",
				Chef: "chef.png",
				Helm: "helm.png",
				Kolla: "kolla.png",
				Tripleo: "tripleo.png",
			},
			frontend: {
				Horizon: "horizon.png",
			},
			monitoring: {
				Monasca: "monasca.png",
				Telemetry: "telemetry.png",
			},
			multiregion: {
				Tricircle: "tricircle.png",
			},
			networking: {
				Designate: "designate.png",
				Neutron: "neutron.png",
				Octavia: "octavia.png",
			},
			nfv: {
				Tacker: "tacker.png",
			},
			optimization: {
				Congress: "congress.png",
				Rally: "rally.png",
				Vitrage: "vitrage.png",
				Watcher: "watcher.png",
			},
			orchestration: {
				Blazar: "blazar.png",
				Heat: "heat.png",
				Mistral: "mistral.png",
				Senlin: "senlin.png",
				Zaqar: "zaqar.png",
			},
			packaging: {
				LOCI: "loci.png",
				Puppet: "puppet.png",
				RPM: "rpm.png",
			},
			sharedservices: {
				Barbican: "barbican.png",
				Glance: "glance.png",
				Karbor: "karbor.png",
				Keystone: "keystone.png",
				Searchlight: "searchlight.png",
			},
			storage: {
				Cinder: "cinder.png",
				Manila: "manila.png",
				Swift: "swift.png",
			},
			user: {
				Openstackclient: "openstackclient.png",
			},
			workloadprovisioning: {
				Magnum: "magnum.png",
				Sahara: "sahara.png",
				Trove: "trove.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		openstack: {
			user: {
				Openstackclient: "OpenStackClient",
			},
			billing: {
				Cloudkitty: "CloudKitty",
			},
			deployment: {
				Kolla: "KollaAnsible",
				Tripleo: "TripleO",
			}
		},
	}
	
	///////////////////////////////////////////////////////////////////////////
	
	util.merge(resources, ALIASES);
	
	return resources;
}

export default getResources();



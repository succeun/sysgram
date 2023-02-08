import util from './util';

function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		k8s: {
			chaos: {
				ChaosMesh: "chaos-mesh.png",
				LitmusChaos: "litmus-chaos.png",
			},
			clusterconfig: {
				HPA: "hpa.png",
				Limits: "limits.png",
				Quota: "quota.png",
			},
			compute: {
				Cronjob: "cronjob.png",
				Deploy: "deploy.png",
				DS: "ds.png",
				Job: "job.png",
				Pod: "pod.png",
				RS: "rs.png",
				STS: "sts.png",
			},
			controlplane: {
				API: "api.png",
				CCM: "c-c-m.png",
				CM: "c-m.png",
				KProxy: "k-proxy.png",
				Kubelet: "kubelet.png",
				Sched: "sched.png",
			},
			ecosystem: {
				ExternalDns: "external-dns.png",
				Helm: "helm.png",
				Krew: "krew.png",
				Kustomize: "kustomize.png",
			},
			group: {
				NS: "ns.png",
			},
			infra: {
				ETCD: "etcd.png",
				Master: "master.png",
				Node: "node.png",
			},
			network: {
				Ep: "ep.png",
				Ing: "ing.png",
				Netpol: "netpol.png",
				SVC: "svc.png",
			},
			others: {
				CRD: "crd.png",
				PSP: "psp.png",
			},
			podconfig: {
				CM: "cm.png",
				Secret: "secret.png",
			},
			rbac: {
				CRole: "c-role.png",
				CRB: "crb.png",
				Group: "group.png",
				RB: "rb.png",
				Role: "role.png",
				SA: "sa.png",
				User: "user.png",
			},
			storage: {
				PV: "pv.png",
				PVC: "pvc.png",
				SC: "sc.png",
				Vol: "vol.png",
			}
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		k8s: {
			clusterconfig: {
				Limits: "LimitRange",
				HPA: "HorizontalPodAutoscaler",
			},
			compute: {
				Deploy: "Deployment",
				DS: "DaemonSet",
				RS: "ReplicaSet",
				STS: "StatefulSet"
			},
			controlplane: {
				API: "APIServer",
				CM: "ControllerManager",
				KProxy: "KubeProxy",
				Sched: "Scheduler",
			},
			group: {
				NS: "Namespace",
			},
			network: {
				Ep: "Endpoint",
				Ing: "Ingress",
				Netpol: "NetworkPolicy",
				SVC: "Service",
			},
			podconfig: {
				CM: "ConfigMap",
			},
			rbac: {
				CRole: "ClusterRole",
				CRB: "ClusterRoleBinding",
				RB: "RoleBinding",
				SA: "ServiceAccount",
			},
			storage: {
				PV: "PersistentVolume",
				PVC: "PersistentVolumeClaim",
				SC: "StorageClass",
				Vol: "Volume",
			},
		},
	}
	
	///////////////////////////////////////////////////////////////////////////
	
	util.merge(resources, ALIASES);
	
	return resources;
}

export default getResources();



function getResources() {
	var resources = {
		baseUrl: "https://raw.githubusercontent.com/mingrammer/diagrams/master/resources/",
		
		programming: {
			flowchart: {
				Action: "action.png",
				Collate: "collate.png",
				Database: "database.png",
				Decision: "decision.png",
				Delay: "delay.png",
				Display: "display.png",
				Document: "document.png",
				InputOutput: "input-output.png",
				Inspection: "inspection.png",
				InternalStorage: "internal-storage.png",
				LoopLimit: "loop-limit.png",
				ManualInput: "manual-input.png",
				ManualLoop: "manual-loop.png",
				Merge: "merge.png",
				MultipleDocuments: "multiple-documents.png",
				OffPageConnectorLeft: "off-page-connector-left.png",
				OffPageConnectorRight: "off-page-connector-right.png",
				Or: "or.png",
				PredefinedProcess: "predefined-process.png",
				Preparation: "preparation.png",
				Sort: "sort.png",
				StartEnd: "start-end.png",
				StoredData: "stored-data.png",
				SummingJunction: "summing-junction.png",
			},
			framework: {
				Angular: "angular.png",
				Backbone: "backbone.png",
				Django: "django.png",
				Ember: "ember.png",
				Fastapi: "fastapi.png",
				Flask: "flask.png",
				Flutter: "flutter.png",
				Laravel: "laravel.png",
				Micronaut: "micronaut.png",
				Rails: "rails.png",
				React: "react.png",
				Spring: "spring.png",
				Vue: "vue.png",
			},
			language: {
				Bash: "bash.png",
				C: "c.png",
				Cpp: "cpp.png",
				Csharp: "csharp.png",
				Dart: "dart.png",
				Elixir: "elixir.png",
				Erlang: "erlang.png",
				Go: "go.png",
				Java: "java.png",
				Javascript: "javascript.png",
				Kotlin: "kotlin.png",
				Matlab: "matlab.png",
				Nodejs: "nodejs.png",
				Php: "php.png",
				Python: "python.png",
				R: "r.png",
				Ruby: "ruby.png",
				Rust: "rust.png",
				Scala: "scala.png",
				Swift: "swift.png",
				Typescript: "typescript.png",
			},
			runtime: {
				Dapr: "dapr.png",
			},
		},
	};
	
	///////////////////////////////////////////////////////////////////////////
	// https://github.com/mingrammer/diagrams/blob/master/config.py
	
	var ALIASES = {
		"programming": {
			"framework": {
				"Fastapi": "FastAPI"
			},
			"language": {
				"Javascript": "JavaScript",
				"Nodejs": "NodeJS",
				"Php": "PHP",
				"Typescript": "TypeScript"
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



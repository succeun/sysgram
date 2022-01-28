# Generic

Node classes list of [Generic](https://github.com/mingrammer/diagrams/tree/master/resources/generic) provider.

<script>listResources("generic");</script>

```js
ctx.attributes.graphviz.engine = 'fdp'

var providerName = 'generic'

Diagram(providerName, () => {
	Cluster(providerName, () => {
		var provider = diagrams[providerName]
		for (var resourceGroupName in provider) {
			Cluster(providerName + '.' + resourceGroupName, () => {
				var resources = provider[resourceGroupName]
				for (var resourceName in resources) {
					ctx[providerName + '_' + resourceGroupName + '_' + resourceName] = resources[resourceName](resourceName)
				}
			})
			
		}
	})
})
```


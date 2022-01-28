# Nodes

Node is a object representing a node or system component.

## Basic

Node is an abstract concept that represents a single system component object. 

A node object consists of three parts: **provider**, **resource type** and **name**. You may already have seen each part in the previous example.

```js
var EC2 = diagrams.aws.compute.EC2

Diagram("Simple Diagram", () => {
    EC2("web")
})	
```

In above example, the `EC2` is a node of `compute` resource type which provided by `aws` provider.

### Import Syntax

Using Javascript syntax, you can do as follows.

```javascript
var EC2 = diagrams.aws.compute.EC2	// Assign variable 

var { EC2 } = diagrams.aws.compute	// like single import/export

var {EC2, Lambda, Compute, Batch } = diagrams.aws.compute	// like multi import/export

```


You can use other node objects in a similar manner like:

```js
ctx.attributes.graphviz.engine = 'osage'	// changed graphviz engine('dot'(default) -> 'osage')

// aws resources
var { ECS, Lambda } = diagrams.aws.compute
var { RDS, ElastiCache } = diagrams.aws.database
var {ELB, Route53, VPC } = diagrams.aws.network
// ...

// azure resources
var FunctionApps = diagrams.azure.compute.FunctionApps
var BlobStorage = diagrams.azure.storage.BlobStorage
// ...

// alibaba cloud resources
var aliECS = diagrams.alibabacloud.compute.ECS
var ObjectTableStore = diagrams.alibabacloud.storage.ObjectTableStore
// ...

// gcp resources
var { AppEngine, GKE} = diagrams.gcp.compute
var AutoML = diagrams.gcp.ml.AutoML 
// ...

// k8s resources
var { Pod, StatefulSet } = diagrams.k8s.compute
var Service = diagrams.k8s.network.Service
var { PV, PVC, StorageClass } = diagrams.k8s.storage
// ...

// oracle resources
var { VirtualMachine, Container } = diagrams.oci.compute
var { Firewall } = diagrams.oci.network
var { FileStorage, StorageGateway } = diagrams.oci.storage
// ...

Diagram('Node Object Samples', () => {
	ECS(), Lambda(), RDS(), ElastiCache(), ELB(), Route53(), VPC()
	FunctionApps(), BlobStorage()
	aliECS(), ObjectTableStore()
	AppEngine(), GKE(), AutoML()
	Pod(), StatefulSet(), Service(), PV(), PVC(), StorageClass()
	VirtualMachine(), Container(), Firewall(), FileStorage(), StorageGateway()
})
```

You can find all available nodes list in [Here](nodes/onprem).

## Data Flow

### Connect Function
You can represent data flow by connecting the nodes with these functions: `_$()`, `$_()`, `$_$()`  and `_()`.

The connect function below is shaped like an arrow.

* `_$()`: Connect nodes in left to right direction. (like `->`)
* `$_()`: Connect nodes in right to left direction. (like `->`)
* `$_$()`: Connect nodes in both direction. (like `<->`)
* `_()`: Connect nodes in no direction. Undirected. (like `-`)

?> [Diagrams using Python](https://diagrams.mingrammer.com/) used operator overloading, but **Sysgram** was implemented as a function due to JavaScript syntax limitations.

```js
var { EC2 } = diagrams.aws.compute
var { RDS } = diagrams.aws.database
var { ELB } = diagrams.aws.network
var { S3 } = diagrams.aws.storage

Diagram("Web Services", () => {
    // Diagrams using Python: 
	// ELB("lb") >> EC2("web") >> RDS("userdb") >> S3("store")
	ELB("lb")._$(EC2("web"))._$(RDS("userdb"))._$(S3("store"))
	
    // Diagrams using Python : 
	// ELB("lb") >> EC2("web") >> RDS("userdb") << EC2("stat")
	ELB("lb")._$(EC2("web"))._$(RDS("userdb")).$_(EC2("stat"))
	
    // Diagrams using Python: 
	// (ELB("lb") >> EC2("web")) - EC2("web") >> RDS("userdb")
	ELB("lb")._$(EC2("web"))._(EC2("web"))._$(RDS("userdb"))
	
	ELB("lb").$_$(EC2("web"))._(EC2("web")).$_$(RDS("userdb"))
})	
```

!> The order of rendered diagrams is the reverse of the declaration order.

You can change the data flow direction with Graphviz Attributes(`rankdir`). Default is **LR**.

> (`TB`, `BT`, `LR` and `RL`) are allowed. (`T`: Top, `B`: Bottom, `L`: Left, `R`: Right)

```js
var { EC2 } = diagrams.aws.compute
var { RDS } = diagrams.aws.database
var { ELB } = diagrams.aws.network

Diagram("Workers", () => {
    ctx.lb = ELB("lb")
    ctx.db = RDS("events")
    ctx.lb._$(EC2("worker1"))._$(ctx.db)
    ctx.lb._$(EC2("worker2"))._$(ctx.db)
    ctx.lb._$(EC2("worker3"))._$(ctx.db)
    ctx.lb._$(EC2("worker4"))._$(ctx.db)
    ctx.lb._$(EC2("worker5"))._$(ctx.db)
}, {rankdir: 'TB'})
```

## Group Data Flow

Above worker example has too many redundant flows. In this case, you can group nodes into a list so that all nodes are connected to other nodes at once with `Array`.

```js
var { EC2 } = diagrams.aws.compute
var { RDS } = diagrams.aws.database
var { ELB } = diagrams.aws.network

Diagram("Grouped Workers", () => {
    ELB("lb")._$([EC2("worker1"),
                  EC2("worker2"),
                  EC2("worker3"),
                  EC2("worker4"),
                  EC2("worker5")])._$(RDS("events"))
}, {rankdir: 'LR'})
```

### ArrayNode

ArrayNode is a object representing a node array.

However, because there is no connection function in native `Array` object of Javascript, you must use `ArrayNode`.

#### When automatically generated and processed
- When assigned to a variable of Context(`ctx`)
- When assigned as a parameter of the node's connection function (`_$()`, `$_()`, `$_$()`  and `_()`)

If you want to connect with other `Array` creation, you have to wrap it with `ArrayNode` without assigning.

```js
var { EC2 } = diagrams.aws.compute
var { RDS } = diagrams.aws.database
var { ELB } = diagrams.aws.network

Diagram("Grouped Workers", () => {
    ctx.workers = [EC2("worker1"),
                   EC2("worker2")]
	
	ArrayNode([ELB("lb1"), 
			   ELB("lb2")])
	._$(ctx.workers)
	._$([ELB("userdb1"), 
		 ELB("userdb2")])
})
```

?> Sysgrams is supported that can connect two **Arrays**.

```js
var { EC2 } = diagrams.aws.compute
var { RDS } = diagrams.aws.database
var { ELB } = diagrams.aws.network

Diagram("Grouped Workers", () => {
    ArrayNode([ELB("lb1"), 
			   ELB("lb2")])
	._$([EC2("worker1"),
		 EC2("worker2"),
		 EC2("worker3"),
		 EC2("worker4"),
		 EC2("worker5")])
	._$([RDS("events1"), 
		 RDS("events2")])
})
```

## Support with HTML-like labels

Diagram, Cluster, Node, and Edge all are supported with first name parameter. Here is a [Reference link of Graphviz HTML-Like Labels](https://graphviz.org/doc/info/shapes.html#html).

!> **HTML string** should be wrapped in `< `, ` >`, such as `< ... >`. Also, there must be space..

```js
var { EC2 } = diagrams.aws.compute
var { RDS } = diagrams.aws.database
var { ELB } = diagrams.aws.network

Diagram("< <i>Simple Diagram</i> >", () => {
	Cluster("< <u>Simple Cluster</u> >", () => {
		ctx.lb = ELB("< <b>lb</b> >")
		ctx.web1 = EC2('< <i><u>web1</u></i> >')
		ctx.web2 = EC2("< <i><u>web2</u></i> >")
		ctx.db = RDS("< <i>userdb</i> >")
		
		ctx.lb._$(ctx.web1)._$(ctx.db)
		ctx.lb._$(ctx.web2)._$(ctx.db)
	})
}) 
```
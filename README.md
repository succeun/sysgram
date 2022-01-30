# About

**Sysgram.js draw the system architecture using JavaScript.**

[![npm version](https://img.shields.io/npm/v/sysgram.svg?style=flat)](https://www.npmjs.com/package/sysgram)
[![unpkg](https://img.badgesize.io/https://unpkg.com/sysgram/dist/sysgram.js?compression=gzip&label=unpkg&style=flat&cache=false)](https://unpkg.com/sysgram/dist/sysgram.js)
[![unpkg min](https://img.badgesize.io/https:/unpkg.com/sysgram/dist/sysgram.min.js?label=unpkg%20min&compression=gzip&cache=false&style=flat)](https://unpkg.com/sysgram/dist/sysgram.min.js)

It is a Javascript based diagramming tool that renders from javascript syntax to create and modify diagrams dynamically. 


## Sysgram.js currently supports seven major providers and others: 
- [`AWS`](https://succeun.github.io/sysgram/#/nodes/aws)
- [`Azure`](https://succeun.github.io/sysgram/#/nodes/azure)
- [`GCP`](https://succeun.github.io/sysgram/#/nodes/gcp)
- [`Kubernetes`](https://succeun.github.io/sysgram/#/nodes/k8s)
- [`Alibaba Cloud`](https://succeun.github.io/sysgram/#/nodes/alibabacloud)
- [`Oracle Cloud`](https://succeun.github.io/sysgram/#/nodes/ibmcloud)
- [`IBM Cloud`](https://succeun.github.io/sysgram/#/nodes/oci)
- [`On-Premise`](https://succeun.github.io/sysgram/#/nodes/onprem) 
- [`Programming Languages`](https://succeun.github.io/sysgram/#/nodes/programming?id=programminglanguage)
- [`Frameworks`](https://succeun.github.io/sysgram/#/nodes/programming?id=programmingframework)
- [`Programs`](https://succeun.github.io/sysgram/#/nodes/program).
 
# Installation

## CDN

```
https://unpkg.com/sysgram@<version>/dist/sysgram.min.js
```

To select a version:

Replace `<version>` with the desired version number.

Latest Version: [https://unpkg.com/sysgram/dist/sysgram.min.js](https://unpkg.com/sysgram/dist/sysgram.min.js)



## Installing

It can insert a `script` tag with an absolute address and a `sysgram` call into the HTML like so:

```html
<!-- sysgram (latest) -->
<script src="https://unpkg.com/sysgram/dist/sysgram.min.js"></script>
<script>
function drawSample() {
    var EC2 = diagrams.aws.compute.EC2

	Diagram("Simple Diagram", function() {
		EC2("web")
	})
}
sysgram.initialize({startOnLoad:true});
</script>

<div class="sysgram" data-sysgram-function="drawSample"></div>
```

Doing so will command the sysgram parser to look for the `<div>` tags with `class="sysgram"`. 

From these tags sysgram will try to read the diagram definitons and render them into `<svg>`.

Or 함수를 전달하여 `<div>`와 같은 특정 태그로 결과를 나타낼 수 있습니다.
```html
<script src="../dist/sysgram.bundle.js"></script>
<script>
    function drawSample() {
        var EC2 = diagrams.aws.compute.EC2

        Diagram("Simple Diagram", function() {
            EC2("web")
        })
    }
    window.addEventListener('DOMContentLoaded', function(event) {
        sysgram.initWithCode(drawSample, '.sample');
    });
</script>

<div class="sample"></div>
```

When developing locally, you must have a local web server due to [hpcc-js/wasm](https://www.npmjs.com/package/@hpcc-js/wasm). In this case, you can load the server as follows.

```bash
npm run dev
```
After executing this command, open [http://localhost:4000/examples/](http://localhost:4000/examples/) in the browser.


# basic.html

Below is the most basic and simple example html.

```html
<!DOCTYPE html>
<html>
<head>
	<!-- sysgram (latest) -->
	<script src="https://unpkg.com/sysgram/dist/sysgram.min.js"></script>
	<script>sysgram.initialize({startOnLoad:true});</script>
<head>
<body>
	<div class="sysgram">
var EC2 = diagrams.aws.compute.EC2

Diagram("Simple Diagram", function() {
	EC2("web")
})
	</div>
</body>
</html>
```


# Example Diagram

## Simple Diagram

```javascript
var EC2 = diagrams.aws.compute.EC2
var RDS = diagrams.aws.database.RDS
var ELB = diagrams.aws.network.ELB

Diagram("Web Service", function() {
    ELB("lb")._$(EC2("web"))._$(RDS("userdb"))
})
```
![Web Service](https://succeun.github.io/sysgram/images/simple_diagram.png)

## Complex Diagram

```javascript
var { BigQuery, Dataflow, PubSub } = diagrams.gcp.analytics
var {AppEngine, Functions } = diagrams.gcp.compute
var BigTable = diagrams.gcp.database.BigTable
var IotCore = diagrams.gcp.iot.IotCore
var GCS = diagrams.gcp.storage.GCS

Diagram("Message Collecting", () => {
    ctx.pubsub = PubSub("pubsub")
    
    Cluster("Source of Data", () => {
        ArrayNode([IotCore("core1"),
                   IotCore("core2"),
                   IotCore("core3")])._$(ctx.pubsub)
    })

    Cluster("Targets", () => {
        Cluster("Data Flow", () => {
            ctx.flow = Dataflow("data flow")
        })
        
        Cluster("Data Lake", () => {
            ctx.flow._$([BigQuery("bq"),
                         GCS("storage")])
        })

        Cluster("Event Driven", () => {
            Cluster("Processing", () => {
                ctx.flow._$(AppEngine("engine"))._$(BigTable("bigtable"))
            })

            Cluster("Serverless", () => {
                ctx.flow._$(Functions("func"))._$(AppEngine("appengine"))
            })
        })
    })
    ctx.pubsub._$(ctx.flow)
})
```

![Message Collecting](https://succeun.github.io/sysgram/images/complex_diagram.png)

**Examples can be found in** [examples](https://succeun.github.io/sysgram/#/getting-started/examples), [advanced examples](https://succeun.github.io/sysgram/#/getting-started/advanced_examples)

## Credits

Many thanks to the [d3](http://d3js.org/) and [d3-graphviz](https://github.com/magjac/d3-graphviz) projects for providing the graphical layout and drawing libraries!

Thanks also to the [Diagrams using Python](https://diagrams.mingrammer.com/) project for usage of the python syntax. 

Thanks to [mingrammer(MinJae Kwon)](https://github.com/mingrammer) for inspiration and starting point for developing.
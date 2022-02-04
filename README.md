# About

**Sysgram.js draw the system architecture using JavaScript.**

[![npm version](https://img.shields.io/npm/v/sysgram.js.svg?style=for-the-badge&logo=Vercel&labelColor=000)](https://www.npmjs.com/package/sysgram.js)
[![License](https://img.shields.io/npm/l/sysgram.js.svg?style=for-the-badge&labelColor=000000)](https://github.com/succeun/sysgram.js/blob/main/LICENSE)

It is a Javascript based diagramming tool that renders from javascript syntax to create and modify diagrams dynamically. 



## Supported Providers: 

![aws provider](https://img.shields.io/badge/AWS-orange?logo=amazon-aws&color=ff9900) 
![azure provider](https://img.shields.io/badge/Azure-orange?logo=microsoft-azure&color=0089d6) 
![gcp provider](https://img.shields.io/badge/GCP-orange?logo=google-cloud&color=4285f4) 
![ibm provider](https://img.shields.io/badge/IBM-orange?logo=ibm&color=052FAD) 
![kubernetes provider](https://img.shields.io/badge/Kubernetes-orange?logo=kubernetes&color=326ce5) 
![alibaba cloud provider](https://img.shields.io/badge/AlibabaCloud-orange?logo=alibaba-cloud&color=ff6a00) 
![oracle cloud provider](https://img.shields.io/badge/OracleCloud-orange?logo=oracle&color=f80000) 
![openstack provider](https://img.shields.io/badge/OpenStack-orange?logo=openstack&color=da1a32) 
![firebase provider](https://img.shields.io/badge/Firebase-orange?logo=firebase&color=FFCA28) 
![digital ocean provider](https://img.shields.io/badge/DigitalOcean-0080ff?logo=digitalocean&color=0080ff)
![elastic provider](https://img.shields.io/badge/Elastic-orange?logo=elastic&color=005571) 
![outscale provider](https://img.shields.io/badge/OutScale-orange?color=5f87bf) 
![on premise provider](https://img.shields.io/badge/OnPremise-orange?color=5f87bf) 
![generic provider](https://img.shields.io/badge/Generic-orange?color=5f87bf) 
![programming provider](https://img.shields.io/badge/Programming-orange?color=5f87bf) 
![saas provider](https://img.shields.io/badge/SaaS-orange?color=5f87bf)



# Installation

## CDN

```
https://unpkg.com/sysgram.js@<version>/dist/sysgram.bundle.min.js
https://cdn.jsdelivr.net/gh/succeun/sysgram.js@<version>/dist/sysgram.bundle.min.js
```

To select a version:

Replace `<version>` with the desired version number.

Latest Version: 
- [https://unpkg.com/sysgram.js/dist/sysgram.bundle.min.js](https://unpkg.com/sysgram.js/dist/sysgram.bundle.min.js)
- [https://cdn.jsdelivr.net/gh/succeun/sysgram/dist/sysgram.bundle.min.js](https://cdn.jsdelivr.net/gh/succeun/sysgram.js/dist/sysgram.bundle.min.js)



## Installing

It can insert a `script` tag with an absolute address and a `sysgram` call into the HTML like so:

```html
<!-- sysgram (latest) -->
<script src="https://unpkg.com/sysgram.js/dist/sysgram.bundle.min.js"></script>
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

Or you can displayed a result with `<div>` tags from javascript function.

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
	<script src="https://unpkg.com/sysgram.js/dist/sysgram.bundle.min.js"></script>
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
![Web Service](https://succeun.github.io/sysgram.js/images/simple_diagram.png)

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

![Message Collecting](https://succeun.github.io/sysgram.js/images/complex_diagram.png)

**Examples can be found in** [examples](https://succeun.github.io/sysgram.js/#/getting-started/examples), [advanced examples](https://succeun.github.io/sysgram.js/#/getting-started/advanced_examples)



## Credits

Many thanks to the [d3](http://d3js.org/) and [d3-graphviz](https://github.com/magjac/d3-graphviz) projects for providing the graphical layout and drawing libraries!

Thanks also to the [Diagrams using Python](https://diagrams.mingrammer.com/) project for usage of the python syntax. 

Thanks to [mingrammer(MinJae Kwon)](https://github.com/mingrammer) for inspiration and starting point for developing.
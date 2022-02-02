# Advanced Examples

Here are some more advanced examples.

## Company Organization Chart (with HTML-like labels)

```js
ctx.attributes.subgraph.labeljust = 'c'

var Man1 = (name, attrs) => Node(name, attrs, "images/man1.png")
var Woman1 = (name, attrs) => Node(name, attrs, "images/woman1.png")

var Man2 = (name, attrs) => Node(name, attrs, "images/man2.png");
var Woman2 = (name, attrs) => Node(name, attrs, "images/woman2.png");

var Man3 = (name, attrs) => Node(name, attrs, "images/man3.png");
var Woman3 = (name, attrs) => Node(name, attrs, "images/woman3.png");

var Man4 = (name, attrs) => Node(name, attrs, "images/man4.png");
var Woman4 = (name, attrs) => Node(name, attrs, "images/woman4.png");

Diagram("Organization", function() {
	Cluster("CEO", function() {
		ctx.ceo = Woman4("Roxy")
    }, {fontcolor: "orange"})
  	
	Cluster("< <i>Operation Team</i> >", function() {
		ctx.team1 = Man1("Hugh")
		ctx.team1.$_(Woman1("Belle"))
		ctx.team1.$_(Man1("Bruno"))
		ctx.team1.$_(Man3("Eric"))
	}, {fontcolor: "#FF0000", tooltip: "Operation Team"})
  
	Cluster("< <i>Technical Team</i> >", function() {
		ctx.team2 = Woman2("Judith")
		ctx.team2.$_(Man2("Tom"))
		ctx.team2.$_(Man1("Andrew"))
	}, {fontcolor: "blue", tooltip: "Technical Team"})

	Cluster("Commercial Team", function() {
		ctx.team3 = Man3("Leonard")
		ctx.team3.$_(Woman3("Calla"))
		ctx.team3.$_(Man2("Mac"))
		ctx.team3.$_(Woman1("Ruby"))
	}, {fontcolor: "green"})

	Cluster("Human Resources Team", function() {
		ctx.team4 = Man4("Sam")
		ctx.team4.$_(Woman4("Silly"))
		ctx.team4.$_(Woman2("Maggie"))
	})

	ctx.ceo.$_([ctx.team1, ctx.team2, ctx.team3, ctx.team4])
  
}, {rankdir: "TB"})	
```

## Build Cloud Native Applications (with Advanced Edge)

```js
ctx.attributes.edge.fontcolor = "#0079d4"
ctx.attributes.edge.fontsize = "40px"
ctx.attributes.edge.style = "dashed"

var { MicrosoftEdge } = diagrams.program.browser
var { CDNProfiles} = diagrams.azure.network
var { KubernetesServices, FunctionApps } = diagrams.azure.compute
var { CosmosDb, DatabaseForPostgresqlServers, CacheForRedis } = diagrams.azure.database
var { ApplicationInsights } = diagrams.azure.devops
var { NotificationHubs } = diagrams.azure.mobile
var { AnalysisServices } = diagrams.azure.analytics 
var { PowerBI } = diagrams.onprem.analytics

Diagram("Build cloud native applications", () => {
    ctx.browser = MicrosoftEdge("Browser")
	ctx.AKS = KubernetesServices("Azure Kubernetes Service")
	ctx.Insight = ApplicationInsights("Application Insights")
	ctx.AF = FunctionApps("Azure Functions")
	ctx.ASA = AnalysisServices("Azure Synapse Analytics")
	ctx.CosDB = CosmosDb("Azure Cosmos DB")
	
	Cluster("", () => {
		ctx.Postgre = DatabaseForPostgresqlServers("Azure Database for PostgreSQL")
		ctx.AKS.edge("②")._$(ctx.Postgre)
		ctx.AKS.edge("③").$_$(CacheForRedis("Azure Cache for Redis"))
	})
	
	ctx.browser.edge("①")._$(CDNProfiles("Content Delivery Network"))
	ctx.browser._$(ctx.AKS)
	ctx.AKS.edge("⑧")._$(ctx.CosDB)
	ctx.AKS.edge("⑦")._$(ctx.Insight)
	ctx.Insight.edge("⑦").$_(ctx.AF)
	ctx.AF.edge("⑤")._$(NotificationHubs("Notification Hubs"))
	ctx.Postgre.edge("④")._$(ctx.AF)
	ctx.Postgre.edge("⑥")._$(ctx.ASA)
	ctx.ASA.edge("⑩")._$(PowerBI("Power BI"))
	ctx.CosDB.edge("⑨")._$(ctx.ASA)
  
}, {rankdir: "LR", pad: "0.5", nodesep: "1", ranksep: "2", splines: "curved"})
```

## Social media (including URL)

```js

ctx.attributes.graphviz.engine = 'fdp'

var {Flickr, Facebook, Tumblr, Twitter, LinkedIn, Instagram, Reddit} = diagrams.supertinyicons.socialmedia
var {Pinterest, VK, Mastodon, Imgur, Slack, Devto, Goodreads, TikTok} = diagrams.supertinyicons.socialmedia

Diagram("Social Media", function() {
	Flickr({URL: "https://www.flickr.com"})
	Facebook({URL: "https://www.facebook.com"})
	Tumblr({URL: "https://www.tumblr.com"})
	Twitter({URL: "https://www.twitter.com"})
	LinkedIn({URL: "https://www.linkedin.com"})
	Instagram({URL: "https://www.instagram.com"})
	Reddit({URL: "https://www.raddit.com"})
	Pinterest({URL: "https://www.pinterest.com"})
	VK({URL: "https://vk.com"})
	Mastodon({URL: "https://joinmastodon.org"})
	Imgur({URL: "https://imgur.com"})
	Slack({URL: "https://www.slack.com"})
	Devto({URL: "https://https://dev.to"})
	Goodreads({URL: "https://www.goodreads.com"})
	TikTok({URL: "https://www.tiktok.com"})
})
```

## AWS Case Study (Using DummyCluster)

?> `DummyCluster` is invisible, but is a virtural cluster for grouping.

```js
var { Lambda, EC2 } = diagrams.aws.compute
var { CloudFront, ELB, VpnGateway, VpnConnection  } = diagrams.aws.network
var { SimpleStorageServiceS3 } = diagrams.aws.storage
var { Elasticache, Aurora } = diagrams.aws.database
var { GenericDatabase, InternetAlt1 } = diagrams.aws.general

Diagram("Social Media", function() {
	ctx.CF = CloudFront("Amazon\nCloudFront", {height: 2.5})
	Lambda("AWS\nLamda@Edge", {height: 2.5}).e({constraint: true}).$_$(ctx.CF)
	Cluster("  🏪 AWS Clound", () => {
		ctx.S3 = SimpleStorageServiceS3("Amazon S3")
		ctx.lambda = Lambda("Amazon\nLambda", {height: 2.5})
		ctx.CF._$(ctx.S3)
		ctx.S3._$(ctx.lambda)
		
		Cluster("  📗 VPC", () => {
			ctx.ELB = ELB("ELB")
			ctx.CF.e({constraint: true})._$(ctx.ELB)
			DummyCluster(()=> {
				Cluster("  📗 Web subsets", ()=> {
					ctx.FSG = EC2("Front Server Group")
					ctx.ELB.e({constraint: false})._$(ctx.FSG)
				})
				
				Cluster("  📗 API subsets", ()=> {
					ctx.ASG = EC2("API Server Group")
					ctx.ELB._$(ctx.ASG)
					ctx.ASG.e({constraint: false})._$(ctx.FSG)
				})
			})
			
			DummyCluster(()=> {
				ctx.MDB = EC2("mongoDB on EC2")
				ctx.Redis = Elasticache("Redis")
				ctx.Aurora = Elasticache("Amazon Aurora")
			})
			
			ctx.lambda.$_$(ctx.MDB)
			
			ctx.ASG._$(ctx.MDB)
			ctx.ASG._$(ctx.Redis)
			ctx.ASG._$(ctx.Aurora)
			
			ctx.Gateway = VpnGateway("VPN Gateway")
			ctx.MDB._$(ctx.Gateway)
			ctx.Redis._$(ctx.Gateway)
			ctx.Aurora._$(ctx.Gateway)
		})
	})
		
	ctx.Connection = VpnConnection("VPN Connection")
	ctx.Gateway._$(ctx.Connection)
	
	Cluster("  🏥 On Premise\nIDC", () => {
		ctx.DBMS = GenericDatabase("DBMS")
		ctx.DMT = InternetAlt1("Data Mgiration Tools")
	})
	ctx.Connection._$(ctx.DBMS)
	ctx.Connection._$(ctx.DMT)
	ctx.DBMS.e({constraint: false}).$_$(ctx.DMT)
})	
```

## Alibaba, Cloud E-Learning VOD Solution

```js
var { ECS, ServerLoadBalancer } = diagrams.alibabacloud.compute
var { OSS } = diagrams.alibabacloud.storage
var { Cdn } = diagrams.alibabacloud.network
var { Rack } = diagrams.generic.compute	// Media Transcoding
var { RDS } = diagrams.alibabacloud.database
var { Usericon } = diagrams.azure.general

Diagram("Video On Demand (VOD) solution for E-Learning", function() {
    ctx.User = Usericon("User")
	Cluster("ECS: Video Uploading", () => {
		ctx.SLB = ServerLoadBalancer("Server Load Balancer")
		ctx.VU = ECS("Video Uploading")
	})
  
  	Cluster("Video Broadcasing", () => {
      	ctx.VFS = OSS("OSS: Video File Storage")
		ctx.MT = Rack("Media Transcoding")
		ctx.DP = ECS("ECS: Data Processing")
      	ctx.ID = RDS("RDS: Index DB")
      	ctx.CDN = Cdn("CDN")
		ctx.SLB2 = ServerLoadBalancer("Server Load Balancer")
    })
  
  	ctx.User2 = Usericon("User")
	
	Cluster("Management", () => {
		ctx.SLB3 = ServerLoadBalancer("Server Load Balancer")
		ctx.USM = ECS("ECS: User & System Management")	
		ctx.SD = RDS("RDS: System DB")
    })
  
  	ctx.User._$(ctx.SLB)._$(ctx.VU)._$(ctx.VFS)
  	ctx.VFS.e({constraint: false})._$(ctx.MT)
  	ctx.VU.e({constraint: false})._$(ctx.ID)
  	ctx.MT.e({constraint: false})._$(ctx.DP)
  	ctx.ID.e({constraint: false})._$(ctx.DP)
  	ctx.VFS._$(ctx.CDN)
  	ctx.DP._$(ctx.SLB2)
  	ctx.CDN._$(ctx.User2)
    ctx.SLB3.$_(ctx.USM).$_(ctx.SD)
  	ctx.User2.$_(ctx.SLB3)
  	ctx.SLB2.e({constraint: false})._$(ctx.User2)
})
```

## AWS, Smart Products Platform
```js
ctx.attributes.digraph.nodesep = 1.2
ctx.attributes.digraph.ranksep = 1
			
var { IotAlexaEnabledDevice, IotCore, IotDeviceDefender, IotAnalytics } = diagrams.aws.iot
var { Lambda } = diagrams.aws.compute
var { SNS } = diagrams.aws.integration
var { Quicksight } = diagrams.aws.analytics
var { Dynamodb } = diagrams.aws.database
var { SimpleStorageServiceS3 } = diagrams.aws.storage
var { CloudFront, APIGateway } = diagrams.aws.network
var { Amplify } = diagrams.aws.mobile
var { Cognito } = diagrams.aws.security
var { Users } = diagrams.onprem.client

Diagram("Video On Demand (VOD) solution for E-Learning", function() {
    Cluster("CONNECTED DEVICES", () => {
		ctx.Devices = [IotAlexaEnabledDevice(), 
					   IotAlexaEnabledDevice(), 
					   IotAlexaEnabledDevice()]
    })
	
  	DummyCluster(() => {
		Cluster("COMMAND STATUS", () => {
			ctx.CS = Lambda()
		})

		Cluster("", () => {
			ctx.IC = IotCore("IoT Core")
		})

		Cluster("JUST-IN-TIME REGISTRATION", () => {
			ctx.JITR = Lambda()
		})
    })
  
  	DummyCluster(() => {
		DummyCluster(() => {
			Cluster("DEVICE DEFENDER", () => {
				ctx.IDD = IotDeviceDefender("IoT Device Defender")
				ctx.IDD._$(SNS())
			})

			Cluster("TELEMETRY ANALYTICS PIPELINE", () => {
				ctx.IA = IotAnalytics("IoT Analytics")
				ctx.IA._$(Quicksight())
			})

			Cluster("MESSAGE PROXY", () => {
				ctx.MP = Lambda()
			})

			Cluster("PRODUCT DATA", () => {
				ctx.PD = Dynamodb()
			})

			Cluster("NOTIFICATIONS", () => {
				ctx.NF = Lambda()
				ctx.NF._$(SNS())
			})
		})

		DummyCluster(() => {
			Cluster("WEB CONSOLE", () => {
				ctx.S3 = SimpleStorageServiceS3("S3")
				ctx.AMP = Amplify()
				ctx.CF = CloudFront()
				ctx.S3.$_(ctx.CF)
				ctx.S3.e({constraint: false})._$(ctx.AMP)
			})

			Cluster("AUTHENTICATION", () => {
				ctx.AG = APIGateway("API Gateway")
				ctx.AU = Lambda()
				ctx.AG.$_(Cognito())
				ctx.AG.e({constraint: false})._$(ctx.AU)
			})
		})
    })
	
	ctx.Users = Users()
	
	ctx.Devices._$(ctx.IC)
  	ctx.CS.e({constraint: false}).$_$(ctx.IC)
  	ctx.IC.e({constraint: false}).$_$(ctx.JITR)
  	ctx.IC.$_$(ctx.IDD)
  	ctx.IC.$_$(ctx.IA)
  	ctx.IC.$_$(ctx.MP)
  	ctx.MP.$_$(ctx.PD)
  	ctx.MP.e({constraint: false}).$_$(ctx.NF)
	
  	
	ctx.AMP.e({constraint: false}).$_$(ctx.AG)
  	ctx.IC.e({constraint: false}).$_$(ctx.AU)
  	ctx.PD.$_$(ctx.AU)
	ctx.CF.$_(ctx.Users)
})
```

## Connection between Group Nodes and Group Nodes
```js
ctx.attributes.digraph.splines = 'spline'
		
var { EC2 } = diagrams.aws.compute
var { RDS } = diagrams.aws.database
var { ELB } = diagrams.aws.network

Diagram("Grouped Workers", () => {
    ArrayNode([ELB("lb1"), ELB("lb2")])._$([EC2("worker1"),
                  EC2("worker2"),
                  EC2("worker3"),
                  EC2("worker4"),
                  EC2("worker5")])//._$([RDS("events1"), RDS("events2")])
}, {rankdir: 'TB'})
```

## Repeat Custom Nodes
```js
ctx.attributes.digraph.splines = 'line'    // Changed graphviz digraph splines

var WEB = (name, attrs) => Node(name, attrs, "./images/web.png")
var WAS = (name, attrs) => Node(name, attrs, "./images/was.png")
var DB = (name, attrs) => Node(name, attrs, "./images/database.png")

Diagram("Repeat Custom", () => {
    Cluster("Web Servers", () => {
        ctx.webs = [WEB("web #1"), WEB("web #2")]
    })
    
    Cluster("WAS Servers", () => {
        ctx.wass = [WAS("WAS #1"), WAS("WAS #2")]
    })
    
    Cluster("DB Servers", () => {
        ctx.dbs = [DB("DB #1"), DB("DB #2")]
    })
    
  ctx.webs._$(ctx.wass)._$(ctx.dbs)
  
}, {rankdir: "LR" })
```

## Cluster Connect
```js
ctx.attributes.verbose = true

var APIGateway = diagrams.aws.network.APIGateway
var Aurora = diagrams.aws.database.Aurora
var Pod = diagrams.k8s.compute.Pod

Diagram("Broker Consumers", function() {
	Cluster("Consumers Wrapper", function() {
		Cluster("Consumers", function() {
			ctx.consumers = [
				Pod("worker"),
				Pod("worker"),
				Pod("worker")]
		})
	})
    ctx.gateway = APIGateway("Gateway")

    ctx.gateway.e({lhead: true})._$(ctx.consumers).e({ltail: true})._$(Aurora("Database"))
})
```

## Insurance registration process
```js
ctx.attributes.graphviz.engine = 'neato'
ctx.attributes.digraph.inputscale = 0.9
ctx.attributes.digraph.splines = 'line'
ctx.attributes.node.height = 1

// ctx.attributes.verbose = true	// print log
			
var { Database, Action, StoredData, MultipleDocuments } = diagrams.programming.flowchart

Diagram("가입설계/청약 처리 프로세스", () => {
    Cluster("", () => {
        ctx.info1 = [Database("당사자정보", {pos:"0,0!"}), 
                    Database("계약정보", {pos:"2,0!"}), 
                    Database("담보정보", {pos:"4,0!"})]
    })
  
    Custom("설계건 참조", {pos:"3.5,-0.5!"})
    
    ctx.act1 = Action("가입설계/청약 정보", {pos:"2,-1.5!"})
    ctx.act2 = Action("가입설계/청약 정보 입력", {pos:"2,-3!"})
    
    
    ctx.sd1 = StoredData("상품규칙", {pos:"0,-2!"})
  
    ctx.act3 = Action("상해 담보 사항", {pos:"4,-2.5!"})
    ctx.act4 = Action("재물 담보 사항", {pos:"4,-3.5!"})
      
    Cluster("", () => {
        ctx.info2 = [Database("장기작업", {pos:"6,-2!"}), 
                    Database("담보정보", {pos:"6,-3!"}), 
                    Database("특약정보", {pos:"6,-4!"}), 
                    Database("건축물정보", {pos:"7,-2!"}), 
                    Database("동산정보", {pos:"7,-3!"})]
    })
    ctx.act5 = Action("적립보험료/합계보험료", {pos:"2,-5.5!"})
    
    Cluster("", () => {
      ctx.info3 = [Database("알릴의무", {pos:"-1,-4!"}), 
                    Database("인수지침", {pos:"-1,-5!"}), 
                    Database("인수유의자", {pos:"-1,-6!"}), 
                    Database("수익자", {pos:"0,-4!"}), 
                    Database("취급자", {pos:"0,-5!"})]
    })
    Cluster("", () => {
        ctx.info4 = [Action("환급금 안내", {pos:"6,-5!"}), 
                    Database("보험료Table", {pos:"6,-6!"}), 
                    Database("준비금Table", {pos:"7,-5!"}), 
                    Database("재발행서류", {pos:"7,-6!"})]
    })
    ctx.act6 = Action("요청승인/심사업무", {pos:"2,-7!"})
    
    Cluster("", () => {
        ctx.info5 = [Database("결재라인", {pos:"-1,-7!"}), 
                    Database("특인 정보", {pos:"0,-7!"}), 
                    Database("진단정보", {pos:"0,-8!"})]
    })
    ctx.act7 = Action("설계정보 보관", {pos:"2,-9!"})
  
    ctx.info6 = Database("부담보 정보", {pos:"4,-8!"})
  
    ctx.doc1 = MultipleDocuments("수납 및 증권 발행", {pos:"5,-9!"})
    
    Cluster("", () => {
        ctx.info7 = [Database("당사자정보", {pos:"0,-10.5!"}), 
                    Database("계약정보", {pos:"1,-10.5!"}), 
                    Database("담보정보", {pos:"2,-10.5!"}), 
                    Database("보험료정보", {pos:"3,-10.5!"}), 
                    Database("출수납정보", {pos:"4,-10.5!"}), 
                    Database("EDMS", {pos:"5,-10.5!"})]
    })
  
    ctx.info1._$(ctx.act1)._$(ctx.act2)._$(ctx.act5)._$(ctx.act6)._$(ctx.act7)._$(ctx.info7)
    ctx.sd1._$(ctx.act2)
    ctx.info2._$(ctx.act3)
    ctx.info2._$(ctx.act4)
    ctx.act3._$(ctx.act2)
    ctx.act4._$(ctx.act2)
    ctx.info3._$(ctx.act5)
    ctx.info4._$(ctx.act5)
    ctx.info5._$(ctx.act6)
    ctx.act7._$(ctx.doc1)
    ctx.info6._$(ctx.act7)
  
    Custom("　", {pos:"2,-11!"})
})
```
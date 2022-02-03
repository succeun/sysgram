

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

It can insert a `script` tag with an absolute address and a `sysgram.js` call into the HTML like so:

```html
<!-- sysgram (latest) -->
<script src="https://unpkg.com/sysgram.js/dist/sysgram.bundle.min.js"></script>
  
<script>sysgram.initialize({startOnLoad:true});</script>
```

Doing so will command the sysgram parser to look for the `<div>` tags with `class="sysgram"`. 

From these tags sysgram will try to read the diagram definitons and render them into `<svg>`.

```html
<div class="sysgram">
	var EC2 = diagrams.aws.compute.EC2

	Diagram("Simple Diagram", function() {
		EC2("web")
	})
</div>
```

 **Examples can be found in** [Other examples](getting-started/examples)




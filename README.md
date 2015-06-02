# high-impress

A HTML5 & CSS3 presentation framework based on the great impress.js that utilizes the power of webcomponents to bring you easy to build presentations.

While impress.js takes a more puristic approach with only basic functions and clean, well documented code, it is somewhat difficult to use if you are not a web designer.   
high-impress on the other hand aims to be easy to use, even if you are new to web technologies. It also tries to bring all the functionality you need, while also remaining expendable for personal customisations.

> You can find the full documentation on how to use high-impress in the [Wiki](https://github.com/no0x9d/high-impress/wiki)

## Browser compatibility

As of now, only the newest Version of Chrome and Firefox are supported. The code uses polymer 1.0 to build the web components, so may also work in other browsers but it's not tested.

### Firefox quirks

Because Firefox doesn't have native HTML import support you have to load the webcomponents polyfill and the high-impress helper library before importing high-impress itself.

```html
<!-- 1. Load platform support before any code that touches the DOM. -->
<script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
<script src="bower_components/high-impress/libs/helper.js"></script>
<!-- 2. Load the component using an HTML Import -->
<link rel="import" href="bower_components/high-impress/high-impress.html">
```

## Get high-impress
### Get the template with batteries included (recommend)
There is a starter template with all dependencies pre-installed, so you can instantly start writing. It also contains samples and a default css style.

It is a git repository, so you can simply clone it from your command line with
```
$ git clone https://github.com/no0x9d/high-impress-starter.git
```
or download it from [here](https://github.com/no0x9d/high-impress-starter/archive/master.zip).
###Get bower component
```
$ bower install high-impress
```
The code for a minimal HTML page, which creates a presentation with just a single step, would look like this.
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    <script src="bower_components/high-impress/libs/helper.js"></script>
    <link rel="import" href="bower_components/high-impress/high-impress.html">
</head>
<body>
    <hi-presentation autoPosition>
        <hi-step>
            Hello World!
        </hi-step>
    </hi-presentation>
</body>
</html>
```

## View your presentation
Because most modern browser have restrictions, when opening files directly from the filesystem I recommend to open your presentation from a local webserver. There are many simple methods to do this depending on your system.
All methods require you to have a command line open in your presentation directory.

### Node.js or iojs
When you use my **[high-impress-starter](https://github.com/no0x9d/high-impress-starter)** template, you can use the included [node-static](https://www.npmjs.com/package/node-static) module to run your presentation with

```
$ npm start
```

### Python 2.x
```
$ python -m SimpleHTTPServer
```


### Python 3.x
```
$ python -m http.server
```

Now view your presentation at [http://localhost:8080](http://localhost:8080)

## Build your presentation

Until I update the README, please consult the [Beginners guide](https://github.com/no0x9d/high-impress/wiki/Beginners-Guide).

## About the name

The code is based on impress.js, so the second part is obvious. Now for the first part. As I described in the beginning it could be cumbersome to use impress.js, so I wanted to build a higher level of abstraction around it, to support different use cases. Also at the time I thought about creating this library I had a ride on a german thrill ride with the same name, which was quite a fun, so I stick with this name.
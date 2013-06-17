Eve-databrowser
===============

A simple web client to browse the data served by an [Eve](https://github.com/nicolaiarocci/eve) API. This tool is intended to help data science teams give their stakeholders a feel for available data during the early stages of analysis. The client is implemented in AngularJS using the [Restangular](https://github.com/mgonto/restangular) library.

### Using as a Flask blueprint

1. Clone this repo into your Eve application
2. Point the client at your Eve API (see the configuration section below)
3. Activate the blueprint in your Flask launch script (see `example/run.py`)
4. Restart your application and access the `url_prefix` you configured for the blueprint

Example screenshot:
![Sample output](http://charonex.com/img/databrowser-example.png)

### Using elsewhere

Disclaimer: I haven't tried this. All client files are static, so it should be possible to serve the client through any webserver. You'd need to have your environment configured to allow CORS. I haven't tried this, but if you get it working let me know and I'll update the documentation.

### Configuration

`eve_databrowser/static/js/app.js` tells the client where to find your Eve API. Open that file and find the line with `RestangularProvider.setBaseUrl`. This method can accept either relative or absolute URIs. If you're using an absolute URI with a port, please see [this Restangular FAQ entry](https://github.com/mgonto/restangular#when-i-set-baseurl-with-a-port-its-stripped-out) on properly escaping the port.

Example: if your Eve settings file has `URL_PREFIX = 'api'`, you would use:
    
    RestangularProvider.setBaseUrl('/api');

### Example directory credits

`example/client.py` is from Nicola Iarocci's [eve-demo-client](https://github.com/nicolaiarocci/eve-demo-client) repo. I've modified it slightly to insert more entries into the works collection, to show off the paging in the data browser.

`example/settings.py` is from Nicola Iarocci's [eve-demo](https://github.com/nicolaiarocci/eve-demo) repo. I've added a `URL_PREFIX` setting.

### License

Released under the [MIT License](http://www.opensource.org/licenses/MIT).

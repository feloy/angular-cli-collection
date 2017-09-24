// Load zone.js for the server.
require('zone.js/dist/zone-node');

// Import renderModuleFactory from @angular/platform-server.
var renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
var AppServerModuleNgFactory = require('./dist-server/main.bundle').AppServerModuleNgFactory;

// Load the index.html file.
var index = require('fs').readFileSync('./dist/index.html', 'utf8');

if (process.argv.length != 3) {
    process.stdout.write("Usage: node " + process.argv[1] + " <url>\n");
    process.exit();
}

const args = process.argv.slice(2);

// Render to HTML and log it to the console.
renderModuleFactory(AppServerModuleNgFactory, {document: index, url: args[0]}).then(html => console.log(html));

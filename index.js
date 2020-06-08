var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
	name: 'Bitfreighter',
	description: 'Bitfreighter Agent',
	script: 'C:\\Bitfreighter\\node_modules\\bitfreighter_agent\\index.js',
	nodeOptions: [
		'--harmony',
		'--max_old_space_size=4096'
	]
	//, workingDirectory: '...'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
	svc.start();
});

svc.install();

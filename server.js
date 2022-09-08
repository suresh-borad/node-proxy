const app = require('./src/app');

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
	console.log(`API listening on port ${port}`);
});

server.timeout = 300000;

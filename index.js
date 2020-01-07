const express = require('express');
require('./build/linter');

const app = express();

app.use('/static', express.static(`${__dirname}/build`));

app.get('/index|product', (req, res) => {
	const pageHTML = `
    <!doctype html>
    <html>
        <head>
            
        </head>
        <body>
            <script type="text/javascript" src="/static/linter.js"></script>
        </body>
    </html>`

	res.send(pageHTML);
});

app.listen(3000, () => {
	console.log('App is listening on port 3000');
})

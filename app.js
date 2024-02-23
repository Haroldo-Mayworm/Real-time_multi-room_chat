/* Import server configuration */
var app = require('./config/server');
const port = 80;

app.listen(port, () => {
    console.log(`Server online - http://localhost:${port}`);
});

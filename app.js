const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html> 
<html>
    <head>
        <title>RoveApp2 WebApp Server</title>
    </head>
    <body>
        <h1>RoveApp2 WebApp Server</h1>
        <p>Welcome to RoveApp2 WebApp Server</p>
        <pre>
            // Our Custom RoveAppp2 Web App Routes
             app.get('/visits', visits.findAll);
            app.get('/users', users.findAll);

            app.get('/visits/:id', visits.findOne);
            app.get('/users/:id', users.findOne);

            app.post('/visits',visits.addVisit);

            app.put('/visits/:id', visits.editVisit);

            app.delete('/visits/:id', visits.deleteVisit);
        </pre>
    </body>
</html>

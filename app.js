const express = require('express');
const parser = require("@apidevtools/swagger-parser");
const app = express();
const port = 3000;
app.get('/api', (req, res) => {
    var swaggerUrl = req.query.url;
    if (swaggerUrl) {
        parser.validate(swaggerUrl, (err, api) => {
            if (err) {
                res.send(err.message);
            }
            res.send(JSON.stringify(api));
        });
    }
    else {
        res.send("You need to include a url to a swagger document (ie ?url=http://github.com/...) ");
    }
    //res.end();
});
app.listen(port, () => {
    console.log(`API Parser is running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map
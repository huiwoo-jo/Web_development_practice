// ./routes/controller.js
module.exports = function(app) {
    app.get('/', (req, res) => {
        var html = "<!DOCTYPE HTML>"
            + "<html>"
            + "<head>"
            + "<meta charset='UTF-8'>"
            + "<title>"
            + "</title>"
            + "</head>"
            + "<body>"
            + "<h1>ROOT</h1>"
            + "</body>"
            + "</html>"
        res.send(html);
    });

    app.get('/contact', (req, res) => {
        res.send('Contact Us');
    });
};
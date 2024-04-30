// ./routes/controller.js
module.exports = function(app) {
    app.get('/', (req, res)=>{
        res.render('ROOT');
    });

    app.get('/contact', (req, res)=>{
        res.render('Contact');
    });
}
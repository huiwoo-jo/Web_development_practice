// ./routes/controller.js
module.exports = function(app) {
/*     app.get('/', (req, res)=>{
        res.send('ROOT');
    });

    app.get('/contact', (req, res)=>{
        res.send('Contact');
    });
 */
    app.get('/', (req, res)=>{
        res.render('index');
    });

    app.get('/contact', (req, res)=>{
        res.render('Contact');
    });
}
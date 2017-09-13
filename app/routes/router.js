module.exports = function(app) {



    app.get("/",function(req, res) {
        res.render('base-site/index');
    });

    app.get("/instituto",function(req, res) {
        res.render('base-site/instituto');
    });

    app.get("/porque-ser-macom",function(req, res) {
        res.render('base-site/porque-ser-macom');
    });

};

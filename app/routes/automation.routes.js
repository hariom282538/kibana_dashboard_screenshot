module.exports = function (app) {


    var kibana = require('../controllers/kibana.controller.js');

    app.get('/kibana', kibana.capture);

}

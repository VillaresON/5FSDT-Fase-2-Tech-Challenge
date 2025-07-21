const Controller = require('./Controller.js');
const AutorService = require('../services/AutorService.js');
const autorService = new AutorService();

class AutorController extends Controller {
    constructor() {
        super(autorService);
    }
}

module.exports = AutorController;

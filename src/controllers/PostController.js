const Controller = require('./Controller.js');
const PostService = require('../services/PostService.js');
const postService = new PostService();

class PostController extends Controller {
    constructor() {
        super(postService);
    }
}

module.exports = PostController;

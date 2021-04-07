const express = require("express"),
  path = require("path");
    bodyParser = require("body-parser");

/**
 * Class for a base express app
 * @class
 * @classdesc This is a base Class for Express Application in node.
 *
 */
class ExpressApp {
  /**
   * Class constructor
   * @param {object} conntext
   * @return {ExpressApp}
   */
  constructor(conntext) {
    //Set options if present on context
    this.options = conntext.options || {};

    const app = express();
    const router = express.Router();

    this.express = express;
    this.app = app;
    this.router = router;

    this.defaultRoute = this.options.defaultRoute || "/";

    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    this.appName =
      this.options.appName || path.basename(process.argv[1], ".js");
  }
}

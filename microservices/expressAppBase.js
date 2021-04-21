const express = require("express"),
  cookie = require("cookie"),
  path = require("path"),
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

  /**
   * function to add custom routes by extending classes, override to add custom routes
   */
  addCustomRoute() {}

  /**
   * Start express app listening
   */
  startExpress() {
    const app = this.app;
    const options = this.options;
    let server = app;

    app.server = server
      .listen(options.port, () => {
        console.log(`Running Server on port ${options.port}`);
      })
      .on("error", (e) => {
        console.log(`Could not start server, error ${e.code}`, e);
        process.exit(1);
      });
  }

  /**
   * Aplication initiation
   */
  _initExpress() {
    //Parse cookies
    this.app.use((req, res, next) => {
      req.cookies = cookie.parse(req.headers.cookie || "");
      next();
    });
  }

  /**
   * the run function which will start the application
   *
   */
  run() {
    this.startExpress();
  }
}

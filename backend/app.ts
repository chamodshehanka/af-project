import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as errorHandler from "./helpers/error.handler";
import api from "./api";

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
    this.catchErrors();
  }

  private setMiddlewares(): void {
    this.express.use(cors());
    // this.express.use(morgan('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    // this.express.use(helmet());
  }

  private setRoutes(): void {
    this.express.use("/api", api);
  }

  private catchErrors(): void {
    this.express.use(errorHandler.notFound);
    this.express.use(errorHandler.internalServerError);
    this.express.use(errorHandler.badRequest);
  }
}

export default new App().express;

import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index"; // imports all routes from routes module
import cors from "cors"; // cors is using to resolve CORS

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
    }
    private config(): void {
        // enable cors by adding cors middleware
        this.app.use(cors());
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // add routes
        this.app.use("/api/v1", routes);
    }
}
export default new App().app;
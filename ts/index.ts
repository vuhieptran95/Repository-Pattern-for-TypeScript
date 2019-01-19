import * as express from "express";
import { db } from "./config/FirebaseConfig";
import { User } from "./interfaces/models/user";
import { apiUsersGet } from "./services/api-users";

const app = express();

app.get("/", (req, res) => {
  res.send("Server TS works");
});

// app.get("/api/users", apiUsersGet);
app.route("/api/users").get(apiUsersGet);

app.listen(Number(process.env.port) || 3001, "localhost", () => console.log("Server TS started"));

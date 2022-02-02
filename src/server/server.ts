import express from "express";
import path from "node:path";
import { addLiveReload } from "./live-reload.js";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/js", express.static(path.join("built", "client")));

addLiveReload(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

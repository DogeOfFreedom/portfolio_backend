/* eslint-disable import/newline-after-import */
const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

const router = require("./routers/router");
const skillRouter = require("./routers/skill");
const projectRouter = require("./routers/project");
app.use(router);
app.use(skillRouter);
app.use(projectRouter);

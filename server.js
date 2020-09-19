const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(bodyParser.json());

app.route("/upload").post((req, res, next) => {
  console.log(req.files);
});

const server = app.listen(3030, () => {
  console.log("Listening on port %d", server.address().port);
});

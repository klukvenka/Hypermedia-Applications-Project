const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync();

/*{ force: true }).then(() => {
  console.log("Drop and re-sync db.")};*/

  var corsOptions = {
  origin: ["https://hypercompany.herokuapp.com","http://localhost:3000","http://hypercompany.herokuapp.com"]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/status", (req, res) => {
  res.json({ message: "Server is running" });
});

require("./routes/areas.routes")(app);
require("./routes/members.routes")(app);
require("./routes/products.routes")(app);

export default app
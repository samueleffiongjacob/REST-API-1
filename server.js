const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type -application/json
app.use(express.json());

// parse requests of content-type -application/ x- www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Simple Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SideHustle Node Rest Ap1 with express" });
});

require("./src/route/user.route.js")(app);

//Set Port, Listen for requests

//const PORT = process.evn.PORT || 3000; this told me port not not define in node module

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}.`);
});

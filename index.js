const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const bdRoutes = require("./routes/bookRoutes");

app.use(morgan("tiny"));
console.log("Morgan was enabled...");

mongoose
  .connect("mongodb://localhost:27017/Bookdirectory")
  .then(() => console.log("Connected too MongoDB..."))
  .catch((err) => console.error(err));

app.use(express.json());
app.use("/api/bookDirectory", bdRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Connecting to the port ${port}...`);
});


// console.log()
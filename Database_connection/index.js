const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const employeesRoute = require("./routes/route");
app.use("/employees", employeesRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

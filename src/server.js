if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.js");

const app = express();
const port = process.env.PORT || 3000 || 3001 || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`🚀 Server is runing: at PORT ${port}`);
})
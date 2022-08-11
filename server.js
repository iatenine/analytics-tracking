const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use(routes);

const init = async () => {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error(err);
  }
};

// sync sequelize models
init();

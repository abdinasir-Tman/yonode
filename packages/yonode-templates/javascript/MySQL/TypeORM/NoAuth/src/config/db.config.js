import "reflect-metadata";
import { DataSource } from "typeorm";
import { dbName, dbURL } from "./initial.config.js";
import chalk from "chalk";

const AppDataSource = new DataSource({
  type: "mysql",
  url: dbURL,

  database: dbName,
  entities: ["../entity/**/*.js"],
});

AppDataSource.initialize()
  .then(async () => {
    console.log(`${chalk.green.bold("Connected")} to the database`);
  })
  .catch((error) =>
    console.log(`${chalk.red.bold("Failed")} to connect the database: ${error}`)
  );

export default AppDataSource;

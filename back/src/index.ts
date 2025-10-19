import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import server from "./server";
import { PORT } from "./config/envs";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

process.on("uncaughtException", (err) => {
  console.error("uncaughtException:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error(" unhandledRejection:", reason);
});

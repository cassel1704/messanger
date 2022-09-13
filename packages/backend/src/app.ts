import express, { Response, Request } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_APP_PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  try {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  } catch (e) {
    console.log("Error has occured while starting the server...");
    process.exit();
  }
});

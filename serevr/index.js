import express from "express"; // Removed unnecessary `Router` import
import dotenv from "dotenv";
import router from "./userRoutes/UserRoutes.js";
import dbcon from "./config/dbConfig.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not set

app.use(cors()); // Place CORS middleware before defining routes
app.use(express.json()); // To parse incoming JSON requests
app.use("/user", router);

dbcon.connect((err) => {
  if (err) {
    console.log("Database not connected"); // Fixed spelling error
  } else {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
});

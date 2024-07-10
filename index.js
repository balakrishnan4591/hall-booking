//importing express to create express server
import express from "express";

//Importing cors for restricting domains/port
import cors from "cors";

//Importing hallRouter to access other API endpoints
import hallRouter from "./routers/hall.js";

//creating express server
const app = express();

//creating port
const PORT = 5001;

//using cors
app.use(cors());

//using json() method to parse the body data
app.use(express.json());

// Route handler for root endpoint
app.get("/", (req, res) => {
  const htmlResponse = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hall Booking API</title>
    <style>
      body {
        background-image: url("https://imageio.forbes.com/specials-images/imageserve/652f603a91415a3d647fc207/Modern-Style-Bedroom/960x0.jpg?format=jpg&width=960");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: #e5eead;
        margin: 0;
        padding: 0;
        display: grid;
        place-items: center;
      }
      .container {
        height: 200px;
        width: 600px;

        border: 2px solid rgb(77, 84, 79);
        border-radius: 10px;

        background: rgba(44, 42, 42, 0.8);
        backdrop-filter: blur(10px);

        margin-top: 100px;
        text-align: center;
      }
      h1 {
        color: #ffffff;
      }
      p {
        color: #ffffff;
      }
      a {
        color: rgb(96, 96, 221);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Hall Booking API Running Successfully</h1>
      <p>
        To test the same
        <a
          href="https://documenter.getpostman.com/view/36588127/2sA3e48TPg
      "
          >Click here</a
        >
      </p>
    </div>
  </body>
</html>

    `;
  res.status(200).send(htmlResponse);
});

// Mounting hallRouter
app.use("/", hallRouter);

//Listening to the express server
app.listen(PORT, () => {
  console.log(`Express Server Connected with the Port : ${PORT}`);
});

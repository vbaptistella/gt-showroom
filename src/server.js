import express from "express";
import fs from "fs";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/vehicles/:brand", (req, res) => {
  const brand = req.params.brand;

  const carFolders = fs.readdirSync(`./src/assets/models/${brand}`);
  const vehicles = [];

  carFolders.forEach((carFolder) => {
    const carData = fs.readFileSync(
      `./src/assets/models/${brand}/${carFolder}/data.json`,
      { encoding: "utf8", flag: "r" }
    );
    vehicles.push(JSON.parse(carData));
    console.log(carData);
  });

  res.send(vehicles).status(200);
});

app.get("/vehicle/:brand/:carId", (req, res) => {
  const brand = req.params.brand;
  const carId = req.params.carId;

  const carData = fs.readFileSync(
    `./src/assets/models/${brand}/${carId}/data.json`,
    { encoding: "utf8", flag: "r" }
  );
  console.log(carData);

  res.send(JSON.parse(carData)).status(200);
});

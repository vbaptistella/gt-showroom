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

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/brands", (req, res) => {
  const brandFolders = fs.readdirSync(`./src/assets/models/`);
  const brands = [];

  brandFolders.forEach((brandFolder) => {
    let brandData;
    try {
      const dataFile = fs.readFileSync(
        `./src/assets/models/${brandFolder}/brand.json`
      );
      brandData = JSON.parse(dataFile);
    } catch (e) {
      brandData = { error: "data file missing" };
    }
    brands.push(brandData);
  });

  res.send(brands).status(200);
});

app.get("/api/brand/:brandId", (req, res) => {
  const brandId = req.params.brandId;
  let brandData;
  console.log(brandId)

  try {
    const dataFile = fs.readFileSync(
      `./src/assets/models/${brandId}/brand.json`
    );
    brandData = JSON.parse(dataFile);
  } catch (e) {
    brandData = { error: "data file missing" };
  }

  res.send(brandData).status(200);
});

app.get("/api/vehicles/:brand", (req, res) => {
  const brand = req.params.brand;

  const carFolders = fs.readdirSync(`./src/assets/models/${brand}`);
  const vehicles = [];

  carFolders.forEach((carFolder) => {
    let carData;
    try {
      carData = fs.readFileSync(
        `./src/assets/models/${brand}/${carFolder}/data.json`,
        { encoding: "utf8", flag: "r" }
      );
      vehicles.push(JSON.parse(carData));
      console.log(carData);
    } catch {
      console.error("file doesn't exist");
    }
  });

  res.send(vehicles).status(200);
});

app.get("/api/vehicle/:brand/:carId", (req, res) => {
  const brand = req.params.brand;
  const carId = req.params.carId;

  const carData = fs.readFileSync(
    `./src/assets/models/${brand}/${carId}/data.json`,
    { encoding: "utf8", flag: "r" }
  );
  console.log(carData);

  res.send(JSON.parse(carData)).status(200);
});

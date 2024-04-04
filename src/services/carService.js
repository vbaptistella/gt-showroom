import axios from "axios";

export function getBrands() {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `http://localhost:3000/brands/`,
    })
      .then(function (response) {
        resolve(response.data);
      })
      .catch((error) => {
        reject(reject);
        console.error(error);
      });
  });
}

export function getBrandData(brandId) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `http://localhost:3000/brand/${brandId}`,
    })
      .then(function (response) {
        resolve(response.data);
      })
      .catch((error) => {
        reject(reject);
        console.error(error);
      });
  });
}

export function getCarsFromBrand(brand) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `http://localhost:3000/vehicles/${brand}`,
    })
      .then(function (response) {
        resolve(response.data);
      })
      .catch((error) => {
        reject(reject);
        console.error(error);
      });
  });
}

export function getCarData(brand, carId) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `http://localhost:3000/vehicle/${brand}/${carId}`,
    })
      .then(function (response) {
        resolve(response.data);
      })
      .catch((error) => {
        reject(reject);
        console.error(error);
      });
  });
}

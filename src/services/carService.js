import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export function getBrands() {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${baseUrl}/api/brands/`,
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
      url: `${baseUrl}/api/brand/${brandId}`,
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
      url: `${baseUrl}/api/vehicles/${brand}`,
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
      url: `${baseUrl}/api/vehicle/${brand}/${carId}`,
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

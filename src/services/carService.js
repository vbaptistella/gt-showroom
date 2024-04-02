import axios from "axios";

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
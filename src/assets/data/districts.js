// West: FR, IT (7)
// North: UK, DE (12)
// South: US (6)
// East: JP (9)

export const districts = {
  us: {
    id: "us",
    name: "United States",
    brands: [
      { name: "Dodge", id: "dodge", pos: [950, 310] },
      { name: "Ford", id: "ford", pos: [640, 140] },
      { name: "Chevrolet", id: "chevrolet", pos: [310, 230] },
      { name: "Vector", id: "vector", pos: [530, 490] },
      { name: "Acura", id: "acura", pos: [250, 420] },
      { name: "Plymouth", id: "plymouth", pos: [980, 470] },
      { name: "Shelby", id: "shelby", pos: [640, 310] },
      { name: "Infiniti", id: "infiniti", pos: [1010, 180] },
    ],
    pos: [100, 210],
  },
  uk: {
    id: "uk",
    name: "United Kingdom",
    brands: [
      { name: "Aston Martin", id: "astonMartin", pos: [400, 110] },
      { name: "Vauxhall", id: "vauxhall", pos: [200, 490] },
      { name: "Mini", id: "mini", pos: [600, 310] },
      { name: "MG", id: "mg", pos: [450, 390] },
      { name: "Jaguar", id: "jaguar", pos: [770, 130] },
      { name: "Lotus", id: "lotus", pos: [760, 410] },
      { name: "TVR", id: "tvr", pos: [1070, 260] },
      { name: "Lister", id: "lister", pos: [140, 320] },
    ],
    pos: [460, 140],
  },
  de: {
    id: "de",
    name: "Germany",
    brands: [
      { name: "Mercedes-Benz", id: "mercedesBenz", pos: [160, 200] },
      { name: "BMW", id: "bmw", pos: [1010, 340] },
      { name: "RUF", id: "ruf", pos: [860, 170] },
      { name: "Audi", id: "audi", pos: [160, 480] },
      { name: "Opel", id: "opel", pos: [630, 420] },
      { name: "Volkswagen", id: "volkswagen", pos: [550, 130] },
    ],
    pos: [730, 210],
  },
  fr: {
    id: "fr",
    name: "France",
    brands: [
      { name: "Peugeot", id: "peugeot", pos: [500, 120] },
      { name: "Citroën", id: "citroen", pos: [670, 370] },
      { name: "Renault", id: "renault", pos: [340, 330] },
      { name: "Venturi", id: "venturi", pos: [710, 210] },
    ],
    pos: [420, 340],
  },
  it: {
    id: "it",
    name: "Italy",
    brands: [
      { name: "FIAT", id: "fiat", pos: [440, 330] },
      { name: "Lancia", id: "lancia", pos: [450, 120] },
      { name: "Alfa Romeo", id: "alfa", pos: [160, 330] },
    ],
    pos: [560, 460],
  },
  jp: {
    id: "jp",
    name: "Japan",
    brands: [
      { name: "Toyota", id: "toyota", pos: [460, 270] },
      { name: "Daihatsu", id: "daihatsu", pos: [610, 310] },
      { name: "Mitsubishi", id: "mitsubishi", pos: [150, 470] },
      { name: "Mazda", id: "mazda", pos: [710, 180] },
      { name: "Nissan", id: "nissan", pos: [230, 230] },
      { name: "Subaru", id: "subaru", pos: [900, 340] },
      { name: "Honda", id: "honda", pos: [410, 420] },
      { name: "Suzuki", id: "suzuki", pos: [930, 160] },
      { name: "Tommy Kaira", id: "tommyKaira", pos: [420, 120] },
    ],
    pos: [960, 290],
  },
};

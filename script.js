const alertbox = document.querySelector("#alert");

const cakedropdown = document.querySelector("#birthdayCakeDropdown");
const cupsdropdown = document.querySelector("#partyCupsDropdown");
const kegsdropdown = document.querySelector("#beerKegsDropdown");
const beefDropdown = document.querySelector("#beefDropdown");
const vestDropdown = document.querySelector("#bulletProofVestDropdown");

const cakeForm = document.querySelector("#cakeForm");
const cupsForm = document.querySelector("#cupsForm");
const beerForm = document.querySelector("#beerForm");
const beefForm = document.querySelector("#beefForm");
const vestForm = document.querySelector("#vestForm");

const cakeQtyText = document.querySelector("#cake-qty-text");
const cakeQty = document.querySelector("#cake-qty");
const cakePrice = document.querySelector("#cake-price");

const cupsQtyText = document.querySelector("#cups-qty-text");
const cupsQty = document.querySelector("#cups-qty");
const cupsPrice = document.querySelector("#cups-price");

const beerQtyText = document.querySelector("#beer-qty-text");
const beerQty = document.querySelector("#beer-qty");
const beerPrice = document.querySelector("#beer-price");

const beefQtyText = document.querySelector("#beef-qty-text");
const beefQty = document.querySelector("#beef-qty");
const beefPrice = document.querySelector("#beef-price");

const vestQtyText = document.querySelector("#vest-qty-text");
const vestQty = document.querySelector("#vest-qty");
const vestPrice = document.querySelector("#vest-price");

const totalPrice = document.querySelector("#totalPrice");

let totalPriceSliced = totalPrice.innerText.slice(1);
totalPriceSliced = parseFloat(totalPriceSliced);

function openCakeDropdown() {
  if (cakedropdown.classList[2] === "d-none") {
    cakedropdown.classList.remove("d-none");
  } else {
    cakedropdown.classList.add("d-none");
  }
}

function openCupsDropdown() {
  if (cupsdropdown.classList[2] === "d-none") {
    cupsdropdown.classList.remove("d-none");
  } else {
    cupsdropdown.classList.add("d-none");
  }
}

function openbeerDropdown() {
  if (kegsdropdown.classList[2] === "d-none") {
    kegsdropdown.classList.remove("d-none");
  } else {
    kegsdropdown.classList.add("d-none");
  }
}

function openBeefDropdown() {
  if (beefDropdown.classList[2] === "d-none") {
    beefDropdown.classList.remove("d-none");
  } else {
    beefDropdown.classList.add("d-none");
  }
}

function openVestDropdown() {
  if (vestDropdown.classList[2] === "d-none") {
    vestDropdown.classList.remove("d-none");
  } else {
    vestDropdown.classList.add("d-none");
  }
}

function cake() {
  cakeQtyText.innerText = cakeQty.value;

  totalPriceSliced += parseInt(cakeQty.value) * parseFloat(cakePrice.value);

  totalPrice.innerText = `$ ${parseFloat(totalPriceSliced).toFixed(2)}`;
}

function cups() {
  cupsQtyText.innerText = cupsQty.value;

  totalPriceSliced += parseInt(cupsQty.value) * parseFloat(cupsPrice.value);

  totalPrice.innerText = `$ ${parseFloat(totalPriceSliced).toFixed(2)}`;
}

function beer() {
  beerQtyText.innerText = beerQty.value;

  totalPriceSliced += parseInt(beerQty.value) * parseFloat(beerPrice.value);

  totalPrice.innerText = `$ ${parseFloat(totalPriceSliced).toFixed(2)}`;
}

function beef() {
  beefQtyText.innerText = beefQty.value;

  totalPriceSliced += parseInt(beefQty.value) * parseFloat(beefPrice.value);

  totalPrice.innerText = `$ ${parseFloat(totalPriceSliced).toFixed(2)}`;
}

function vest() {
  if (vestQty.value.match(/\-?\d+\.\d+/)) {
    alert("Kindly add integer value");
  } else {
    vestQtyText.innerText = vestQty.value;

    totalPriceSliced += parseInt(vestQty.value) * parseFloat(vestPrice.value);

    totalPrice.innerText = `$ ${parseFloat(totalPriceSliced).toFixed(2)}`;
  }
}

function orderPlaced() {
  if (
    totalPrice.innerText === '$0.00'
  ) {
    alert("You didn't select a single item");
  } else {
    alertbox.classList.remove("d-none");
    setTimeout(function () {
      alertbox.classList.add("d-none");
    }, 3000);
  }
}

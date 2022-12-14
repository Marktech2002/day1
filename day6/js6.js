const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"; //a jspn file
const cities = [];

// converting it into raw data and pushing into cities
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
function findMatches(wordToMatch, cities) {
  return cities.filter((places) => {
    const regex = new RegExp(wordToMatch, "gi"); // regex for special characters
    return places.city.match(regex) || places.state.match(regex);
  });
}

// commas to number
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class = "h1" ${this.value}</span>`
      );
      const stateName = place.city.replace(
        regex,
        `<span class = "h1" ${this.value}</span>`
      );
      return `
    <li>
    <span class = "name"> ${cityName} , ${stateName}</span>
    <span class = "population"> ${place.population}</span>
    </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
